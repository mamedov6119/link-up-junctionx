const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
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
app.use(express.static('public'));

app.get('/api/users', async (req, res) => {
    let users = await database.collection('users').find().toArray();
    // users = users.map(user => {
    //     delete user.password;
    //     return user;
    // });
    res.json(users);
});

app.post('/api/users', express.json(), async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!validateUser(name, phone, email, password))
        return res.sendStatus(400);
    const user = setupUser(req.body);
    await database.collection('users').insertOne(user);
    res.sendStatus(201);
});

app.post('/api/login', express.json(), async (req, res) => {
    const { email, password } = req.body;
    if (!validateLogin(email, password))
        return res.sendStatus(400);
    console.log(email, password);
    const user = await database.collection('users').findOne({ email, password });
    if (!user) return res.sendStatus(401);
    console.log(user);
    res.cookie('user_id', user._id.toString(), { expires: new Date(Date.now() + 900000) });
    res.sendStatus(200);
});

app.get('/api/logout', (req, res) => {
    res.clearCookie('user_id');
    res.sendStatus(200);
});

app.get('/api/profile', async (req, res) => {
    const { user_id } = req.cookies;
    if (!user_id) return res.sendStatus(401);
    const user = await database.collection('users').findOne({ _id: new ObjectId(user_id) });
    if (!user) return res.sendStatus(401);
    res.json(user);
});

app.post('/api/operations', async (req, res) => {
    const { user_id } = req.cookies;
    if (!user_id) return res.sendStatus(401);
    const user = await database.collection('users').findOne({ _id: new ObjectId(user_id) });
    if (!user) return res.sendStatus(401);
    const { amount } = req.body;
    if (!amount) return res.sendStatus(400);
    const newMoney = user.money + amount;
    await database.collection('users').updateOne({ _id: new ObjectId(user_id) }, { $set: { money: newMoney } });
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});