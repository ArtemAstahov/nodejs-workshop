const Post = require('./post.model');

exports.getAllPosts = () => {
    return Post.find({}).deepPopulate('author');
};

exports.getPostByID = (id) => {
    return Post.findById(id).deepPopulate('author');
};

exports.createPost = (body, authorId) => {
    return Post.create(Object.assign({}, body, {
        author: authorId
    })).then((result) => {
        return result;
    });
};

exports.updatePost = (body, postId) => {
    return Post.update({ '_id': postId }, { $set: body });
};

exports.deletePost = (postId) => {
    return Post.findByIdAndRemove(postId);
};