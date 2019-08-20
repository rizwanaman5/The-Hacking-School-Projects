const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// For sending data to Database.
const mongo = require('mongodb').MongoClient
// Connection to mongoDB on local sever.
const url = 'mongodb://localhost:27017';

router.post('/', (req, res) => {
    let email = req.body.your_email;
    let password = req.body.your_pass;
    // console.log(email, password);

    mongo.connect(url, (err, client) => {
        if (err) {
            console.log(err)
            return;
        }

        const db = client.db('info');
        const collection = db.collection('userInfo');

        collection.findOne({ email: email }).then((user) => {
            // console.log(user._id)
            let hash = user.hash;
            // console.log(hash);
            
            bcrypt.compare(password, hash, function (err, response) {

                // console.log('from signIn page', response);
                // console.log('pass from input', password);

                if (response) {
                    res.redirect(`./success.html`); 
                    collection.updateOne({ email: email }, { $set: { loginStatus: true } });
                } else {
                    res.redirect('./wrong.html');
                }
            });



        })
    })

})

module.exports = router;