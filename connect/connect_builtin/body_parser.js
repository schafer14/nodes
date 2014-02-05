var connect = require('connect');
var app = connect()
	.use(connect.bodyParser())
	.use(function(req, res) {
		console.log(req.body);
		res.end('Bye');
	})
	.listen(3000);