var http = require('http');

var server = http.createServer(function(req, res) {
	req.setEncoding('utf8');
	console.log(req.method);
	req.on('data', function(chunk) {
		console.log('parsed:', chunk);
	});
	req.on('end', function() {
		console.log('done parsing');
	});

	var body = 'Hello World';
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/plain');
	res.statusCode = 777;
	res.end(body);
});

server.listen(3000, function() {
	console.log('Server running on port 3000');
});