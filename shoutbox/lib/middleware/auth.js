module.exports = function(level) {
	level = level || 'user';
	return function(req, res, next) {	
		if (!res.locals.user) {
			res.error('You must be logged in to do that.');
			res.redirect('back');
		} else {
			next();
		}
	}
}