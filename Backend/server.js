const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();

const DUMMY_USERS = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.get('/users', (req, res, next) => {
    res.status(200).json({users: DUMMY_USERS})
});

app.post('/user',(req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || username.trim().length === 0 || !email || email.trim().length === 0 || !password || password.trim().length === 0) {
        return res.status(422).json({
            message: 'Invalid input, please fill out the form'
        })
    }

    const createdUser = {
        //id: uuid(),
        username,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);

    res
        .status(201)
        .json({message: 'Created new user.', user: createdUser});
});

app.listen(5000);