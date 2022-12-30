const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:String,
    reg:String,
    email:String,
    amount:String

});
module.exports=mongoose.model("Fines",userSchema);