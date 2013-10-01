
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

db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err
  } else {
    server.listen(app.get('port'), function(){
		  console.log('Express server listening on port ' + app.get('port'));
		});
		io.sockets.on('connection', function (socket) {
		  socket.on('newPeer', function (data) {
		  	console.log("New peer recently connected:");
		    console.log(data);
		  });
		});
  }
})