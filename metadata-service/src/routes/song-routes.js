const express = require('express');
const router = express.Router();
const songController = require('../controllers/song-controller.js');

router.post('/songs/createSong', songController.createSong);
router.get('/songs/getSong', songController.getSong);

router.post('/songs/createArtist', songController.createArtist);
router.get('/songs/getArtist', songController.getArtist);

router.post('/songs/createAlbum', songController.createAlbum);
router.get('/songs/getAlbum', songController.getAlbum);


module.exports = router;