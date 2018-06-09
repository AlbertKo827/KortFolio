const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const Mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const Config = require('./module/configuration.js');//Configration Data e.g>host url, key value...

const passport = require('./module/passport');

const route = express.Router();

const router = require('./routes/index');

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

app.use('/', router);

app.get('/*', (req, res)=>{
     res.sendFile(path.join(__dirname, 'view/index.html'));
     //res.render(path.join(__dirname, 'view/index.html'));
     // res.json(req.user._id);
     //console.log()
 })

Config.serverOn(app);