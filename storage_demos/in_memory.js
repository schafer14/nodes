var http = require('http');
var counter = 0;

var server = http.createServer(function(req, res) {
	var count = 0;
	count ++;
	counter ++;
	// Will increment in twos because fav.icon is not routed away. 
	res.write('I have been accessed ' + counter + ' times.\n');
	res.write('I have been accessed ' + count + ' times in this session.');
	res.end();
}).listen(8888, function() {
	console.log('Listening on port 8888');
});