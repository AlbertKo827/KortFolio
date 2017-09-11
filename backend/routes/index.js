const express = require('express');
const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;

const login = require('./login.js');
const restAPI = require('./RESTfulAPI');

exports.login = (app => {
    var routeLogin = express.router()

})

module.exports = (app=>{//Test
    app.get('/',(req, res)=>{
        res.send(`<h1>Fuck it...</h1>`);
    })

    app.post('/',(req, res)=>{
        res.redirect('/home');
    })

    app.get('/home',(req, res)=>{
        res.send(`<h1>here is home</h1>`);
    })
})