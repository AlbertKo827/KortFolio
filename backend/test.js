const express = require('express');
//const Session = require('express-session');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

const Mongoose = require('mongoose');
//const MongoStore = require('connect-mongo')(Session);

const Config = require('./module/configuration.js');

const port = 9000;

var a = 0;

app.locals.pretty = true;

app.use(express.static(path.join(__dirname, 'view')));

app.use(bodyparser.json());



app.use(bodyparser.urlencoded({extended:false}));



app.use(cookieparser(Config.secretCookie));



/*app.use(Session({
    secret : 'KeySession',//세션을 설정할 때 암호화 키
    store : new MongoStore({//저장소
        //url : Config.dbhost
        mongooseConnection:Mongoose.connection
    }),
    resave : true,//저장 후 불러오는 과정에서 다시 한번 세션을 저장할 것인지
    saveUninitialized : false,//세션 저장할때 초기화를 할 것인지
    rolling : true,//세션이 올라와 있는 상태에서 리다이렉션 시 현 세션 설정 값에 변화를 줄 것인지 )e.g. cookie/maxAge의 값
    cookie : {//쿠키 설정 값
        maxAge : 1000 * 60 * 60,//만료시간
        httpOnly : true//웹서버를 통해서만 쿠키를 접근할 수 있는지
    }
}));*/

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view/index.html'));
    next();
})

app.get('/', (req, res) => {
    
})

app.get('/login', (req, res)=>{
    a += 1;
    console.log(a);
})


app.listen(port,()=>{
    console.log('server on! port : ' + port);
})