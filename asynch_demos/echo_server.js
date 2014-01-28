//Once server is running 'telnet 127.0.0.1 8888' sets up socket 

var net = require('net');

var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(8888);