var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected to mongodb database')
});

var movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: String
});


module.exports = mongoose.model('Movie', movieSchema);
