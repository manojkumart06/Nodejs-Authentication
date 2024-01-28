const express = require('express');
const port = 9000;
//const http = require('http');
//const server = http.createServer(app);
const app = express();

app.use('/',require('./routes/index'));


app.listen(port, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Your server is running on port', port);
    }
});