module.exports.User = (mongoose) => {
    const UserInfoSchema = new mongoose.Schema({
        id : String,
        password : String,
        name : String,
        job : String
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