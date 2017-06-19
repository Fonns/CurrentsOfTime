var fs = require('fs');
var passwordHash = require('password-hash');
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

		var passHash = passwordHash.generate(req.body.password);

		var user={
			"username":req.body.username,
			"password":passHash,
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
					res.redirect('/index');
				};
			
		});
		}
		else{
			console.log("User taken");
			res.send({message: "Username Taken. Please choose another one."});
		}
	});
}

exports.login = function(req,res){
	var query = "SELECT username, password FROM user where username like " + connection.escape(req.body.username) + ";";
	connection.query(query, function (error, results, fields) {

		var correctPass = passwordHash.verify(req.body.password,results[0].password);

		if (results[0].username == req.body.username) {
			console.log("User found");
			if(correctPass){
				console.log("logedin");
				res.redirect('/profile');
			} else {
				console.log("wrong password");
				res.send({message: "Wrong password"});
			}
		}
		else{
			console.log("Wrong user");
			res.send({message: "Inserted username does not exist."});
		}
	});
}