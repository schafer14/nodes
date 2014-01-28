var flow = require('nimble');

//Set timeout simulates a function that takes time and needs to be executed in series
flow.series([
	function(callback) {
		setTimeout(function() {
			console.log('First Command');
			callback();
		}, 1000);
	},
	function(callback) {
		setTimeout(function() {
			console.log('Second Command');
			callback();
		}, 500);
	},
	function(callback) {
		setTimeout(function() {
			console.log('Third Command');
			callback();
		}, 100);
	}
]);