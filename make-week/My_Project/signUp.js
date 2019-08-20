const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// For sending data to Database.
const mongo = require('mongodb').MongoClient
// Connection to mongoDB on local sever.
const url = 'mongodb://localhost:27017';

router.post("/", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let login = false;
    let password = req.body.password;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            password = hash;

            let text_data = { "name": name, "email": email, "hash": password, "loginStatus": login };

            mongo.connect(url, (err, client) => {
                if (err) {
                    console.error(err);
                    return;
                }

                // Creaing a db and a collection....
                const db = client.db('info');
                const collection = db.collection('userInfo');

                collection.findOne({ email: email }).then((user) => {
                    console.log(user);
                    if (user) {
                        console.log("error");
                        alert('The User already exists');
                        // document.getElementById("error").innerHTML = { "error": "User already exists" }
                    } else {
                        //Sending Data


                        collection.insertOne(text_data, (err) => {
                            if (err) {
                                console.log('An Error occured');
                            } else {
                                console.log('Inserted Document Successfully');
                            }
                        })
                        res.json({ status: 'success' });
                    }
                }).catch((err) => {
                    return;
                })

                res.redirect("./signin.html");
            })
        })
    })

    console.log(name, email, password);


})

module.exports = router;