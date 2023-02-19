const api = require('../api');

const movieController = module.exports;

movieController.getAllMovies = async (req, res, next) => {
  const movies = await api.movie.getAllMovies(req);
  res.send(movies);
};

movieController.getSingleMovie = async (req, res, next) => {
  const movie = await api.movie.getSingleMovie(req);
  res.send(movie);
}

movieController.getPaginatedMovies = async (req, res, next) => {
  const movies = await api.movie.getPaginatedMovies(req);
  res.send(movies);
}

movieController.saveMovie = async (req, res, next) => {
  const movie = await api.movie.saveMovie(req);
  res.send(movie);
}