var mongoose = require('mongoose');

module.exports = function(wagner) {
   mongoose.connect('mongodb://localhost:27017/giveback');
    //mongoose.connect('mongodb://admin:admin@ds017688.mlab.com:17688/giveback');
    console.log('connected to giveback databases...')

    wagner.factory('db', function() {
      return mongoose;
    });
    
/*  var Category =
    mongoose.model('Category', require('./category'), 'categories');*/

  wagner.factory('Category', function() {
    return Category;
  });
    
    var allPurohits =
        mongoose.model('purohits', require('./schema/purohits'), 'purohit');

    wagner.factory('purohits', function() {
        return allPurohits;
    });
    
    var allEvents =
        mongoose.model('events', require('./schema/events'), 'event');

    wagner.factory('events', function() {
        return allEvents;
    });
    
    var allOrgs = mongoose.model('org',require('./schema/org_schema'),'org');

    wagner.factory('org',function () {
      console.log('models factory invoked')
      return allOrgs;
    });

    var allItemsNeed = mongoose.model('items_need',require('./schema/item_schema'),'items_need');

    wagner.factory('items_need',function () {
      console.log('models items_need factory invoked')
      return allItemsNeed;
    });
    
    var userItemAdd = mongoose.model('items_donate',require('./schema/user_donate_schema'),'items_donate');

    wagner.factory('items_donate',function () {
      console.log('models items_donate factory invoked')
      return userItemAdd;
    });

  return {
   /* Category: Category,*/
    purohits: allPurohits,
    /*events : allEvents*/
    orgs : allOrgs,
    items_need: allItemsNeed,
    items_donate : userItemAdd
  };
};
