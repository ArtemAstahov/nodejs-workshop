'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {type: Date},
    oauthID: {type: Number},
    salt: {type: String},
    hashedPassword: {type: String}
}, {
    collection: 'users',
    toObject: {
        transform: function (doc, ret) {
            delete ret.salt;
            delete ret.hashedPassword;
            return ret;
        }
    }
});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = makeSalt();
        this.hashedPassword = encryptPassword(password, this.salt);
    })
    .get(function() {
        return this._password;
    });


/**
 * Make salt for password
 * private method
 *
 * @return {String}
 *
 */
let makeSalt = () => {
    return crypto.randomBytes(16).toString('base64');
};

/**
 * encrypt password
 * private method
 *
 * @param {String} password
 * @param {String} salt
 * @return {String}
 *
 */
let encryptPassword = (password, salt) => {
    let encryptedPassword = '';

    if (password && salt) {
        const saltBuffer = new Buffer(salt, 'base64');
        encryptedPassword = crypto.pbkdf2Sync(password, saltBuffer, 10000, 64, 'sha1').toString('base64');
    }

    return encryptedPassword;
};

UserSchema.methods = {
    /**
     * Check is password correct
     *
     * @param {String} plainText
     * @return {Boolean}
     *
     */
    authenticate: function (plainText) {
        return encryptPassword(plainText, this.salt) === this.hashedPassword;
    }
};

module.exports = mongoose.model('User', UserSchema);
