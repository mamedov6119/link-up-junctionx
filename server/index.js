const express = require('express');
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');


// -- -- -- -- -- Configuration  -- -- -- -- -- //
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.MONGO_DB || 'database';
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';


// -- -- -- -- -- Initialization  -- -- -- -- --//
const app = express();
const client = new MongoClient(MONGO_URL);
const database = client.db(MONGO_DB);

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// -- -- -- -- -- Database connection  -- -- -- //
(async () => {
    await client.connect();
    console.log('Connected to MongoDB');
})().catch(error => console.log(error));


// -- -- -- -- -- Functions  -- -- -- -- -- --  //
function validateUser(name, phone, email, password) {
    if (!name || !phone || !email || !password)
        return false;

    if (name.length < 5)
        return false;

    if (phone.length !== 11 || phone.match(/\D/))
        return false;

    if (email.length < 5 || !email.includes('@'))
        return false;

    return true;
}

function validateLogin(email, password) {
    if (!email || !password)
        return false;

    if (email.length < 5 || !email.includes('@'))
        return false;

    return true;
}

function setupUser(user) {
    return {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        role: 'user',
        money: 0,
        packages: [],
        createdAt: new Date()
    }
}

// -- -- -- -- -- Routes  -- -- -- -- -- -- --  //
app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/users', async (req, res) => {
    let users = await database.collection('users').find().toArray();
    users = users.map(user => {
        delete user.password;
        return user;
    });
    res.json(users);
});

app.post('/users', express.json(), async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!validateUser(name, phone, email, password))
        return res.sendStatus(400);
    const user = setupUser(req.body);
    await database.collection('users').insertOne(user);
    res.sendStatus(201);
});

app.get('/login', express.json(), async (req, res) => {
    const { email, password } = req.body;
    if (!validateLogin(email, password))
        return res.sendStatus(400);
    const user = await database.collection('users').findOne({ email, password });
    if (!user) return res.sendStatus(401);
    res.cookie('user_id', user._id.toString(), { expires: new Date(Date.now() + 900000) });
    res.sendStatus(200);
});

app.get('/logout', (req, res) => {
    res.clearCookie('user_id');
    res.sendStatus(200);
});

app.get('/profile', async (req, res) => {
    const { user_id } = req.cookies;
    if (!user_id) return res.sendStatus(401);
    const user = await database.collection('users').findOne({ _id: user_id });
    if (!user) return res.sendStatus(401);
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});