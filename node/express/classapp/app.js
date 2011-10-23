
/**
 * Module dependencies.
 */

var express = require('express');
var querystring = require('querystring');
var http = require('http');

var app = module.exports = express.createServer();

// Configuration
var PORT = 3000;

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.directory(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Fubar Labs Presents -- Hacking REST with jQuery'
  });
});

app.post('/thingspeak/update', function(req, res){
    echovalue = "req.method: " + JSON.stringify(req.method) + "\nreq.header: " + JSON.stringify(req.header) + "\nreq.url: " 
    + JSON.stringify(req.url) + "\nreq.params: " 
    + JSON.stringify(req.params) + "\nreq.query: " + JSON.stringify(req.query) + "\nreq.body: " + JSON.stringify(req.body) + "\n";

    res.send(echovalue );
   console.log("KEY: " + req.body.key + " field1:" + req.body.field1 + ", " + "field2:" + req.body.field2 +  ", " + "field3:" + req.body.field3);
    PostThingSpeak(req.body.key, req.body.field1 , req.body.field2  ,req.body.field3 );
});


/*
* POST Function
*/

function PostThingSpeak(key, xx, yy, zz) {
  // Build the post string from an object
  var post_data = querystring.stringify({
      'key' : key,
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

  });
  post_req.write(post_data);
  post_req.end();
  console.log("POSTED THING SPEAK KEY: " + key + " xx:" + xx + ", " + "yy:" + yy +  ", " + "zz:" + zz);
}



if(process.env.C9_PORT) {
app.listen(process.env.C9_PORT, "0.0.0.0");
console.log('Class app erver running on port: ' + process.env.C9_PORT);
}
else {
app.listen(PORT, "127.0.0.1");
console.log('Class app erver running on port: ' + PORT);
}
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
