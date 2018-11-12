const express = require('express');
const app = express();
const moviesRouter = require('./src/api/movies');
const morgan = require('morgan');
const port = 3000;

app.use(express.json());

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/movies', moviesRouter);

app.listen(3000, () => {
  console.log(`Ready on port ${port}!`);
});
