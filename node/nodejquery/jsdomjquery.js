//http://blog.nodejitsu.com/jsdom-jquery-in-5-lines-on-nodejs

var jsdom = require('jsdom');

jsdom.env({
  html: "<html><body></body></html>",
  scripts: [
    'http://code.jquery.com/jquery-1.5.min.js'
  ]
}, function (err, window) {
  var $ = window.jQuery;

  $('body').append("<div class='testing'>Hello World</div>");
  console.log($(".testing").text()); // outputs Hello World
});