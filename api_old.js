var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

  api.get('/orgs_old', wagner.invoke(function(org) {
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
  }));

  api.put('/items_donate',wagner.invoke(function(items_donate){
    var item_add = {
        "name" : "Ganesh"/*,
      "contact" : "9821123222",
      "email" : "gan@gana.com",
      "item_imgSrc" : "img/toys.jpeg",
      "item_catg" : "toys",
      "item_details":"Toys to play with"*/
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
  }));

/*api.get('/purohits', wagner.invoke(function(purohits) {
    return function(req, res) {
      purohits.find({}, function(error, purohits) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!purohits) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ allPandits: purohits });
      });
    };
  }));
    
  api.get('/purohits/id/:id', wagner.invoke(function(purohits) {
    return function(req, res) {
        console.log('req id'+req.params.id);
      purohits.findById(req.params.id).
        exec(function(error, purohit) {
          if (error) {
            return res.
              status(status.INTERNAL_SERVER_ERROR).
              json({ error: error.toString() });
          }
          console.log(' individual data is '+purohit);
          res.json(purohit);
        });
    };
  }));
    
    api.get('/events', wagner.invoke(function(events) {
        return function(req, res) {
          events.find({}, function(error, data) {
            if (error) {
              return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
            }
            if (!data) {
              return res.
                status(status.NOT_FOUND).
                json({ error: 'Not found' });
            }
              //console.log('event data is '+data);
            res.json({ event: data });
          });
        };
    }));
    
    api.get('/events/id/:id', wagner.invoke(function(events) {
    return function(req, res) {
        console.log('req event id'+req.params.id);
        events.findById(req.params.id).
            exec(function(error, event) {
              if (error) {
                return res.
                  status(status.INTERNAL_SERVER_ERROR).
                  json({ error: error.toString() });
              }
              console.log(' individual event detail is '+event);
              res.json(event);
            });
        };
    }));*/
  return api;
};
