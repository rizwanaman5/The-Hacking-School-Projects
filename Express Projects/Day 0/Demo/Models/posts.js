const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String
})

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;