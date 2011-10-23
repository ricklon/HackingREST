/*
* This users preferred method
* http://nodejs.org/docs/v0.5.10/api/http.html#http.request
*/

var querystring = require('querystring');
var http = require('http');

function PostThingSpeak(xx, yy, zz) {
  // Build the post string from an object
  var post_data = querystring.stringify({
      'key' : 'ZGS9MSQYCROJUWK6',
      'field1': xx,
      'field2': yy,
      'field3': zz,
  });

  var post_options = {
      host: 'api.thingspeak.com',
      port: '80',
      path: '/update',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };

  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf-8');
/*
      res.on('data', function (chunk) {
          var json_data = JSON.parse(chunk);
          if(!json_data.compiledCode) {
            console.log("FATAL Could not parse result: " + chunk);
            process.exit(-3);
          }
          else {
            WriteCompiledCode(json_data.compiledCode);
          }

      });
*/
  });

  post_req.write(post_data);
  post_req.end();
}

PostThingSpeak(33,22,11);
