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

module.exports = logger;