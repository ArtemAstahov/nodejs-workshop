'use strict';

const path = require('path');
const UserService = require(path.resolve('./server/shared/user/user.service'));

class UserController {
    constructor() {}

    get(req, res) {
        UserService.getAllUsers()
            .then((results) => {
                res.json({
                    status: 'success',
                    responses: results
                });
            })
            .catch((err) => {
                res.status(404).json(err);
            });
    }

    add(req, res) {
        UserService.createUser(req.body)
            .then((results) => {
                res.json({
                    status: 'success',
                    responses: results
                });
            })
            .catch((err) => {
                res.json(err);
            });
    }

    update(req, res) {
        UserService.updateUser(req.body, req.user._id)
            .then((results) => {
                res.json({
                    status: 'success',
                    responses: results
                });
            })
            .catch((err) => {
                res.json(err);
            });
    }

    getById(req, res) {
        UserService.getUserById(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    }

    delete(req, res) {
        UserService.deleteUser(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.json(err);
            });
    }
}

module.exports = UserController;


