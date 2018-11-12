const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => controller.getMovies);
router.post('/', (req, res) => controller.postMovie);
router.put('/', (req, res) => controller.updateMovie);

router.get('/:id', (req, res) => controller.getMovie);
router.delete('/:id', (req, res) => controller.deleteMovie);

router.get('/like', (req, res) => controller.getLike);
router.delete('/like/:id', (req, res) => controller.deleteLike);

module.exports = router;
