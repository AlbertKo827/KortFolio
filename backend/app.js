const express = require('express');
const session = require('express-session');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const Mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const Config = require('./module/configuration.js');//Configration Data e.g>host url, key value...

const route = require('./routes')//RESTful API

//PassPort
const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
/////////////////////////////////////

app.locals.pretty = true;

app.use(express.static('./view/frontend/KortFolio/dist'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser(Config.secretCookie));

app.set('view engine', 'ejs');
app.set('views', './view/frontend/KortFolio/dist');
app.engine('html', require('ejs').renderFile);
Config.KFInitialize(app, Mongoose, session, MongoStore);

//#region PassPort
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

passport.use('naver', new naverStrategy(Config.naverValue, 
    (accessToken, refreshToken, profile, done)=>
    {
        done(null, profile);
    }
));

passport.use('facebook', new facebookStrategy(Config.facebookValue, 
    (accessToken, refreshToken, profile, cb)=>
    {

    }
));

passport.use('kakao', new kakaoStrategy(Config.kakaoValue, 
    (accessToken, refreshToken, profile, done)=>
    {
        console.log(profile);
    }
));
//#endregion
//////////////////////////////////////////////


route(express, passport);
// require('./routes/login.js').loginRoute(app);

Config.serverOn(app);