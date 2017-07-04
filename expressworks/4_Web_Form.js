/*
	GOOD OLD FORM
	Exercise 4 of 8

Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards.

To handle a POST request, use the post() method which is used the same way as get():

    app.post('/path', function(req, res){...})

Express.js uses middleware to provide extra functionality to your web server.

Simply put, a middleware is a function invoked by Express.js before your own
request handler.

Middleware provide a large variety of functionality such as logging, serving
static files, and error handling.

A middleware is added by calling use() on the application and passing the
middleware as a parameter.

To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
middleware from the body-parser module.

    var bodyparser = require('body-parser')
    app.use(bodyparser.urlencoded({extended: false}))

-------------------------------------------------------------------------------

## HINTS

Here is how we can print characters backwards (just one way to do it):

    req.body.str.split('').reverse().join('')

Extended set to true (qs) or false (querystring) determines the parser module.

Read more about Connect middleware here:

  [https://github.com/senchalabs/connect#middleware](https://github.com/senchalabs/connect#middleware)

The documentation of the body-parser module can be found here:

  [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)

Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).

-------------------------------------------------------------------------------

## NOTE

When creating your projects from scratch, install the body-parser dependency
with npm by running:

    $ npm install body-parser

…in your terminal.

Again, the port to use is passed expressworks to the application as process.argv[2].
*/

var express = require('express');
var bodyParser = require('body-parser');

var port = process.argv[2];
var app = express();

// Add an middleware into our app
app.use(bodyParser.urlencoded({extended: false}));
// Handle a POST request
app.post('/form', function (req, res) {
	res.send(req.body.str.split('').reverse().join(''));
});

//Open port 3000 (Access by http://localhost:3000) - port variable is for expressworks verify
app.listen(port || 3000);