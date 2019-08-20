
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true});

module.exports.PRODUCTS = require('./products')