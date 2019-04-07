const mongoose  = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    password: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    const pass = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.password === pass;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, "SADDI_GADDI_VICH_BABBU_MAAN_CHALNA");
};

mongoose.model('User', userSchema);
