const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// the following is the same as "module.exports = {mongoose : mongoose};"
module.exports = {mongoose};
