var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	port: "3309",
	user: 'root',
	password: 'Euusooreddit1!',
	database: 'dbuser'
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected.");
	} else {
		console.log("Error connecting database.");
		console.log(err);
	}
});

exports.register = function(req,res){

	var query = "SELECT username FROM user where username like " + connection.escape(req.body.username) + ";";
	connection.query(query, function (error, results, fields) {

		var user={
			"username":req.body.username,
			"password":req.body.password,
			"email":req.body.email
		}

		if (error) {
			console.log(error);
		}
		if (results[0] == undefined) {
			console.log("User available.");
			connection.query("INSERT INTO user SET ?", user, function (error, results, fields) {
				if (error) {
					console.log(error);
				}else{
					console.log('New registered user:' + req.body.username);
				};
			
		});
		}
		else{
			console.log("User taken");
		}
	});
}