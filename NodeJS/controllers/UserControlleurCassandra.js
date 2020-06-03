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
//INSERT INTO ecommerce.user(id,First_Name,Last_Name,Address,Email,password,Contact) VALUES(1,'ayoub','tigoudern','tiznit','ayoub@gmail.com','1231',002145248);
router.post('/', function (req, res) {
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

router.put('/:id', function (req, res) {
    console.log(req.body);
    const editProduct =  'INSERT INTO ecommerce.user(First_Name,Last_Name,Address,Email,password,Contact) VALUES(?,?,?,?,?,?,?)';
    client.execute(addUser, [ req.body.First_Name, req.body.Last_Name
        , req.body.Address, req.body.Email, req.body.password, req.body.contact],{ prepare: true }, function (err, result) {
            if (err) {
                res.status(404).send({ msg: err });
            } else {
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