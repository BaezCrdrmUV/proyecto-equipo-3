const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title : {type: String, required: true},
    number : {type: Number, required:true},
    album : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'albums'},
    artist : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'artists'},
    genre : {type: String, required: true},
    year: {type:String, required: true},
    urlStreaming: {type: String, required: true},
    urlImage: {type: String, required: true}
});

const model = mongoose.model('Song', songSchema);
module.exports = model;