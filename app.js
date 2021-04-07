//Load Express module
var express = require('express');
var path = require('path');

// Load the Express module to load our web page
var app = express();

// Host and port
const hostname = '0.0.0.0';
const port = 8080;

// Serve our webpage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});
app.listen(port);

// Show the host and port when the application runs
console.log(`Server running at http://${hostname}:${port}/`);
