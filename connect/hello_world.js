var connect = require('connect');

connect()
	.use(logger)
	.use('/admin', auth) // This middleware only used on /admin routes
	.use(hello)
	.listen(3000, function() {
		console.log('Server listening on port 3000');
	});

function logger(req, res, next) {
	var body = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk) {
		body += chunk;
	});
	req.on('end', function() {
		console.log('%s %s', req.method, req.url);
		console.log(body);
	});
	next();
}

function hello(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
}