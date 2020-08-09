import React from 'react';
const mongoose = require('mongoose')


    
mongoose.connect("mongodb+srv://Paul:ogIY0lMxV43MVH31@testing.35ywp.mongodb.net/time-keeper?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log(con.connections);
    console.log('DB Connection Successful');
})

export default function Db({}){};