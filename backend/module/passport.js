const Config = require('./configuration');

const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');

const passport = require('passport');

const kakaoStrategy = require('passport-kakao').Strategy;
const naverStrategy = require('passport-naver').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;

const User = require('./users.js').User;

router.get('/login/auth/naver', passport.authenticate('naver', null),
        (req, res)=>{
            console.log('connect naver');
        })

router.get('/login/naver_oauth', passport.authenticate('naver', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    //res.json({message : "success", username : req.user._name});
    res.redirect('/');
    //next();
})

router.get('/login/auth/kakao', passport.authenticate('kakao', null),
        (req, res)=>{
            console.log('connect kakao');
        })

router.get('/login/kakao_oauth', passport.authenticate('kakao', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    res.redirect('/');
    //next();
})

router.get('/login/auth/facebook', passport.authenticate('facebook', null),
        (req, res)=>{
            console.log('connect facebook');
        })

router.get('/login/facebook_oauth', passport.authenticate('facebook', {
    failureRedirect : '/login'
}), (req, res, next)=>{
    console.log('logining');
    //res.end();
    res.redirect('/');
    //next();
})

module.exports.initialize = passport.initialize();
module.exports.session = passport.session();
module.exports.setPassport = () => {
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
                        _index : _profile.id,
                        _name: profile.displayName,
                        _email: _profile.email,
                        _pw : '1111'
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
                        _index : _profile.id,
                        _name: profile.displayName,
                        _email: _profile.email,
                        _pw : '1111'
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
                        _index : _profile.id,
                        _name: profile.displayName,
                        _email: '',
                        _pw : '1111'
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
}

module.exports.passportRouter = router;