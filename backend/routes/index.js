const express = require('express');
const passport = require('passport');
const restAPI = require('./RESTfulAPI');


const route = express.Router();

const login = require('./login.js')(route, passport);
const register = require('./register.js')(route);

route.use('/login', login);
route.use('/register', register);

module.exports = route;
