const Mongoose = require('mongoose');

const portfolioSchema = new Mongoose.Schema(
    {
        image : String,
        title : String,
        body : String,
    },
    {
    versionKey : false
    }
);

module.exports.Portfolio = Mongoose.model('portfolio', portfolioSchema, 'portfolioes');