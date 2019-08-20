const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 5533;


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const products = ['apple', 'mango', 'banana', 'pear', 'coconut', 'pineapple']

// Route *****************
app.get('/', (req, res) => {
    res.render('index', {products:products});
    
})

app.post('/', (req,res) => {
    // console.log(req.body);
    products.push(req.body.prod);
    res.redirect('/');
})



app.get('/home/:id', (req, res) => {
    let user = req.params.id;
    res.send(`hello ${user}`);
})


app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})
