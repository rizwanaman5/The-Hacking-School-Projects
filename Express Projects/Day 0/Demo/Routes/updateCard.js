const express = require('express');
const router = express.Router();
const db = require('../Models');

// Path -> /updateCard
router.get('/:id', (req, res) => {
    db.TASKS.find({_id:id})
        .then((data) => res.json(data))
        // .then((data) => res.render('./tasks', { data: data }))
        .catch((err) => res.send(err))
})

// METHOD -> PUT -> update an existing product
router.put('/:id', (req, res) => {
    db.TASKS.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

module.exports = router;