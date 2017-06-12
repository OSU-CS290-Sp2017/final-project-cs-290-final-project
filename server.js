var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var postsData = require('./postData');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
	
	var templateArgs = {
		posts: postsData
	};
	
	res.render('postThumbPage', templateArgs);
});

app.get('/posts/', function (req, res, next) {

	var templateArgs = {
		posts: postsData
	};
	
	res.render('postThumbPage', templateArgs);
});

app.get('/posts/:post', function (req, res, next) {
	
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

app.get('/about', function (req, res) {
	
	res.status(200).render('about');
});

app.get('/faq', function (req, res) {
	
	res.status(200).render('faq');
});

app.post('/upload/', function (req, res, next) {
	
	var indexMax = Object.keys(postsData).length;
	var indexMaxString = indexMax.toString();
	
	var d = new Date();
	var currentDate = "";
	currentDate += d.getMonth() + 1;
	currentDate += "/";
	currentDate += d.getDate();
	currentDate += "/";
	currentDate += d.getFullYear();
	
	var dataToPush = {
		index: indexMaxString,
		category: req.body.category,
		date: currentDate,
		location: req.body.location,
		title: req.body.title,
		body: req.body.body,
		author: req.body.author,
		phone: req.body.phone,
		email: req.body.email,
		price: req.body.price,
		image1: req.body.image1,
		image2: req.body.image2,
		image3: req.body.image3
	}
	
	postsData.push(dataToPush);
	fs.writeFile('postData.json', JSON.stringify(postsData, null, 2), function (err) {
		if (err) {
			res.status(500).send("Unable to save data to database.");
		} else {
			res.status(200).send();
		}
	});
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
	
	res.status(404).render('404Page');
});

app.listen(port, function () {
	
	console.log("== Server listening on port: ", port);
});