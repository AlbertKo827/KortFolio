const express = require('express');
const session = require('express-session');
const app = express();
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const Mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const Config = require('./module/configuration.js');//Configration Data e.g>host url, key value...
const route = require('./routes')//RESTful API

app.locals.pretty = true;

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieparser(Config.secretCookie));
Config.KFInitialize(app, Mongoose, session, MongoStore);

app.set('view engine', 'jade');
app.set('views', './view');

route(app);

Config.serverOn(app);