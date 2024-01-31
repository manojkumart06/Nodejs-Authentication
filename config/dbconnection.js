//require the library
require('dotenv').config();
const mongoose = require('mongoose');

//connect to the database
//mongoose.connect('mongodb://localhost/nodejs_authenticator');
const connect = await mongoose.connect(process.env.MONGO_URL);

//acquire the connection (to check if it's successfull)
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting the db"));


//open is an event listener
db.once('open',function(){
    console.log("Successfully connected to database :: MongoDB");
});

module.exports=db;