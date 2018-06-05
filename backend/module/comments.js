const Mongoose = require('mongoose');

const CommentSchema = new Mongoose.Schema({
    _name : String,
    _pw : String,
    _provider : String,
    _date : {
        type : Date,
        default : Date.now()
    },
    _comment : String,
},{
    versionKey : false
});

const CommentModel = Mongoose.model('comments', CommentSchema, 'comments');

module.exports.Comment = CommentModel;