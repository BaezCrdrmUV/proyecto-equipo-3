const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title : {type: String, required: true},
    number : {type: Number, required:true},
    album : {type: String, required: true},
    artist : {type: String, required: true},
    genre : {type: String, required: true},
    year: {type:String, required: true},
    filename: {type: String, required: true},
    status: {type: String, required: true}
});

const model = mongoose.model('Song', songSchema);
module.exports = model;