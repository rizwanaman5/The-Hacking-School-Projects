const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 5533;


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes *****************

app.use('/', require('./Routes/index'));
app.use('/jobs', require('./Routes/jobs')); 
app.use('/profile', require('./Routes/profile'));
app.use('/tasks', require('./Routes/tasks'));
app.use('/updateCard', require('./Routes/updateCard'));

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})
