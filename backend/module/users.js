const Mongoose = require('mongoose');

module.exports.User = () => {
    const UserInfoSchema = new Mongoose.Schema({
        _id : String,
        _password : String,
        _email : String,
        _name : String
    },{
        versionKey : false
    });

    UserInfoSchema.methods.comparePassword = (inputPW, cb) => {
        if (inputPW === this.password) {
            cb(null, true);
        } else {
            cb('error');
        }
    };

    return Mongoose.model('users', UserInfoSchema, 'users');
}