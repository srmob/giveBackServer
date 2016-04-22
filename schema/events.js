var mongoose = require('mongoose');



var eventBaseSchema = {
    name : {type : String},
    date : {type : String},
    duration : {type : String},
    purohits : [{type : String}]
};

module.exports = new mongoose.Schema(eventBaseSchema);
module.exports.eventBaseSchema = eventBaseSchema;
