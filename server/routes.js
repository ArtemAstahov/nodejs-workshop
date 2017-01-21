/**
 * Main application routes
 */

'use strict';
const path = require('path');

module.exports = (app) => {
    app.use('/posts', require('./html/posts/index'));

    app.get('/new-post', (req, res) => {
        res.render('new-post', {
            user: {}
        });
    });

    app.use('/', (req, res) => {
        res.render('index');
    });
};
