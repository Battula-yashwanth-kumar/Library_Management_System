const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:String,
    reg:String,
    email:String,
    course:String,
    gender:String,
    dob:String,
    phone:String,
    branch:String,
    password:String

});
module.exports=mongoose.model("users",userSchema);