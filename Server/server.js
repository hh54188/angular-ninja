var express = require('express');
var app = express();

app.get('/query', function (req, res) {
	console.log(req.query.keywords); 
});

app.listen(8080);