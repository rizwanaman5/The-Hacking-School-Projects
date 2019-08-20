const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "this is a required field"]
    },
    description: String,
    subscriberCount: Number
})

const PRODUCTS = mongoose.model('PRODUCTS', productSchema);

module.exports = PRODUCTS