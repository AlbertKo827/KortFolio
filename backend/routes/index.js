const express = require('express')

const isLogin = ((req, res, next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/');
    }
})

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