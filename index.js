const express = require('express');
const port = 8001;
const path = require('path');
const db = require('./config/dbconnection');
//const http = require('http');
//const server = http.createServer(app);
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Your server is running on port', port);
    }
});