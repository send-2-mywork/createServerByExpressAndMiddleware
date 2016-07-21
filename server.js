var express = require('express');
var http = require('http');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3004;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
	// body...
	console.log(`Server is running at http://${hostname}:${port}/`);
});

