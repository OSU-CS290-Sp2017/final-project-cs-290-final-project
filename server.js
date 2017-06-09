var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var postsData = require('./postData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
	console.log("== URL params for request:", req.params);
	console.log("== postData:", postsData);
	var templateArgs = {
		posts: postsData
	};
	
	res.render('postPage', templateArgs);
});

app.get('/:post', function (req, res, next) {
	console.log("== URL params for request:", req.params);
	console.log("== req.params.post:", req.params.post);
	
	var post = req.params.post;
	var postData = [postsData[post]];
	
	if(postData) {
		var templateArgs = {
			posts: postData,
		};
	}
	else {
		next();
	}
	
	res.render('postPage', templateArgs);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
	res.status(404).render('404Page');
});

app.listen(port, function () {
	console.log("== Server listening on port: ", port);
});