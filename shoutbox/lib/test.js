var redis = require('redis');
var db = redis.createClient();


db.on("error", function (err) {
    console.log("Error " + err);
});


db.get('user:id:Banner Schafer', function(err, id) {
	console.log(err, id);
});

db.set("string key", "string val", redis.print);

db.hgetall('user:5', function(err, user) {
	if (err) return fn(err);
	console.log(user);
});