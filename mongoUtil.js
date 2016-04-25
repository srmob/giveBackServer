var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

exports.connect = function(){
  //var db_connect_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/giveback';
  var db_connect_url = 'mongodb://admin:admin@ds019481.mlab.com:19481/giveback';
    //client.connect('mongodb://localhost:27017/giveback', function(err, db) {
    client.connect(db_connect_url, function(err, db) {
      if(err) {
        console.log("Error connecting to Mongo - check mongod connection");
        process.exit(1);
      }
      _db = db;
      console.log("Connected to Mongo url -->"+db_connect_url);
    });
  }

exports.org = function(){
    console.log('org collection loaded')
    return _db.collection('org');
    
}
exports.items_need = function(){
    console.log('items_need collection loaded')
    return _db.collection('items_need');
    
}
exports.user = function(){
    console.log('user collection loaded')
    return _db.collection('user');
    
}
