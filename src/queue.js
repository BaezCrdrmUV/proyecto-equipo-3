const conversion = require("./controllers/conversionLibrary");
const mongoose = require("mongoose");
const Songs = require('./mongo/models/song.js');

const queueConvertion = async() =>{
  if ((await Songs.countDocuments()).valueOf() != 0){
    Songs.findOneAndRemove({'status': 'Waiting'}, async function (err, song){
      song.status = 'Processing'
      await conversion.resizeDiferentAudio(song.filename);
    })
  }else{
    console.log('Empty queue, waiting')
  }
}

module.exports = {queueConvertion};