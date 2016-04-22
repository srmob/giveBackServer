var express = require('express');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');

//require('./models')(wagner);

var app = express();
var mongoUtil = require('./mongoUtil');
mongoUtil.connect();


app.use(function(req, res, next) {
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  next();
});
app.use(express.static('src/views'));
app.use(express.static('public'));
app.use('/api/v1', require('./api')(wagner));


app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();

/*app.get('/orgs',function(req,res){
    var orgCollection = mongoUtil.org();
    orgCollection.find({}).toArray(function(err,docs){
        console.log('documents '+JSON.stringify(docs));
        console.log('documents length'+docs.length);
	    res.json({ allOrgs: docs });
    });
   
});*/



var port = process.env.PORT||3000;
app.listen(port);
console.log('Listening on port ..!'+port);
