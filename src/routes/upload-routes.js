const express = require('express');
const router = express.Router(); 
const path = require('path');
const uploadController = require('../controllers/upload-controller')

var multer = require('multer');

var optionsMulter = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, songDir);
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});

var upload = multer({storage: optionsMulter});

router.post('/uploadsong', upload.single('mp3'), uploadController.uploadsong);

module.exports = router;
