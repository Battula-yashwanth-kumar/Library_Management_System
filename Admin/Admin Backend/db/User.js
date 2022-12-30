const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:String,
    reg:String,
    email:String,
    course:String,
    gender:String,
    dob:String,
    aoy:String,
    branch:String,
    photo:String,
    password:String

});
module.exports=mongoose.model("users",userSchema);