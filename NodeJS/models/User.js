const cassandra = require('cassandra-driver');

var User = cassandra.model('user', {
    id:{type:Number},
    first_name: { type: String },
    last_name: { type: String },
    address: { type: String },
    email: { type: String },
    password: {   type: String },
    contact: {   type: String },
    date: { type: Number, default: Date.now }
});     
 

module.exports = { User };