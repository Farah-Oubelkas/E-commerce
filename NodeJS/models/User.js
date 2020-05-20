const mongoose = require('mongoose');

var User = mongoose.model('User', {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, require : true },
    password: { type: String },
    date: { type: Number, default: Date.now }
});

module.exports = { User };