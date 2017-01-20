/**
 * Express configuration
 */

'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const config = require('./environment/index');
const session = require('express-session');

module.exports = function(app) {
    const env = app.get('env');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.engine('ejs', require('ejs-locals'));
    app.set('view engine', 'ejs');
    app.set('views', path.resolve('./views'));
    //app.use(session({ secret: 'epam' }));

    if ('production' === env) {
        app.use(morgan('dev'));
    }

    if ('development' === env || 'test' === env) {
        app.use(morgan('dev'));
        app.use(errorHandler()); // Error handler - has to be last
    }
};