const path = require('path');

const isLogin = ((req, res, next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    else{
        //console.log('logining');
        res.redirect('/');
    }
})

module.exports = ((router, passport) => {

    var login = router;
    login.get('/', (req, res)=>{
        console.log('hello');
    });

    login.get('/auth/kakao', isLogin, passport.authenticate('kakao', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    login.get('/kakao_oauth', passport.authenticate('kakao', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    login.get('/auth/facebook', isLogin, passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    login.get('/facebook_oauth', passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    login.get('/auth/naver', passport.authenticate('naver', null),
        (req, res)=>{
            console.log('connect naver');
        })

    login.get('/naver_oauth', passport.authenticate('naver', {
        failureRedirect : '/login'
    }), (req, res, next)=>{
        console.log('logining');
        //res.end();
        res.redirect('/');
        next();
    })

    return login;
})