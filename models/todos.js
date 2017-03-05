var mongoose = require('mongoose');
mongoose.Promise = Promise;

var todoSchema = mongoose.Schema({
	text: String
});

var Todo = db.model('Todo', todoSchema);

module.exports = Todo;