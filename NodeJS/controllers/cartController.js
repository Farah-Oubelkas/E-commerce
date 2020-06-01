const express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');


const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'ecommerce'
});



router.post('/', function (req, res) {
    console.log(req.body);
    const addProduct = 'INSERT INTO cart(produit,quantity) VALUES(?,?)';
    client.execute(addProduct, [req.body.produit, req.body.quantity], { prepare: true }, function (err, result) {
            if (err) {
                res.status(404).send({ msg: err });
            } else {
                console.log(result.rows);
            }
        })
});

module.exports = router;