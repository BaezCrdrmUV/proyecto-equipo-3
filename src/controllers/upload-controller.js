var express = require('express');
var app = express();
const conversion = require ('./conversionLibrary')


const uploadsong = async(req, res) =>{
   console.log('Cancion recibida: ' + req.file.originalname);
   res.json({message: 'Cancion recibida: ' + req.file.originalname});
   conversion.resizeDiferentAudio(req.file.originalname);
};


module.exports = {uploadsong};

