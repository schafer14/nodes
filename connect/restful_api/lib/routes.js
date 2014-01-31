module.exports = {
	GET: {
		'/users': function(req, res) {
			res.end('All users');
		},
		'/users/:id': function(req, res, id) {
			res.end('User number ' + id)
		}
	},
		
	PUT: {
		'/users/:id': function(req, res, id) {
			res.end('Updating user number ' + id);
		}
	},
		
	POST: {
		'/users': function(req, res) {
			res.end('Creating new user');
		}
	},
		
	DELETE: {
		'/users/:id': function(req, res, id) {
			res.end('Destroying user number ' + id);
		}
	}	
};
