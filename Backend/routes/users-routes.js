const express = require("express");
const uuid = require('uuid');

const router = express.Router();

const DUMMY_USERS = [];



router.get('/user-list', (req, res, next) => {
    res.status(200).json({users: DUMMY_USERS})
});

router.post('/register',(req, res, next) => {
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

module.exports = router;