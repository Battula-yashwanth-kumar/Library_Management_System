const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:String,
    reg:String,
    phone:String,
    bookid:String,
    title:String,
    author:String,
    edition:String,
    returndate:String,
    issuedate:String


});
module.exports=mongoose.model("booksissued",userSchema);