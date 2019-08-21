
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tasks', {useNewUrlParser: true});

module.exports.TASKS = require('./tasks')

module.exports.User = require('./users');
module.exports.Posts = require('./posts');