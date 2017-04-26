var express = require('express');
var app = express();

app.use(express.static(__dirname + '/html/files'));

app.get('/', function(req, res){
	res.sendFile(__dirname + "/html/home.html");
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port
	console.log('example app listening at http://%s:%s', host, port)
})