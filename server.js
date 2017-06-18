var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var svFunction = require(__dirname + "/server/functions.js");

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/html/files'));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', function(req, res){
	res.render('index');
	console.log('\nAccess to home page.');
})

app.get('/forum', function(req, res){
	res.render('forum');
	console.log('\nAccess to forum.');
})

app.get('/profile', function(req, res){
	res.render('profile');
	console.log('\nAccess to profile.');
})

app.get('/games', function(req, res){
	res.render('games');
	console.log('\nAccess to mini games.');
})

app.post('/login', function(req, res){
	svFunction.register(req, res);
})

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port
	console.log('\nServer up and running.');
})