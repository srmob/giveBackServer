var mongoose = require('mongoose');



var user_donateSchema = {
    name : {type : String},
    contact : {type : String},
    email : {type : String},
    item_imgSrc : {type : String},
    item_catg : {type : String},
    item_details:{type:String}
};

module.exports = new mongoose.Schema(user_donateSchema);
module.exports.user_donateSchema = user_donateSchema;