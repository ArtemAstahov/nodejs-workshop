let posts = [{
    _id: 111,
    title: 'my first post',
    date: Date.now(),
    description: 'asd asd asdasdas asd asdasdas das',
    author: {},
    comments: []
}, {
    _id: 222,
    title: 'my first post 222',
    date: Date.now(),
    description: 'asd asd asdasdas asd asdasdas das '
}, {
    _id: 333,
    title: 'my first post 333',
    date: Date.now(),
    description: 'asd asd asdasdas asd asdasdas das '
}];

class PostController {
    constructor() {}

    getAllPosts(req, res) {
        res.render('posts', {
            posts: posts
        });
    }

    addPost(req, res) {
        posts.push(req.body);
        res.render('posts', {
            posts: posts
        });
    }

    getPostById(req, res) {
        res.render('post', {
            status: 'success',
            response: posts[0],
            user: req.user,
            postId: req.params.id
        });
    }
}

module.exports = PostController;