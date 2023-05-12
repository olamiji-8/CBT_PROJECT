const mongoose = require("mongoose");
const {Schema} = mongoose;

const resultSchema = new Schema({
    username:{type:String},
    email:{type:String},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model("result", resultSchema);