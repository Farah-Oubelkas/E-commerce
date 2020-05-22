const cassandra = require('cassandra-driver');
 
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'ecommerce'
});

client.connect(function(err,result){
    if (!err)
        console.log('Cassandra connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});
 
//test
/* const query = 'SELECT * FROM product';
 
client.execute(query, [])
  .then(result => console.log('product with title %s', result.rows[0].title)); */

module.exports = cassandra; 