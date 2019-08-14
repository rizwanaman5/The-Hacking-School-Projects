// npm modules
const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser')
const app = express();

//Port number: Server will be available on this port.
const port = process.env.PORT || 3355;

// server is listening on this port.
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static("static"));

// Routes ********************************************
const signUpRoute = require('./signUp');
const signInRoute = require('./signIn');

// 
app.use("/signedUp", signUpRoute);
app.use("/signedIn", signInRoute);