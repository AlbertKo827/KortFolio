const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const Mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const Config = require('./module/configuration.js');//Configration Data e.g>host url, key value...

const Mail = require('./module/mailsend.js');

//PassPort
const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
/////////////////////////////////////

//const route = require('./routes')//RESTful API
//const index = require('./routes/index.js');

const route = express.Router();

const login = require('./routes/login.js')(route, passport);
const register = require('./routes/register.js')(route);

const User = require('./module/users.js').User(Mongoose);

app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'view')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser(Config.secretCookie));

Config.KFInitialize(app, Mongoose, session, MongoStore);




//#region PassPort
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done)=>{
    console.log(user);
    done(null, user._id);
});

passport.deserializeUser((id ,done)=>{
    User.findById(id, (err, user)=>{
        done(err, user);
    })
});

passport.use('naver', new naverStrategy(Config.naverValue, 
    (accessToken, refreshToken, profile, done)=>
    {
        //console.log(profile);
        
        var _profile = profile._json;

        User.findOne({//DB에서 회원 정보를 찾는다.
            '_id': profile.id
        }, (err, user)=>{

            if(err){//DB Error!
                console.log("에러! : " + err);

                return done(err);
            }
            else if (!user) {//회원이 아니라면
                const _user = new User({//신규 유저 정보를 JSON으로
                    _id : _profile.id,
                    _name: profile.displayName,
                    _email: _profile.email
                });

                _user.save((err)=>{

                    if (err){ 
                        console.log(err);
                        console.log('done 1');
                        return done(err);
                    }
                    else{
                        console.log('done 2');
                        return done(null, user);
                    }
                });
            } else {
                console.log('로그인');
                return done(null, user);
            }
        });
    }
));

passport.use('facebook', new facebookStrategy(Config.facebookValue, 
    (accessToken, refreshToken, profile, done)=>
    {
        var _profile = profile._json;

        console.log(profile);

        User.findOne({//DB에서 회원 정보를 찾는다.
            '_id': profile.id
        }, (err, user)=>{

            if(err){//DB Error!
                console.log("에러! : " + err);

                return done(err);
            }
            else if (!user) {//회원이 아니라면
                const _user = new User({//신규 유저 정보를 JSON으로
                    _id : _profile.id,
                    _name: profile.displayName,
                    _email: _profile.email
                });

                _user.save((err)=>{

                    if (err){ 
                        console.log(err);
                        console.log('done 1');
                        return done(err);
                    }
                    else{
                        console.log('done 2');
                        return done(null, user);
                    }
                });
            } else {
                console.log('로그인');
                return done(null, user);
            }
        });
    }
));

passport.use('kakao', new kakaoStrategy(Config.kakaoValue, 
    (accessToken, refreshToken, profile, done)=>
    {
        var _profile = profile._json;

        console.log(profile);

        User.findOne({//DB에서 회원 정보를 찾는다.
            '_id': profile.id
        }, (err, user)=>{

            if(err){//DB Error!
                console.log("에러! : " + err);

                return done(err);
            }
            else if (!user) {//회원이 아니라면
                const _user = new User({//신규 유저 정보를 JSON으로
                    _id : _profile.id,
                    _name: profile.displayName,
                    _email: _profile.email
                });

                _user.save((err)=>{

                    if (err){ 
                        console.log(err);
                        console.log('done 1');
                        return done(err);
                    }
                    else{
                        console.log('done 2');
                        return done(null, user);
                    }
                });
            } else {
                console.log('로그인');
                return done(null, user);
            }
        });
    }
));
//#endregion



app.get('/login/auth/naver', passport.authenticate('naver', null),
        (req, res)=>{
            console.log('connect naver');
        })

app.get('/login/naver_oauth', passport.authenticate('naver', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    //res.json({message : "success", username : req.user._name});
    res.redirect('/');
    //next();
})

app.get('/login/auth/kakao', passport.authenticate('kakao', null),
        (req, res)=>{
            console.log('connect kakao');
        })

app.get('/login/kakao_oauth', passport.authenticate('kakao', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    res.redirect('/');
    //next();
})

app.get('/login/auth/facebook', passport.authenticate('facebook', null),
        (req, res)=>{
            console.log('connect facebook');
        })

app.get('/login/facebook_oauth', passport.authenticate('facebook', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    res.redirect('/');
    //next();
})

app.get('/mailtest', (req, res)=>{
    Mail.send();
    res.end();
})

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view/index.html'));
    // res.json(req.user._id);
    
    next();
})

app.get('/login', (req, res, next)=>{
    console.log('hello');
});

app.get('/logout', (req, res)=>{
    req.logout();
})

//app.use('/login', login);
app.use('/register', register);

app.get('/test', (req, res)=>{
    res.json({message : "success", username : "retgrtgrtgrtgrtgrtgbbbbb"});
    res.send(`<h1>hello</h1>`);

    // console.log(req.user);

    // // if(req.user != undefined){
    // //     User.findById(req.user._id, (err, user)=>{
    // //         var user = req.user;
    // //         if(!err)
    //             // res.json(user);
    // //             console.log('okokok');
    // //         else
    // //             console.log("can't find")
    // //     })
    // // }
    // // res.send(req.user._name);
})



Config.serverOn(app);