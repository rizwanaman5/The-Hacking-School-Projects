const express = require('express');
const router = express.Router();

const products = ['apple', 'mango', 'banana', 'pear', 'coconut', 'pineapple']

router.get('/', (req, res) => {
    res.render('./index', {products:products});
})

router.post('/', (req, res) => {
    products.push(req.body.prod);
    res.redirect('/')
})

module.exports = router;