const express = require('express');
const router = express.Router();
const db = require('../Models')

router.get('/', (req, res) => {
    db.Posts.find()
        .populate('author')
        .then((data) => res.json(data))
        .catch((err) => res.send(err))
})

router.post('/:id', (req, res) => {
    db.Posts.create(req.body)
        .then(async(data) => {
            console.log(data);
            console.log(req.body)
            await db.User.findOneAndUpdate({_id: req.params.id}, 
                {$push: {posts: data._id}});
            res.json(data)
        })
        .catch((err) => res.send(err))
})

router.get('/', (req, res) => {
    db.Posts.findOne({author:req.params.id})
        .then((data) => db.User.findOneAndUpdate({_id:id}))
        .catch((err) => res.send(err))
})
module.exports = router;