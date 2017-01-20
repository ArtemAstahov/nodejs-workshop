/**
 * Main application routes
 */

'use strict';
const path = require('path');

module.exports = function(app) {
    app.use('/', (req, res) => {
        res.render('index');
    });
};
