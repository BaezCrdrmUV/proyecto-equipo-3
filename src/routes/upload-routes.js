const express = require('express');
const router = express.Router(); 
const conversion = require('../controllers/conversionLibrary')
const uploadController = require('../controllers/upload-controller')

var multer = require('multer');

var optionsMulter = multer.diskStorage({
    destination: function(req, file, cb){
        var fileWithoutSpaceName = conversion.eliminateEmptySpaces(file.originalname)
        conversion.makeDirectory(`${songDir}/${fileWithoutSpaceName}`)
        conversion.makeDirectory(`${songDir}/${fileWithoutSpaceName}/originalSong`);
        cb(null, `${songDir}/${fileWithoutSpaceName}/originalSong`);
    },
    filename: function(req, file, cb){
        var fileWithoutSpaceName = file.originalname.replace(/\s+/g, '');
        cb(null, fileWithoutSpaceName);
    }
});

var upload = multer({storage: optionsMulter});

router.post('/uploadsong', upload.single('mp3'), uploadController.uploadsong);

module.exports = router;