/**
 * Main application routes
 */

'use strict';
const path = require('path');

module.exports = (app) => {
    app.use('/api/user', require('./API/user/index'));

    app.use('/posts', require('./html/posts/index'));

    app.get('/new-post', (req, res) => {
        res.render('new-post', {
            user: req.user
        });
    });

    app.get('/login', (req, res) => {
        res.render('login', {
            user: req.user
        });
    });

    app.use('/auth', require('./auth/index'));

    app.use('/', (req, res) => {
        res.redirect('/posts');
    });
};
