const mongoose=require("mongoose");
const bookSchema =new mongoose.Schema({
    title:String,
    author:String,
    edition:String,
    copies:Number,
    genre:String,
    shelf:String,
    rack:String
    
});
module.exports=mongoose.model("books",bookSchema);