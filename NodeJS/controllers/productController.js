const express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'ecommerce'
  });


 //const getAllProducts = 'SELECT * FROM product';
  //localhost:3000/products
/*  router.get('/',function(req,res){
    client.execute( getAllProducts, [],function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            console.log('product', result.rows)
        }
    })

 }); */


 const getProductbyId = 'SELECT * FROM product WHERE id = ?';
 router.get('/:id',function(req,res){
    client.execute( getProductbyId, [],function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            console.log('product', result.rows)
        }
    })
 });

 module.exports = router;
 
