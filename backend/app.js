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

app.get('/api/user/:id', (req, res)=>{//id 값의 유저 정보를 가져온다
    User.findById(req.param.id, (err, user)=>{//id 값의 유저 정보를 찾는다
        if(!err){//정상 동작
            if((req.user != undefined) && (req.user._index == req.param.id)){//클라이언트가 로그인 상태 이며 현재 user와 동일할 때
                res.json({
                    login_status : true,
                    status : "",
                    user_json : user
                })
            }
            else{//로그 아웃 상태 일 때
                res.json({
                    login_status : false,
                    status : "",
                    user_json : user
                })
            }
        }
        else{//찾기 에러가 발생했을 때
            res.json({
                login_status : false,
                status : "err",
                user_json : {
                    _name : "",
                    _email : "",
                    _pw : "",
                    _index : "",
                    _id : ""
                }
            })
        }
    })




    // if(req.user != undefined){//로그인 됬을 때
    //     User.findById(req.user._id, (err, user)=>{
    //         if(!err){
    //             console.log("UserInfo : " + user._id);
    //             res.render(path.join(__dirname, 'view/index.html'), {test : "test"});
    //             //res.json(user);
    //             //res.json({_name : "Test", _email : "", _id : "wefwefwefwef", _password : "wefwefwefwef"});
    //             console.log('okokok');
    //         }
    //         else
    //             console.log("can't find")
    //     })
    // }
    // else{//로그아웃 상태 일때
    //     res.json({_name : "Login", _email : "", _id : "", _password : ""});
    // }
})

app.get('/api/user', (req, res, next)=>{
console.log("api user : " + req.user);

    if(req.user != undefined){
        User.findById(req.user._index, (err, user)=>{
            console.log("user!!!! : " + user);
            if(!err){
                res.json({
                    login_status : true,
                    status : "",
                    user_json : user
                })
            }
            else{
                res.json({
                    login_status : false,
                    status : "err",
                    user_json : user
                })
            }
        })
    }
    else{
        res.json({
            login_status : false,
            status : "",
            user_json : {
                _name : "Login",
                _email : "",
                _pw : "",
                _index : "",
                _id : ""
            }
        })
    }
})

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

app.get('/contact/result', (req, res, next)=>{
    // res.send(`
    //     <h1>완료</h1>
    //     <a href="/">되돌아가기</a>`)
    next();
})

app.get('/login', (req, res, next)=>{
    console.log('hello');

    next();
});

app.get('/logout', (req, res)=>{
    req.logout();
})

//app.use('/login', login);
app.use('/register', register);

app.get('/*', (req, res)=>{
     res.sendFile(path.join(__dirname, 'view/index.html'));
     //res.render(path.join(__dirname, 'view/index.html'));
     // res.json(req.user._id);
     //console.log()
 })

Config.serverOn(app);