const express = require('express');
const router = express.Router();

// User Registration
router.get('/register', (req, res) => {
    res.render('register');
});

// User Login
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;