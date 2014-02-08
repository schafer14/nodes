
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var register = require('./routes/register');
var messages = require('./lib/messages');
var login = require('./routes/login');
var user = require('./lib/middleware/user');
var entries = require('./routes/entries');
var validate = require('./lib/middleware/validate.js');
var page = require('./lib/middleware/page');
var Entry = require('./lib/entry');
var auth = require('./lib/middleware/auth');
var api = require('./routes/api');
var index = require('./routes/index');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api.auth);
app.use(user);
app.use(messages);
app.use(app.router);
app.use(index.notfound);
app.use(index.error);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.set('title', 'ShoutBoxin');

app.get('/', page(Entry.count, 5), entries.list);
app.get('/register', register.form);
app.post('/register', register.submit);
app.get('/login', login.form);
app.post('/login', login.submit);
app.get('/logout', login.logout);
app.get('/post', auth(), entries.form);
app.post('/post', 
	auth(),
	validate.required('entry[title]'), 
	validate.lengthAbove('entry[body]', 4),
	entries.submit);

app.get('/api/user/:id', api.user);
app.get('/api/entries', page(Entry.count, 5), api.entries);
app.post('/api/entries', entries.submit);

if(process.env.ERROR_ROUTE) {
	app.get('/dev/error', function(req, res, next) {
		var err = new Error('database connection failed');
		next(err);
	});
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
