const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const connectionSchema = Schema({
    name : { type : String , required : true },
    value : { type : Number , required : true },
    slug : { type : String , required : true},
} , { timestamps : true , toJson : { virtuals : true } });



module.exports = mongoose.model('Connection' , connectionSchema);