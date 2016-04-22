var mongoose = require('mongoose');

var orgSchema = {
    name : {type : String},
    contact : {type : String},
    city : {type : String},
    address : {type : String},
    type : {type : String},
    desc : {type : String},
    members : {type : Number},
    img_src : {type:String}
};

module.exports = new mongoose.Schema(orgSchema);
module.exports.orgSchema = orgSchema;