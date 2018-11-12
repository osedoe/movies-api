function getMovies() {
  res.json(movies);
}

function getMovie() {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id === movieId);
  res.json(movie);
}

function getLike() {
  const likeMovies = movies.filter(movie => movie.like === true);
  res.json(likeMovies);
}

function postMovie() {
  const movie = req.body;
  movie.id = `${movies.length + 1}`;
  movies.push(movie);

  files.saveMovies(movies, err => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
}

function updateMovie() {
  const movieId = req.body.id;
  let moviePosition = movies.findIndex(movie => movie.id === movieId);
  if (moviePosition >= 0) {
    movies[moviePosition] = req.body;
  }

  files.saveMovies(movies, err => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
}

function deleteMovie() {
  const movieId = req.params.id;
  const moviePosition = movies.findIndex(movie => movie.id === movieId);
  if (moviePosition >= 0) {
    movies.splice(moviePosition, 1);
  }

  files.saveMovies(movies, err => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
}

function deleteLike() {
  const movieId = req.params.id;
  const movie = movies.find(movie => movie.id === movieId);
  if (movie) {
    movie.like = false;
  }
  files.saveMovies(movies, err => {
    if (err) {
      res.error(err);
    } else {
      res.json(movies);
    }
  });
}

module.exports = { getMovie, getMovies, getLike, postMovie, updateMovie, deleteMovie, deleteLike };
