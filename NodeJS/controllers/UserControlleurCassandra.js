const express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');


const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'ecommerce'
});

const getAllUsers = 'SELECT * FROM User';
//localhost:3000/user/all
router.get('/', function (req, res) {
    client.execute(getAllUsers, [], function (err, result) {
        if (err) {
            res.status(404).send({ msg: err });
        } else {
            res.send(result.rows);
        }
    })

});
//modification user
router.post('/edit', function (req, res) {
    console.log(req.body);
    const addUser = 'INSERT INTO ecommerce.user(id,First_Name,Last_Name,Address,Email,password,Contact) VALUES(?,?,?,?,?,?,?)';
    client.execute(addUser, [  req.body.id,req.body.first_name, req.body.last_name
        , req.body.address, req.body.email, req.body.password, req.body.contact ], { prepare: true }, function (err, result) {
            if (err) {
                res.status(404).send({ msg: err });
            } else {
                console.log("Posttttt----_>"+result.rows);
            }
        })
});

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

const getUserbyId = 'SELECT * FROM user WHERE id = ?';
router.get('/:id', function (req, res) {
    client.execute(getUserbyId, [req.params.id], function (err, result) {
        if (err) {
            res.status(404).send({ msg: err });
        } else {
            res.send(result.rows);
        }
    })
});

//yassin
router.post('/',function(req,res)
 {
    const addUser = 'INSERT INTO User(id,email,address,contact,date_creation,first_name,last_name,password) VALUES(?,?,?,?,?,?,?,?)';
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' +dd ;
     
  
  var h=  client.execute( addUser, [req.body.id,req.body.email,req.body.address,req.body.contact,
    today,req.body.first_name,req.body.last_name,req.body.password],
    { prepare: true },function(err,result){
        if(err){
             res.status(404).send({msg:err+h});
        }else{
            console.log(result.rows);
        }
    })
 }); 


router.delete('/:id', (req, res) => {
    console.log("const deleteUserbyId = 'DELETE FROM user WHERE id = ?';")
    const deleteUserbyId = 'DELETE FROM user WHERE id = ?';
    client.execute(deleteUserbyId, [req.params.id],{ prepare: true }, function (err, result) {
        if (err) {
            res.status(404).send({ msg: err });
        } else {
            console.log("deleted successfully");
        }
    })
});
module.exports = router;