const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

// EJS **********************
app.use(layouts);
app.set('view engine', 'ejs');

// Routes ************************
app.use('/', require('./Routes/index'));
app.use('/users', require('./Routes/users'));

// The server is running on this port
app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})