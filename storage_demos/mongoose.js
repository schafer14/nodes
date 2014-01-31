var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

var Schema = mongoose.Schema;
var Tasks = new Schema({
	name: String,
	description: String
});
mongoose.model('Task', Tasks);

update(show);


function addTask(callback) {
	var Task = mongoose.model('Task');
	var task = new Task();
	task.name = 'Sleep';
	task.description = 'This is easy';
	task.save(function(err) {
		if (err) throw err
		console.log('Task saved');
	});
	callback();
}

function update(callback) {
	var Task = mongoose.model('Task');
	Task.update(
		{_id: '52eb11bfbe71fbc20fa2e1cf'}, 
		{description: 'Eat breakfast'},
		{multi: false},
		function(err, rows_updated) {
			if (err) throw err
			console.log('Updated');
		}
	);
	callback();
}

function show() {
	var Task = mongoose.model('Task');
	//Task.find({name: 'name'}, function(err, tasks) {})
	Task.find(function (err, tasks) {
	  	if (err) throw err// TODO handle err
	  	console.log(tasks)
	});
}