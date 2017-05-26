//var mongoose = require('mongoose');
//var conn      = mongoose.createConnection('mongodb://admin:test@ds141401.mlab.com:41401/testing');
//var conn2     = mongoose.createConnection('mongodb://admin:admin@ds021915.mlab.com:21915/universis');

//module.exports = {
//  con1: conn,       
//  con2: conn2
//  }

var Mongoose = require('mongoose').Mongoose;

var db1 = new Mongoose();
db1.connect('mongodb://admin:test@ds141401.mlab.com:41401/testing');
var db2 = new Mongoose();
db2.connect('mongodb://admin:admin@ds021915.mlab.com:21915/universis');

module.exports = {
  con1: db1,       
  con2: db2
  }