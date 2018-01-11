const isLogin = ((req, res, next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/');
    }
})

exports.loginRoute = ((router, passport) => {

    var login = router;

    login.get('/auth/kakao', isLogin, passport.authenticate('kakao', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/kakao_oauth', passport.authenticate('kakao', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/auth/facebook', isLogin, passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/facebook_oauth', passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/auth/naver', isLogin, passport.authenticate('naver', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    login.get('/naver_oauth', passport.authenticate('naver', {
        successRedirect : '/home',
        failureRedirect : '/fail'
    }), (req, res)=>{
        console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
    })

    return login;
})