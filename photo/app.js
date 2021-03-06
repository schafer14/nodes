
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var photos = require('./routes/photos')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure('production', function() {
	app.set('something', 'production value');
});

app.set('title', 'SnapStock.au');
app.set('photos', __dirname + '/public/photos');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', photos.list);
app.get('/upload', photos.form);
app.get('/photos/:id/download', photos.download(app.get('photos')));
app.post('/upload', photos.submit(app.get('photos')));
app.get('/photos/:id/delete', photos.delete);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
