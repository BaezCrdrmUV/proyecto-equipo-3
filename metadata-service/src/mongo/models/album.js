const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumname : {type: String, required: true},
    artist : {type: String, required: true},
    releaseyear: {type:String, required: true},
    urlImage: {type: String, required: true}
});

const model = mongoose.model('Album', albumSchema);
module.exports = model;