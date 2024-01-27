const express = require('express');
const port = 9000;
const http = require('http');
const app = express();

const server = http.createServer(app);

app.listen(port,(err)=>{
    console.log('Your server is running on port',port);
})