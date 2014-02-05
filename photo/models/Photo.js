var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/snapstock');

var schema = new mongoose.Schema({
	name: String,
	path: String
});

module.exports = mongoose.model('Photo', schema);