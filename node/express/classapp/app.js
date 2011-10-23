
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

// Configuration
var PORT = 3000;

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
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
if(process.env.C9_PORT) {
app.listen(process.env.C9_PORT, "0.0.0.0");
console.log('Class app erver running on port: ' + process.env.C9_PORT);
}
else {
app.listen(PORT, "127.0.0.1");
console.log('Class app erver running on port: ' + PORT);
}
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
