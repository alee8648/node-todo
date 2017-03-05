// Import modules
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

// Call express
var app = express();

// Set variables
var port = 3000;

// Allow form submissions
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set global connection variable
global.db = (global.db ? global.db : mongoose.createConnection('mongodb://localhost/node-todo'));

// Set the view engine to handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Routes
var Todo = require('./models/todos.js');
app.post('/', function(req, res, next) {
	var todo = new Todo({
		text: req.body.item
	});
	todo.save()
	.then(function() {
		console.log("Todo saved!");
		next();
	});
	
});

app.all('/', function(req, res, next) {
	Todo.find()
	.then(function(todos) {
		res.render('index', {
			todos: todos
		});
	});
});

// Listen on port 3000
app.listen(port, function() {
	console.log("Example app listening on port " + port);
});