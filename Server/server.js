var express = require('express');
var app = express();


app.get('/hello', function (req, res) {
	res.send('Hello');
});

app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
  	res.status(500).send('Something broke!')
})

app.listen(80);