const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name : {type: String, required: true},

});

const model = mongoose.model('Song', songSchema);
module.exports = model;