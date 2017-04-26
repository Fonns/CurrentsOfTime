var express = require('express');
var app = express();

app.use(express.static(__dirname + '/html/files'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/html/index.html");
})

app.get('/forum.html', function(req, res){
	res.sendFile(__dirname + "/html/forum.html");
})

app.get('/games.html', function(req, res){
	res.sendFile(__dirname + "/html/games.html");
})

app.get('/sign.html', function(req, res){
	res.sendFile(__dirname + "/html/sign.html");
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port
	console.log('example app listening at http://%s:%s', host, port)
})