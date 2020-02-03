const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('./api/models/user');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb;');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./api/routes/user');

userRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
