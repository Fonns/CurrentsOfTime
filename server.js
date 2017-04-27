var express = require('express');
var app = express();

app.use(express.static(__dirname + '/html/files'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/html/index.html");
	console.log('\nAccess to home page.');
})

app.get('/forum', function(req, res){
	res.sendFile(__dirname + "/html/forum.html");
	console.log('\nAccess to forum.');
})

app.get('/games', function(req, res){
	res.sendFile(__dirname + "/html/games.html");
	console.log('\nAccess to mini games.');
})

app.get('/login', function(req, res){
	res.sendFile(__dirname + "/html/sign.html");
	console.log('\nAccess to sign in.');
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port
	console.log('\nServer up and running.');
})