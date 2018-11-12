const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => controller.getMovies(req, res));
router.post('/', (req, res) => controller.postMovie(req, res));
router.put('/', (req, res) => controller.updateMovie(req, res));

router.get('/:id', (req, res) => controller.getMovie(req, res));
router.delete('/:id', (req, res) => controller.deleteMovie(req, res));

router.get('/like', (req, res) => controller.getLike(req, res));
router.delete('/like/:id', (req, res) => controller.deleteLike(req, res));

module.exports = router;
