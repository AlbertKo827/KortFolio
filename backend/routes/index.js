const express = require('express');
const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;

const login = require('./login.js').loginRoute(express.Router(), passport);
const restAPI = require('./RESTfulAPI');
const config = require('../module/configuration.js');

module.exports = (app=>{//Test
app.use(passport.initialize());

    app.get('/', (req, res)=>{
        res.render('index');
    })

    app.get('/home',(req, res)=>{
        res.send(`<h1>Fuck it...</h1>`);
    })

    app.post('/fail',(req, res)=>{
        res.send('ok');
    } )

    app.post('/home',(req, res)=>{
        res.send('ok');
    } )

/*
    app.post('/',(req, res)=>{
        res.redirect('/home');
    })

    app.get('/home',(req, res)=>{
        res.send(`<h1>here is home</h1>`);
    })
*/
    app.use('/login', login);
///////////////////////////////////////////
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id ,done)=>{
        User.findById(id, (err, user)=>{
            done(err, user);
        })
    });

    passport.use('naver', new naverStrategy(config.naverValue, 
        (accessToken, refreshToken, profile, done)=>
        {
            done(null, profile);
        }
    ));

    passport.use('facebook', new facebookStrategy(config.facebookValue, 
        (accessToken, refreshToken, profile, cb)=>
        {
    
        }
    ));

    passport.use('kakao', new kakaoStrategy(config.kakaoValue, 
        (accessToken, refreshToken, profile, done)=>
        {
            console.log(profile);
        }
    ));
})