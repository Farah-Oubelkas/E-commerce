const express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'ecommerce'
  });


 const getAllUsers = 'SELECT * FROM User';
  //localhost:3000/products
 router.get('/',function(req,res){
    client.execute( getAllUsers, [],function(err,result){
        if(err){
             res.status(404).send({msg:err});
        }else{
            res.send(result.rows);
            console.log(result.rows);
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

 router.post('/login',function(req,res)
 {
    const getUser ="select * from user where email=? and password=?";
    client.execute(getUser, [req.body.email,req.body.password],
    { prepare: true },function(err,result){
        if(err){
             res.status(404).send({msg:err+h});
        }else{
            console.log(result.rows);
        }
    })

 })
 router.post('/',function(req,res)
 {
const addUser = 'INSERT INTO User(email,adresse,contact,date_creation,first_name,last_name,password) VALUES(?,?,?,?,?,?,?)';
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' +dd ;
     
  
  var h=  client.execute( addUser, [req.body.email,req.body.adresse,req.body.contact,
    today,req.body.first_name,req.body.last_name,req.body.password],
    { prepare: true },function(err,result){
        if(err){
             res.status(404).send({msg:err+h});
        }else{
            console.log(result.rows);
        }
    })
 }); 

 module.exports = router;