const express = require('express');
const router = express.Router();
const db = require('../Models')

router.get('/', (req, res) => {
    db.User.find()
        .populate('posts')
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

router.get('/:id', (req, res) => {
    db.User.findOne({_id:req.params.id})
        .populate('posts')
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

router.post('/', (req, res) => {
    db.User.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

router.get('/', )

module.exports = router;