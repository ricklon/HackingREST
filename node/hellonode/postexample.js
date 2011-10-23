//Node example of client post
//Modified from: http://stackoverflow.com/questions/4579757/how-do-i-create-a-http-client-request-with-a-cookie
var http = require('http');
var sys = require('sys');
var util = require('util');

var key = "ZGS9MSQYCROJUWK6";
var xx = 11;
var yy = 22;
var zz = 33;
//var domain = "hackingrest.ricklon.cloud9ide.com";
var PORT = 80;
var domain = "api.thingspeak.com";
//var PORT = 80;

var data = JSON.stringify({"key": key, "field1": xx, "field2": yy, "field3": zz });

var client = http.createClient(PORT, domain);

var headers = {
    'Host': domain,
    'Content-Type': 'application/json',
    'Content-Length': data.length
};

var request = client.request('POST', '/update', headers);

// listening to the response is optional, I suppose
request.on('response', function(response) {
	//sys.debug( JSON.stringify(response));
	sys.debug(util.inspect(response, true, null));
	//sys.debug(util.inspect(response, true));
  response.on('data', function(chunk) {
	console.log(data);
  });
  response.on('end', function() {
    // do what you do

  });
});
// you'd also want to listen for errors in production
request.on('error', function(err) {
        sys.debug('unable to connect to ' + url);
    });

request.write(data);

request.end();

console.log("Completed");

