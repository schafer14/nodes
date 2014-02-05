var photos = [];

photos.push({
	name: 'Node.js',
	path: 'http://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
	name: 'MEAN stack',
	path: 'http://blog.langoor.mobi/wp-content/uploads/2013/07/meanstack-624x250.jpg'
});

photos.push({
	name: 'Express.js',
	path: 'http://www.perssonponerar.se/wordpress/wp-content/uploads/2013/03/expressjs.jpg'
});

photos.push({
	name: 'NPM',
	path: 'https://npmjs.org/static/npm.png'
});

photos.push({
	name: 'Node logo',
	path: 'http://readwrite.com/files/nodejs.png'
});

exports.list = function(req, res, next) {
	res.render('photos', {
		photos: photos
	});
};