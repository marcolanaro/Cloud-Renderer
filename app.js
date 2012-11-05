var express = require('express');
var app = module.exports = express();
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);
var clock = require("./clock");

app.use(express.static(__dirname + '/public'));
app.use(app.router);
app.use(express.errorHandler());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var users = [];

app.get('/', function(req, res){
	res.render('users', {
		users: users
	});
});


if (!module.parent) {
	server.listen(80);
	console.log('Express app started on port 80');
}

io.configure(function () {
  io.disable('log');
});

io.sockets.on('connection', function (socket) {
	
	setInterval(function(){
		socket.volatile.emit('clock',{r:clock.render()});
	},1000);
});