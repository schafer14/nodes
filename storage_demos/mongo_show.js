var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mydatabase', server, {w: 1});

client.open(function(err) {
  	if (err) throw err;
  	client.collection('test_insert', function(err, collection) {
    	if (err) throw err;
    	var _id = new client.bson_serializer.ObjectID('52eaf1c39859545830a089d3');
    	
        //Returns all documents where id = id. Leave empty object returns all documents
        collection.find({_id: _id}).toArray(
            function(err, results) {
                if (err) throw err
                console.log(results);
            }
        );
    });

});