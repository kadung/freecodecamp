/*
	JSON ME
	Exercise 8 of 8

Most of the times we're building RESTful API servers with JSON.

Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3].

Respond with:

    res.json(object)

Everything should match the /books resource path.

For reading the file, use the fs module, e.g.,

    fs.readFile(filename, callback)

-------------------------------------------------------------------------------

## HINTS

While the parsing can be done with JSON.parse:

    object = JSON.parse(string)

No need to install the fs module. It's part of the core and the Node.js platform.

Videos: [http://bit.ly/1jW1sBf](http://bit.ly/1jW1sBf).
*/

var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.get('/books', function (req, res) {
	fs.readFile(file, function (err, data) {
		res.send(JSON.parse(data));
	});
});

app.listen(port ||3000);