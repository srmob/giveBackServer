'strict'
var express = require('express');
var status = require('http-status');
var bodyParser = require('body-parser');


var mongoUtil = require('./mongoUtil');
mongoUtil.connect();


module.exports = function(wagner) {
  var api = express.Router();
  api.use(bodyParser.urlencoded({ extended: true }));
    var jsonParser = bodyParser.json();

  console.log('api initiating');
    api.get('/orgs',function(req,res){
        var orgCollection = mongoUtil.org();
        orgCollection.find({}).toArray(function(err,docs){
            console.log('documents '+JSON.stringify(docs));
            console.log('documents length'+docs.length);
            res.json({ allOrgs: docs });
        });
       
    });

    api.get('/itemsNeed',function(req, res) {
        var items_need_collection = mongoUtil.items_need();
        items_need_collection.aggregate([
          { $group : { _id : {"catg": "$item_catg","catg_img_src":"$item_imgSrc"}, items: { $push: "$$ROOT" } } }
        ], function(error, allItemsNeed) {
            console.log('all orgs initiated');
            if (error) {
              return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
            }
            if (!allItemsNeed) {
              return res.
                status(status.NOT_FOUND).
                json({ error: 'Not found' });
            }
            res.json({ allItemsNeed: allItemsNeed });
      });
    });

    api.post('/addDonations',jsonParser,function(req, res){
        /*var sportName = req.params.name;
        var newMedal = req.body.medal || {};*/
        console.log('data from client 1 is '+JSON.stringify(req.body));
        var data = req.body|| {} ;
        console.log('data from client is '+JSON.stringify(data));
        //res.sendStatus(200);
        
        var userCollection = mongoUtil.user();
        //var data = {name : "ganesh","email":"ganesh@gmail.com","item_catg":"clothes"};
        
        userCollection.insert(data,function(err,result){
            if(err){
                console.log('error is '+err);
                res.sendStatus(400);
            }else{
                res.sendStatus(200);
            }                         
        });
    })



  /*api.get('/orgs_old', wagner.invoke(function(org) {
    return function(req, res) {
      org.find({}, function(error, allOrgs) {
        console.log('all orgs initiated');
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!allOrgs) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ allOrgs: allOrgs });
      });
    };
  }));

  api.get('/itemsNeed_old', wagner.invoke(function(items_need) {
    return function(req, res) {
      items_need.aggregate([
          { $group : { _id : "$item_catg", items: { $push: "$$ROOT" } } }
        ], function(error, allItemsNeed) {
        console.log('all orgs initiated');
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!allItemsNeed) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ allItemsNeed: allItemsNeed });
      });
    };
  }));*/

  /*api.put('/items_donate',wagner.invoke(function(items_donate){
    var item_add = {
        "name" : "Ganesh"/*,
      "contact" : "9821123222",
      "email" : "gan@gana.com",
      "item_imgSrc" : "img/toys.jpeg",
      "item_catg" : "toys",
      "item_details":"Toys to play with"
    }
    console.log('req object is ');
    return function(req,res){
      console.log('req object is '+req);
        req.items_donate.save(function(error, item_add){
            console.log("output is "+op);
            if (error) {
              return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
            }
            return res.json({ item_add: item_add });
        });
    };
  }));*/


  return api;
};

    
