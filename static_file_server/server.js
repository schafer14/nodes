var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
 
var root = __dirname;

var server = http.createServer(function(req, res) {
	var url = parse(req.url);
	var path = join(root, url.pathname);
	fs.stat(path, function(err, stat) {
		console.log(stat);
		if(err) {
			if('ENOENT' == err.code) {
				res.statusCode = 404;
				res.end('File not found');
			} else {
				res.statusCode = 500;
				res.end('Internal Server Error');
			}
		} else {
			res.setHeader('Content-Length', stat.size);
			var stream = fs.createReadStream(path);
			stream.pipe(res);
			stream.on('error', function(err) {
				res.statusCode = 500;
				res.end('Internal Server Error');
			});
		}
	})
});

server.listen(3000, function() {
	console.log('Server running on port 3000');
});