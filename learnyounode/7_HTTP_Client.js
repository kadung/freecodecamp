/*
	## HTTP CLIENT (Exercise 7 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  For this exercise you will need to use the http core module.

  Documentation on the http module can be found by pointing your browser
  here:
  file://C:\Users\kadung\AppData\Roaming\npm\node_modules\learnyounode\node_
  apidoc\http.html

  The http.get() method is a shortcut for simple GET requests, use it to
  simplify your solution. The first argument to http.get() can be the URL
  you want to GET; provide a callback as the second argument.

  Unlike other callback functions, this one has the signature:

     function callback (response) { ... }

  Where the response object is a Node Stream object. You can treat Node
  Streams as objects that emit events. The three events that are of most
  interest are: "data", "error" and "end". You listen to an event like so:

     response.on("data", function (data) { ... })

  The "data" event is emitted when a chunk of data is available and can be
  processed. The size of the chunk depends upon the underlying data source.

  The response object / Stream that you get from http.get() also has a
  setEncoding() method. If you call this method with "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings.
*/

var http = require('http');
var url = process.argv[2];
var list = [];

http.get(url, function callback (response) {
	response.setEncoding('utf8');				// Set this one and buffer is change to string
	response.on('data', function (data) {
		console.log(data);						// If there is no setEncoding, data.toString()should be added if you want to get string
	});
	response.on('error', console.error)
}).on('error', console.error)

