var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var cache = {};

// TO return on 404s
function send404(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404: File not found.\n');
	response.write('Four-oh-four :\'(.');
	response.end();
}

// Serve up file data
function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

//Serve static files 
function serveStatic (response, cache, absPath) {
	// If file exists in cache send from there
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		//if file exists cache and sever else 404
		fs.exists(absPath, function(exists) {
			if (exists) {	
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	} 
}

var server = http.createServer(function(request, response) {
	var filePath = false;

	// routing for root
	if (request.url == '/') {
		filePath = 'pub/index.html';
	} else {
		filePath = 'pub' + request.url;
	}

	var absPath = './' + filePath;

	serveStatic(response, cache, absPath);
});

server.listen(3000, function() {
	console.log('Server listening on port 3000');
	console.log('Ctrl-C --> exit');
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);