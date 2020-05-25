const cassandra = require('cassandra-driver');

var Product = cassandra.model('Product', {
    id: { type: Number },
    title: { type: String },
    brand: { type: String },
    category: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number }
});

module.exports = { Product };