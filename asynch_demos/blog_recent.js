var http = require('http');
var fs = require('fs');

//Callback runs anonomyous function when create Server is done. 
http.createServer(function(req, res) {
	getTitles(res);
}).listen(8000, function() {
	console.log('Server listening on port 8000');
});

function getTitles(res) {
	fs.readFile('./titles.json', function(err, data) {
		if(err) return handleError(err, res)
		getTemplate(JSON.parse(data.toString()), res);
	});
}

function getTemplate(titles, res) {
	fs.readFile('./template.html', function(err, data) {
		if(err) return handleError(err, res)
		formatHtml(titles, data.toString(), res);
	});
}

function formatHtml(titles, tmpl, res) {
	var html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
}

function handleError(err, res) {
	console.error(err);
	res.end('Server Error');
}