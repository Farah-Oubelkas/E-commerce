const mongoose = require('mongoose');

var Department = mongoose.model('Department', {
    name: { type: String },
    manager: { type: String },
    etage: {type: Number }

},'Department');

module.exports = { Department };