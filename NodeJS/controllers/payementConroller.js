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
    if(req.body.cheque ==null){
        req.body.cheque =false;
    }
    if(req.body.paypal ==null){
        req.body.cheque =false;
    }
    const addProduct = 'INSERT INTO payement(email,cheque,first_name,last_name,paypal,phone,prixtotal) VALUES(?,?,?,?,?,?,?)';
    client.execute(addProduct, [req.body.email,req.body.cheque,req.body.first_name,req.body.last_name,req.body.paypal,req.body.phone, req.body.prixTotal], { prepare: true }, function (err, result) {
            if (err) {
                res.status(404).send({ msg: err });
            } else {
                console.log(result.rows);
            }
        })
});

module.exports = router;