var https = require('https');
var fs = require('fs');

var options = {
	// normally keys stored in ~/.ssh
	key: 	fs.readFileSync('./key.pem'),
	cert: 	fs.readFileSync('./key-cert.pem')
};

https.createServer(options, function(req, res) {
	res.writeHead(200);
	res.end('Hello Secure');
}).listen(3000, function() {
	console.log('Server running https port 3000');
});