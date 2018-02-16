const isLogin = ((req, res, next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/');
    }
})

module.exports = ((router, passport) => {

    var login = router;

    login.get('/', (req, res)=>{
        console.log('login');
    });

    login.get('/auth/kakao', isLogin, passport.authenticate('kakao', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/kakao_oauth', passport.authenticate('kakao', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/auth/facebook', isLogin, passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/facebook_oauth', passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/auth/naver', isLogin, passport.authenticate('naver', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/naver_oauth', passport.authenticate('naver', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    return login;
})