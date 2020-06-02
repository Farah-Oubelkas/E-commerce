const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { cassandra } = require('./db.js');
var productController = require('./controllers/productController.js');
<<<<<<< HEAD
 var UserControlleurCasssandra = require('./controllers/UserControlleurCassandra.js');  
=======
var userController=require('./controllers/userController.js');
//var departmentController = require('./controllers/departmentController.js'); */
>>>>>>> 791210bd8f87fc97594bbff196665265e78cf37b

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/products', productController);
<<<<<<< HEAD
app.use('/user', UserControlleurCasssandra);
=======
app.use('/carts', cartController);
//app.use('/Department', departmentController);
app.use('/user', userController);
>>>>>>> 791210bd8f87fc97594bbff196665265e78cf37b
