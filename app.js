
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var db = require('./models/models');


var app = express()
	, server = require('http').createServer(app)
	, io = require('socket.io').listen(server);

// all environments
io.set('log level', 1);	
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signin', routes.signin);
app.get('/createAccount', routes.createAccount);

db.sequelize.sync().complete(function(err) {
  if (err) 
    throw err;
  server.listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

	//Setup events:
	io.sockets.on('connection', function (socket) {
		socket.on('test', function () {
			console.log("Received test event.");
		});
	});
});