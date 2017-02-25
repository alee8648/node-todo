var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-todo');
mongoose.Promise = Promise;

var todoSchema = mongoose.Schema({
	text: String
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;