// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/comments.html');
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});