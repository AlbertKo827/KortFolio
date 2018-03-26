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

const passport = require('./module/passport');

const route = express.Router();

// const login = require('./routes/login.js')(route, passport);
const register = require('./routes/register.js')(route);

const User = require('./module/users.js').User;

app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'view')));

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser(Config.secretCookie));

Config.KFInitialize(app, Mongoose, session, MongoStore);

// #region PassPort
app.use(passport.initialize);
app.use(passport.session);
passport.setPassport();


///////////route
app.use('/', passport.passportRouter);

app.get('/test', (req, res)=>{
    if(req.user != undefined){
        User.findById(req.user._id, (err, user)=>{
            if(!err){
                console.log("UserInfo : " + user._id);
                res.json(user);
                //res.json({_name : "Test", _email : "", _id : "wefwefwefwef", _password : "wefwefwefwef"});
                console.log('okokok');
            }
            else
                console.log("can't find")
        })
    }
    else{
        res.json({_name : "Login", _email : "", _id : "", _password : ""});
    }
})

app.get('/uesrs/:id', (req, res, next)=>{
    User.findById(req.params.id, (err, user)=>{
        if(!err){
            console.log("UserInfo : " + user._id);
            res.json(user);
            //res.json({_name : "Test", _email : "", _id : "wefwefwefwef", _password : "wefwefwefwef"});
            console.log('okokok');
        }
        else
            console.log("can't find")
    })
    
    //next();
})

app.get('/login', (req, res, next)=>{
    console.log('hello');

    next();
});



// app.get('/users', (req, res, next)=>{
//     User.findById(req.query.id, (err, user)=>{
//         if(!err){
//             console.log("UserInfo : " + user._id);
//             res.json(user);
//             //res.json({_name : "Test", _email : "", _id : "wefwefwefwef", _password : "wefwefwefwef"});
//             console.log('okokok');
//         }
//         else
//             console.log("can't find")
//     })

//     next();
// })



app.get('/contact', (req, res, next) => {
    console.log('contact');

    next();
})

app.post('/contact', (req, res, next)=>{
    var option = {
        name : req.body.name,
        tel : req.body.tel,
        body : req.body.message
    }

    Mail.send(option);
    //res.end();
    //next();
    res.redirect('/contact/result');
})

app.get('/contact/result', (req, res)=>{
    // res.send(`
    //     <h1>완료</h1>
    //     <a href="/">되돌아가기</a>`)
})





app.get('/logout', (req, res)=>{
    req.logout();
})

//app.use('/login', login);
app.use('/register', register);



app.get('/*', (req, res, next)=>{
    // res.sendFile(path.join(__dirname, 'view/index.html'));
     res.render(path.join(__dirname, 'view/index.html'),{test : "test"});
     // res.json(req.user._id);
     //console.log()
     next();
 })

Config.serverOn(app);