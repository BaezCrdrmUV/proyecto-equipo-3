const express = require('express');
const router = express.Router(); 
const streamingController = require('../controllers/streaming-controller')


router.get('/getsong', streamingController.getSong);

module.exports = router;
