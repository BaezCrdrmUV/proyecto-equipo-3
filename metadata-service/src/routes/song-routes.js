const express = require('express');
const router = express.Router();
const songController = require('../controllers/song-controller.js');

router.post('/songs/createSong', songController.createSong);
router.get('/songs/getSong', songController.getSong);


module.exports = router;