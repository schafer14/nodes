var connect = require('connect');
// var fs = requrie('fs');
// var log = fs.createWriteStream('var/log/myapp.log', {flags: 'a'});

connect.logger.token('body', function(req, res) {
	return JSON.stringify(req.body);
});

var app = connect()
	.use(connect.bodyParser())
	// .use(connect.logger({format: ':method :url :body :user-agent', stream: log}))
	.use(connect.logger(':method :url :body :user-agent'))
	.listen(3000);