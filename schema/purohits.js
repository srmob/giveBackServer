var mongoose = require('mongoose');


var purohitBaseSchema = {
    name : {type : String},
    age : {type : Number},
    experience : {type : String},
    speciality : [{type : String}]
};

module.exports = new mongoose.Schema(purohitBaseSchema);
module.exports.purohitBaseSchema = purohitBaseSchema;


/*var eventBaseSchema = {
    _id: { type: String },
    name : {type : String},
    date : {type : String},
    duration : {type : String},
    purohits : [{type : String}]
};

module.exports = new mongoose.Schema(eventBaseSchema);
module.exports.eventBaseSchema = eventBaseSchema;*/
