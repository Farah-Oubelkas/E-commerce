const express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'ecommerce'
  });


 const getAllProducts = 'SELECT * FROM product';
  //localhost:3000/products
 router.get('/',function(req,res){
    client.execute( getAllProducts, [],function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            res.send(result.rows);
        }
    })

 });


/*  const getProductbyId = 'SELECT * FROM product WHERE id = ?';
 router.get('/:id',function(req,res){
    client.execute( getProductbyId, [req.params.id],function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            console.log('product', result.rows)
        }
    })
 }); */

 const addProduct = 'INSERT INTO product(id,brand,category,description,image,price,title) VALUES(?,?,?,?,?,?,?)';
 
 router.post('/',function(req,res){
     console.log(req.body);
    client.execute( addProduct, [req.body.id,req.body.brand,req.body.category
    ,req.body.description,req.body.image,req.body.price,req.body.title],{prepare:true},function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            console.log(result.rows);
        }
    })
 }); 

 module.exports = router;
 
