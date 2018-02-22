const express = require('express');
const passport = require('passport');
const path = require('path');
const restAPI = require('./RESTfulAPI');


const route = express.Router();

const login = require('./login.js')(route, passport);
const register = require('./register.js')(route);



route.get('/', (req, res)=>{
    console.log('home');
    console.log(path.join(__dirname, '/view/index.html'));
    res.send(`<h1>Test</h1>`);
})

route.use('/login', login);
route.use('/register', register);

module.exports = route;
