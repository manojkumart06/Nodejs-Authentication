const express = require('express');
const port = 8001;
const path = require('path');
const db = require('./config/dbconnection');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//Passport Configuration 
require('./config/passport')(passport);

// Bodyparser Configuration 
app.use(express.urlencoded({ extended: true }));



app.use("/assets", express.static('./assets'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));


// Express session Configuration
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

//Connecting flash
app.use(flash());

//Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));


app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Your server is running on port', port);
    }
});