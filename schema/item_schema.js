var mongoose = require('mongoose');



var item_needSchema = {
    item_name : {type : String},
    item_catg : {type : String},
    item_need_count : {type : Number},
    org_name:{type:String},
    item_imgSrc:{type:String},
    item_desc:{type:String}
};

module.exports = new mongoose.Schema(item_needSchema);
module.exports.item_needSchema = item_needSchema;