var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running on port: ' + process.env.C9_PORT);
