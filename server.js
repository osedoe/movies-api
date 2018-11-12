const express = require('express');
const files = require("./src/utils/files");
const app = express();
const moviesRouter = require('./src/api/movies');
const port = 3000;
let movies;
files.loadMovies(moviesData => movies = moviesData);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/movies', moviesRouter);

app.listen(3000, () => {
  console.log(`Ready on port ${port}!`);
});
