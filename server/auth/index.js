const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require(path.resolve('./server/shared/user/user.service'));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    UserService.getUserById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
}, (name, password, done) => {
    return UserService.findOneBy({
        name: name
    }).then((user) => {
        if(user && UserService.isPasswordCorrect(user, password)) {
            done(null, user);
        } else {
            UserService.createUser({
                name: name,
                password: password,
                created: Date.now()
            }).then((user) => {
                done(null, user);
            });
        }
    }).catch((err) => {
        done(err);
    });
}));

const bodyToParams = (req, res, next) => {
    req.params.name = req.body.name;
    req.params.password = req.body.password;

    next();
};

const auth = passport.authenticate('local', {
    successRedirect: '/posts',
    failureRedirect: '/login'
});

router.post(['/', ''], bodyToParams, auth);

module.exports = router;
