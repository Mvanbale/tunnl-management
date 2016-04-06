var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./src'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('./src/index.html'));
});

var port = 8081;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Server listening on port", port);
});