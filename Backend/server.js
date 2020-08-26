const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');


const usersRoutes = require("./routes/users-routes");


//Crypto things
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const app = express();


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

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);





app.listen(5000);