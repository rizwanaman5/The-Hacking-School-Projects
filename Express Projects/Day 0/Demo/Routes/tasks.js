const express = require('express');
const router = express.Router();
const db = require('../Models');

// Path -> /tasks
// METHOD -> GET -> get all tasks
router.get('/', (req, res) => {
    db.TASKS.find()
        .then((data) => res.json(data))
        // .then((data) => res.render('tasks', { data: data }))
        .catch((err) => res.send(err))
})

// METHOD -> POST -> create a task
router.post('/', (req, res) => {
    db.TASKS.create(req.body)
        .then(() => res.redirect('/tasks'))
        .catch((err) => res.send(err))
    // The res.reditect makes the page reload when we add a task, so that it immediately shows up. otherwise it will go on loading.
})

// METHOD -> PUT -> update an existing product
router.put('/:id', (req, res) => {
    db.TASKS.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})