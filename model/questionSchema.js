const mongoose = require("mongoose");
const {Schema} = mongoose;

/**Question model */

const questionModel = new Schema({
    questions:{type:Array,default:[]},
    answer:{type:Array, default:[]},
    createdAt:{type:Date, default:Date.now}
});


module.exports = mongoose.model("Question", questionModel);

