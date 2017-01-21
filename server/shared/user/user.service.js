'use strict';

const path = require('path');
const User = require('./user.model');
const REMOVED_FIELDS = '-salt -hashedPassword -__v';

/**
 * It will authenticate user password
 *
 * @param {Object} user
 * @param {String} password
 * @return {Boolean}
 *
 */
exports.isPasswordCorrect = (user, password) => {
    return user.authenticate(password);
};

/**
 * It will find one user by query
 *
 * @param {Object} query
 * @return {object}
 *
 */
exports.findOneBy = (query) => {
    return User.findOne(query);
};

/**
 * It will return all users
 * @return {object}
 *
 */
exports.getAllUsers = () => {
    return User.find({}, REMOVED_FIELDS);
};

/**
 * It will return user by id
 *
 * @param {Number} userId
 * @return {object}
 *
 */
exports.getUserById = (userId) => {
    return User.findById(userId, REMOVED_FIELDS);
};

/**
 * It will create new user in database
 *
 * @param {object} body
 * @return {object}
 *
 */
exports.createUser = (body) => {
    return User.create(body).then((result) => {
        return result;
    })
    .catch((err) => {
        console.log(err);
    });
};

/**
 * Update existing user
 *
 * @param {object} body
 * @param {Number} userId
 * @return {object}
 *
 */
exports.updateUser = (body, userId) => {
    return User.update({ '_id': userId }, { $set: body });
};

/**
 * Delete user by id
 *
 * @param {Number} userId
 * @return {object}
 *
 */
exports.deleteUser = (userId) => {
    return User.findByIdAndRemove(userId);
};