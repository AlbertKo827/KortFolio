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

    login.get('/auth/naver', isLogin, passport.authenticate('naver', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    login.get('/naver_oauth', passport.authenticate('naver', {
        successRedirect : '/',
        failureRedirect : '/fail'
    }))

    return login;
})