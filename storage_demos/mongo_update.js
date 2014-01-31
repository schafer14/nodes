var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mydatabase', server, {w: 1});

client.open(function(err) {
  	if (err) throw err;
  	client.collection('test_insert', function(err, collection) {
    	if (err) throw err;
    	var _id = new client.bson_serializer.ObjectID('52eaf1c39859545830a089d3');
    	collection.update(
    		{_id: _id},
    		{$set: {"chapter": "Connect"}},
    		{safe: true},
    		function(err) {
    			if (err) throw err;
    		}
    	);
    });

});