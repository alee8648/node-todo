// Import modules
var express = require('express');
var exphbs = require('express-handlebars');

// Call express
var app = express();

// Set variables
var port = 3000;

// Set the view engine to handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Routes
var Todo = require('models/todos.js');
app.post('/', function(req, res, next) {
	next();
});

app.all('/', function(req, res, next) {
	res.render('index');
});

// Listen on port 3000
app.listen(port, function() {
	console.log("Example app listening on port " + port);
});