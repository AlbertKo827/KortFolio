const restAPI = require('./RESTfulAPI');

module.exports = ((express, passport)=>{//Test
    const app = express();

    const login = require('./login.js').loginRoute(express.Router(), passport);

    app.use('/login', login);
})