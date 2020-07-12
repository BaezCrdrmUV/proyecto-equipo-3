const express = require('express');
const router = express.Router();
const songController = require('../controllers/song-controller.js');

router.post('/songs/createSong', songController.createSong);
router.post('/songs/createSongs', songController.createSongs);
router.post('/songs/getSongId', songController.getSong);
router.get('/songs/getSongByName', songController.getSongByName);
router.get('/songs/getSongByGenre', songController.getSongByGenre);

router.post('/songs/createArtist', songController.createArtist);
router.get('/songs/getArtist', songController.getArtist);

router.post('/songs/createAlbum', songController.createAlbum);
router.get('/songs/getAlbum', songController.getAlbum);

router.post('/songs/getSongsByAlbum', songController.getSongsByAlbum)
router.get('/songs/getAllAlbums', songController.getAllAlbums);

router.get('/songs/getAllSongs', songController.getAllSongs);
router.get('/songs/getAllArtists', songController.getAllArtists);

module.exports = router;