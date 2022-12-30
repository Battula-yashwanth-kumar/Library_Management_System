const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    name:String,
    reg:String,
    email:String,
    password:String,
    dob:String,
    dept:String,
    gender:String
    
});
module.exports=mongoose.model("admins",adminSchema);