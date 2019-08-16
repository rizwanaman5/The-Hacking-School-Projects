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
    console.log(email, password);

    mongo.connect(url, (err, client) => {
        if (err) {
            console.log(err)
            return;
        }
//                     // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
//     // res == false
// });

        const db = client.db('info');
        const collection = db.collection('userInfo');

            collection.findOne({ email: email }, { hash: true, _id: false }).then((user) => {
                console.log(user)
                let hash = user.hash;
                console.log(hash);

                bcrypt.compare(password, hash, function (err, response) {
                    // res == true
                    console.log('from signIn page', response);
                    console.log('pass from input', password);
        
                    if (response) {
                        res.redirect('./success.html')
                    } else {
                        res.redirect('./wrong.html')
                    }
                });

            }) 
        
        // collection.findOne({ email: email, password: password }).then((user) => {
        //     console.log(user);
        //     if (user) {
        //         res.redirect('./success.html')
        //     } else {
        //         res.redirect('./wrong.html')
        //     }
        // }).catch((err) => {
        //     return;
        // })

    })

})


module.exports = router;