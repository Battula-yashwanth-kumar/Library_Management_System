const mongoose=require("mongoose");
const FeedbackSchema= new mongoose.Schema({
    name:String,
    email:String,
    text:String
});
module.exports=mongoose.model("Feedback",FeedbackSchema);