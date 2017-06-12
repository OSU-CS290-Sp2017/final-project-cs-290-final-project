var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var postsData = require('./postData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Edit this so that it leads to a blank page with a button to direct to /posts/ ??? Maybe a bad idea
app.get('/', function (req, res, next) {
	console.log("== URL params for request:", req.params);
	//console.log("== postData:", postsData);
	var templateArgs = {
		posts: postsData
	};
	
	res.render('postThumbPage', templateArgs);
});

app.get('/posts/', function (req, res, next) {
	console.log("== URL params for request:", req.params);
	//console.log("== postData:", postsData);
	var templateArgs = {
		posts: postsData
	};
	
	res.render('postThumbPage', templateArgs);
});

app.get('/posts/:post', function (req, res, next) {
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

app.get('/about', function (req, res) {
	res.status(200).render('about');
});

app.get('/faq', function (req, res) {
	res.status(200).render('faq');
});

app.post('/upload/', function (req, res, next) {
	
	console.log("req.category: ", req.category);
	console.log("req.body.location: ", req.body.location);
	console.log("req.body.title: ", req.body.title);
	console.log("req.body.body: ", req.body.body);
	console.log("req.body.author: ", req.body.author);
	console.log("req.body.phone: ", req.body.phone);
	console.log("req.body.email: ", req.body.email);
	console.log("req.body.price: ", req.body.price);
	console.log("req.body.image1: ", req.body.image1);
	console.log("req.body.image2: ", req.body.image2);
	console.log("req.body.image3: ", req.body.image3);
	
	var varCategory = req.body.category;
	var varLocation = req.body.location;
	var varTitle = req.body.title;
	var varBody = req.body.body;
	var varAuthor = req.body.author;
	var varPhone = req.body.phone;
	var varEmail = req.body.email;
	var varPrice = req.body.price;
	var varImage1 = req.body.image1;
	var varImage2 = req.body.image2;
	var varImage3 = req.body.image3;
	
	var indexMax = $('.post-thumbnail').length

	var d = new Date();
	var currentDate = "";
	currentDate += d.getMonth() + 1;
	currentDate += "/";
	currentDate += d.getDate();
	currentDate += "/";
	currentDate += d.getFullYear();
	
	var postDataTemplate = {
		index: indexMax,
		category: varCategory,
		date: currentDate,
		location: varLocation,
		title: varTitle,
		body: varBody,
		author: varAuthor,
		phone: varPhone,
		email: varEmail,
		price: varPrice,
		image1: varImage1,
		image2: varImage2,
		image3: varImage3
	};
	
	fs.writefile("/postData.json", JSON.stringify(postDataTemplate, null, 2), function (err) {
		if (err) {
			console.log("There was an error writing to the .json file");
			return console.log(err);
		}
		console.log(JSON.stringify(postDataTemplate));
		console.log('Writing to ' + "postData.json");
	});
	
	res.status(200).send();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
	res.status(404).render('404Page');
});

app.listen(port, function () {
	console.log("== Server listening on port: ", port);
});