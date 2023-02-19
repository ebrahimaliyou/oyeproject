const { ObjectID } = require("mongodb");
const movieModel = require("../models/movie");

const movieAPI = module.exports;

// Get all movies
movieAPI.getAllMovies = async (req) => {
    await movieModel.find(function (err, movies) {
        if (err) throw Error("No movie found", err);
        return movies;
    });
};

// get single movie by id
movieAPI.getSingleMovie = async (req) => {
  if(!req.query.id) throw Error("No id provided", err);
  var _id = ObjectID(req.query.id);

  await movieModel.find({ _id: _id }, function (err, movie) {
    if (err) {
      throw Error("Error while getting movie", err);
    }
    return movie;
  });
};

// get paginated movies by page and size
movieAPI.getPaginatedMovies = async (req) => {
  var page = parseInt(req.query.page) || 1;
  var size = parseInt(req.query.size) || 10;

  await movieModel
    .find()
    .skip((page - 1) * size)
    .limit(size)
    .exec(function (err, movies) {
      if (err) {
        throw Error("Error while getting movies", err);
      }
      return movies;
    });
};

// save movie by title, year and rating
movieAPI.saveMovie = async (req) => {
  var movie = new movieModel({
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating,
  });

  await movie.save(function (err, movie) {
    if (err) {
      return console.error(err);
    }
    return movie;
  });
};
