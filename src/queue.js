const conversion = require("./controllers/conversionLibrary");
const mongoose = require("mongoose");
const Songs = require('./mongo/models/song.js');

const queueConvertion = async() =>{
  if ((await Songs.countDocuments()).valueOf() != 0){
    Songs.findOneAndRemove({'status': 'Waiting'}, function (err, song){
      conversion.resizeDiferentAudio(song.filename);
    })
  }else{
    console.log('Empty queue, waiting')
  }
}

module.exports = {queueConvertion};