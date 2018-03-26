const Mongoose = require('mongoose');

const UserInfoSchema = new Mongoose.Schema({
    _id : String,
    _password : String,
    _email : String,
    _name : String
},{
    versionKey : false
});

const UserModel = Mongoose.model('users', UserInfoSchema, 'users');

UserInfoSchema.methods.comparePassword = (inputPW, cb) => {
    if (inputPW === this.password) {
        cb(null, true);
    } else {
        cb('error');
    }
};

module.exports.User = UserModel;