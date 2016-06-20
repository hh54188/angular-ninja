var express = require('express');
var app = express();

app.get('/query', function (req, res) {
	res.send("Hello World");
});

app.listen(8080);