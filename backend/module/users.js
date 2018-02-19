module.exports.User = (mongoose) => {
    const UserInfoSchema = new mongoose.Schema({
        _id : String,
        _password : String,
        _email : String,
        _name : String
    });

    UserInfoSchema.methods.comparePassword = (inputPW, cb) => {
        if (inputPW === this.password) {
            cb(null, true);
        } else {
            cb('error');
        }
    };

    return mongoose.model('users', UserInfoSchema, 'users');
}