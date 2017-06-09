var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var postData = require('./postData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
	console.log("== URL params for request:", req.params);
	
	var templateArgs = {
		posts: postData
	};
	
	res.render('postPage', templateArgs);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
	res.status(404).render('404Page');
});

app.listen(port, function () {
	console.log("== Server listening on port: ", port);
});