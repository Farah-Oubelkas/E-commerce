const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { cassandra } = require('./db.js');
var productController = require('./controllers/productController.js');
var UserControlleurCasssandra = require('./controllers/UserControlleurCassandra.js');  
var cartController = require('./controllers/cartController.js'); 


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/products', productController);

app.use('/user', UserControlleurCasssandra);

app.use('/carts', cartController);
//app.use('/Department', departmentController);


