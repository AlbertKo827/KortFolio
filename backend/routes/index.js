const restAPI = require('./RESTfulAPI');

module.exports = ((express, passport)=>{//Test
    const app = express();

    const login = require('./login.js').loginRoute(express.Router(), passport);

app.get('/',(req, res)=>{
    res.render('index');
})

    app.use('/login', login);
})