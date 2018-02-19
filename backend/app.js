const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const Mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const Config = require('./module/configuration.js');//Configration Data e.g>host url, key value...

//PassPort
const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
/////////////////////////////////////

const route = require('./routes')//RESTful API
const index = require('./routes/index.js');
const User = require('./module/users.js').User(Mongoose);



app.locals.pretty = true;

app.use('/', express.static(path.join(__dirname, 'view')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser(Config.secretCookie));

Config.KFInitialize(app, Mongoose, session, MongoStore);

app.get('*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view/index.html'), (err) =>{
        if(err){
            res.send(`<h1>불러오는데 실패했습니다.</h1>`);
            console.log(err);
        }
       else{
           next();
       }
    });
});

app.use('/', index);

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
        console.log(profile);

        var _profile = profile._json;

        User.findOne({//DB에서 회원 정보를 찾는다.
            '_id': profile.id
        }, (err, user)=>{

            if(err){//DB Error!
                console.log(err);

                return done(err);
            }

            if (!user) {//회원이 아니라면
                user = {//신규 유저 정보를 JSON으로
                    name: profile.displayName,
                    email: _profile.email,
                    username: profile.displayName
                };

                user.save((err)=>{
                    if (err){ 
                        console.log(err);

                        return done(err);
                    }

                    return done(err, user);
                });
            } else {
                return done(err, user);
            }
        });
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
        
    }
));
//#endregion

Config.serverOn(app);