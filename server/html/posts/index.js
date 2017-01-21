const express = require('express');
const router = express.Router();
const ControllerClass = require('./posts.controller');
const controller = new ControllerClass();

router.route('')
    .get(controller.getAllPosts.bind(controller))
    .post(controller.addPost.bind(controller));

router.route('/:id')
    .get(controller.getPostById.bind(controller));

module.exports = router;
