const express = require('express');
const { MongoClient } = require('mongodb');

// -- -- -- -- -- Configuration  -- -- -- -- -- //
const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.MONGO_DB || 'database';
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';


// -- -- -- -- -- Initialization  -- -- -- -- --//
const app = express();
const client = new MongoClient(MONGO_URL);
const database = client.db(MONGO_DB);


// -- -- -- -- -- Database connection  -- -- -- //
(async () => {
    await client.connect();
    console.log('Connected to MongoDB');
})().catch(error => console.log(error));


// -- -- -- -- -- Functions  -- -- -- -- -- --  //
function validateUser(name, phone, email, password) {
    if (!name || !phone || !email || !password) {
        return false;
    }
    return true;
}


// -- -- -- -- -- Routes  -- -- -- -- -- -- --  //
app.use(express.static('public'));

app.get('/api/users', async (req, res) => {
    const users = await database.collection('users').find().toArray();
    res.json(users);
});

app.post('/api/users', express.json(), async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!validateUser(name, phone, email, password)) {
        return res.sendStatus(400);
    }
    const user = { name, phone, email, password };
    await database.collection('users').insertOne(user);
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});