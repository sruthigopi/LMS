const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');

const Schema = mongoose.Schema;

var StudentLearningDataSchema = new Schema({
	title: String,
	author: String,
	about: String,
	rating: String
});
var StudentLearningData = mongoose.model('StudentLearningData', StudentLearningDataSchema);
module.exports = StudentLearningData;
