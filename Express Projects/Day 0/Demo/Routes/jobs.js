const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./jobs')
})

module.exports = router;