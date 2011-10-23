//node-http-proxy
//From tutorial: http://blog.nodejitsu.com/http-proxy-intro

var http = require('http');
var httpProxy = require('http-proxy');
var PORT = 8000;

//
// Create a basic proxy server in one line of code...
//
// This listens on port 8000 for incoming HTTP requests 
// and proxies them to port 9000
httpProxy.createServer(80, 'butterflysmack.com').listen(PORT);

//
// ...and a simple http server to show us our request back.
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(PORT, "127.0.0.1");
console.log('Server running on port: ' + PORT);
