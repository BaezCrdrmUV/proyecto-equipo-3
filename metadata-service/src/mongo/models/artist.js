const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artist : {type: String, required: true},
    description : {type: String, required: true},
    genre : {type: String, required: true},
    debutyear: {type:String, required: true},
    urlImage: {type: String, required: true}
});

const model = mongoose.model('Artist', artistSchema);
module.exports = model;