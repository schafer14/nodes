var connect = require('connect');
var logger = require('./lib/logger');
var router = require('./middleware/router');
var routes = require('./lib/routes');


connect()
	.use(logger)
	.use(router(routes))
	.use(connect.favicon())
	.listen(3000, function() {
		console.log('Server running on port 3000');
	});



