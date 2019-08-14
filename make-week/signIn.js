const express = require('express');
const router = express.Router();

// For sending data to Database.
const mongo = require('mongodb').MongoClient
// Connection to mongoDB on local sever.
const url = 'mongodb://localhost:27017';

router.post('/', (req, res) => {
    let email = req.body.your_email;
    let password = req.body.your_pass;
    console.log(email, password);

    mongo.connect(url, (err, client) => {
        if (err) {
            console.log(err)
            return;
        }

        const db = client.db('info');
        const collection = db.collection('userInfo');

        collection.findOne({ email: email, password: password}).then ((user) => {
            console.log(user);
            if (user) {
            res.redirect('./success.html')
        } else {
            res.redirect('./wrong.html')
        }
        }).catch((err) => {
            return;
        })
        
    })

})




module.exports = router;