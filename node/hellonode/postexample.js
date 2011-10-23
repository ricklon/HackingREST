//Node example of client post
//Modified from: http://stackoverflow.com/questions/4579757/how-do-i-create-a-http-client-request-with-a-cookie
var http = require('http');
var key = "ZGS9MSQYCROJUWK6";
var xx = 11;
var yy = 22;
var zz = 33;

var data = JSON.stringify({"key": key, "field1": xx, "field2": yy, "field3": zz });

var client = http.createClient(80, 'api.thingspeak.com');

var headers = {
    'Host': 'api.thingspeak.com',
    'Content-Type': 'application/json',
    'Content-Length': data.length
};

var request = client.request('POST', '/update', headers);

// listening to the response is optional, I suppose
request.on('response', function(response) {
  response.on('data', function(chunk) {
    // do what you do
  });
  response.on('end', function() {
    // do what you do
  });
});
// you'd also want to listen for errors in production

request.write(data);

request.end();
