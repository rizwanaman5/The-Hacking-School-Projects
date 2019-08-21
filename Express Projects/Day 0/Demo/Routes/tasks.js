const express = require('express');
const router = express.Router();
const db = require('../Models');

// Path -> /tasks
// METHOD -> GET -> get all tasks
router.get('/', (req, res) => {
    db.TASKS.find()
        // .then((data) => res.json(data))
        .then((data) => res.render('./tasks', { data: data }))
        .catch((err) => res.send(err))
})

// METHOD -> POST -> create a task
router.post('/', (req, res) => {
    console.log(req.body);
    db.TASKS.create(req.body)
        .then(() => res.redirect('/tasks'))
        .catch((err) => res.send(err))
    // The res.reditect makes the page reload when we add a task, so that it immediately shows up. otherwise it will go on loading.
})

router.get('/:id', (req, res) => {
    db.TASKS.findOne({_id: req.params.id})
        // .then((data) => res.json(data))
        .then((data) => res.render('updateCard', { data: data }))
        .catch((err) => res.send(err))
})

// METHOD -> PUT -> update an existing task
router.put('/:id', (req, res) => {

    db.TASKS.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((data) => {console.log(data); res.render('updateCard', {data})})
        .catch((err) => res.send(err))
})

// METHOD -> DELETE -> deletes a task
router.delete('/:id', (req, res) => {
    db.TASKS.findByIdAndRemove({ _id: req.params.id })
        .then((data) => res.send('task deleted'))
        .catch((err) => res.send(err))
})

module.exports = router;