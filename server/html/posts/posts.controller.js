const Post = require('./post.model');
const PostsService = require('./posts.service');

class PostController {
    constructor() {}

    getAllPosts(req, res) {
        PostsService.getAllPosts().then((result) => {
            res.render('posts', {
                posts: result
            });
        });
    }

    addPost(req, res) {
        PostsService.createPost(req.body, req.user._id)
            .then((result) => {
                res.render('post', {
                    status: 'success',
                    responses: result,
                    user: {},
                    postId: result.id
                });
            });
    }

    getPostById(req, res) {
        PostsService.getPostByID(req.params.id).then((result) => {
            res.render('post', {
                status: 'success',
                response: result,
                user: {},
                postId: req.params.id
            });
        });
    }
}

module.exports = PostController;