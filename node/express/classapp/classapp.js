//Serve static class files
var express = require('express');
var app = express.createServer(
    express.favicon()
  , express.logger()
  , express.static(__dirname + '/')
);
var PORT = 8888;
    
app.get('/', function(req, res){
  res.send('<h1>index</h1><ul>'
    + '<li>jQuery examples <a href="/hellojquery/hellojquery.html">Hello jQuery</a>.</li>'
    + '<li>REST examples<a href="/REST/missing.txt">REST Examplest</a>.</li>'
    + '</ul>');
});    

if(process.env.C9_PORT) {
app.listen(process.env.C9_PORT, "0.0.0.0");
console.log('Class app erver running on port: ' + process.env.C9_PORT);
}
else {
app.listen(PORT, "127.0.0.1");
console.log('Class app erver running on port: ' + PORT);
}
