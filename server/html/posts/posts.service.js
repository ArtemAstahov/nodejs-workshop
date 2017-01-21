const Post = require('./post.model');

exports.getAllPosts = () => {
    return Post.find({});
};

exports.getPostByID = (id) => {
    return Post.findById(id);
};

exports.createPost = (body) => {
    return Post.create(body);
};

exports.updatePost = (body, postId) => {
    return Post.update({ '_id': postId }, { $set: body });
};

exports.deletePost = (postId) => {
    return Post.findByIdAndRemove(postId);
};