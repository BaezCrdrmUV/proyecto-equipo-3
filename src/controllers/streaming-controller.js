
var express = require('express');
var app = express();


const getSong = async(req, res) =>{
   console.log('Cancion pedida: ' + req.body);
   res.send(req.body);
};


module.exports = {getSong};