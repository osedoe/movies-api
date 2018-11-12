const express = require('express');
const files = require("./src/utils/files");
const moviesRouter = require('./src/api/movies');
const morgan = require('morgan');
const port = 3000;

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.use('/movies', moviesRouter);

app.listen(3000, () => {
  console.log(`Ready on port ${port}!`);
});
