const Mongoose = require('mongoose');

const UserInfoSchema = new Mongoose.Schema({
    _name : String,
    _email : String,
    _pw : String,
    _index : Number,
    _id : String 
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