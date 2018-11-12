const files = require("./../../utils/files");
let movies = files.loadMovies(moviesData => movies = moviesData);

function getMovies(req, res) {
  res.json(movies);
}

function getMovie(id) {
  return movies.find(movie => movie.id === id);
}

function getLike(req, res) {
  const likeMovies = movies.filter(movie => movie.like === true);
  res.json(likeMovies);
}

function postMovie(req, res) {
  const movie = req.body;
  movie.id = `${movies.length + 1}`;
  movies.push(movie);

  saveMovies(res);
}

function updateMovie(req, res) {
  const movieId = req.body.id;
  let moviePosition = movies.findIndex(movie => movie.id === movieId);

  if (moviePosition >= 0) {
    movies[moviePosition] = req.body;
  }

  saveMovies(res);
}

function deleteMovie(req, res) {
  const movieId = req.params.id;
  const moviePosition = movies.findIndex(movie => movie.id === movieId);

  if (moviePosition >= 0) {
    movies.splice(moviePosition, 1);
  }

  saveMovies(res);
}

function deleteLike(req, res) {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id === movieId);

  if (movie) {
    movie.like = false;
  }

  saveMovies(res);
}

function saveMovies(res) {
  files.saveMovies(movies, err => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
}

module.exports = {getMovie, getMovies, getLike, postMovie, updateMovie, deleteMovie, deleteLike};
