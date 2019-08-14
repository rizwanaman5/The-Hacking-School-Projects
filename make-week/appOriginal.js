// npm modules
const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express();
// For sending data to Database.
const mongo = require('mongodb').MongoClient

//Port number: Server will be available on this port.
const port = process.env.PORT || 3355;

// Connection to mongoDB on local sever.
const url = 'mongodb://localhost:27017';

// server is listening on this port.
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("static"));


app.post("/", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    console.log(name, email, password);

    let text_data = { "name": name, "email": email, "password": password };

    mongo.connect(url, (err, client) => {
        if (err) {
            console.error(err)
            return
        }

        // Creaing a db and a collection....
        const db = client.db('info');
        const collection = db.collection('userInfo');

        collection.findOne({ email: email }).then((user) => {
            console.log(user)
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


        //     // Closing the connection
        //     client.close();
        // })


        res.end();
    })
})

