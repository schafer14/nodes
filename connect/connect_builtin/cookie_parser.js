var connect = require('connect');
var app = connect()
	.use(connect.cookieParser('This is a secret'))
	.use(function(req, res, rext) {
		console.log(req.cookies);
		console.log(req.signedCookies);
		res.setHeader('Set-Cookie', 'key=value');
		res.setHeader('Set-Cookie', 'toki=cookie; Expires=Tue, 04 Feb 2014 00:00:00 GMT');
		res.end('Bye now');
	})
	.listen(3000, function() {
		console.log('Server Listening on port 3000');
	});