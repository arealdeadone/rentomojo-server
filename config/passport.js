const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, function (username, password, done) {
    User.findOne({email: username}, (err, user) => {
        if(err) return done(err);

        if(!user){
            return done(null, false, {
                message: 'User not Found'
            });
        }

        if(!user.validPassword(password)){
            return done(null, false, {
                message: 'Wrong username or password'
            });
        }

        return done(null, user);
    })
}));
