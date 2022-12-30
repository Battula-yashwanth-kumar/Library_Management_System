const express = require("express");
require("./db/config");
const cors = require("cors");
const Admin = require("./db/Admin");
const app = express();
const Feedback = require("./db/Feedback");
const User = require("./db/User");
const Book = require("./db/Books");
const Issue = require("./db/Issue");
const Return = require("./db/Return");
const Issuelist = require("./db/Issuelist");
const Booksissued = require("./db/Booksissued");

app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let admin = new Admin(req.body);
  let result = await admin.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let admin = await Admin.findOne(req.body).select("-password");
    if (admin) {
      resp.send(admin);
    } else {
      resp.send({ result: "No Admin Found" });
    }
  } else {
    resp.send({ result: "No Admin Found" });
  }
});
// profile page
app.put("/update/:id", async (req, resp) => {
  let result1 = await Admin.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result1);
});
app.get("/updatedet/:id", async (req, resp) => {
  let result = await Admin.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
});
app.post("/addbook", async (req, resp) => {
  let book = new Book(req.body);
  let result = await book.save();
  resp.send(result);
});
//search
app.get("/search/:key", async (req, resp) => {
  let result = await Book.find({
    $or: [
      {
        title: { $regex: req.params.key },
      },
      {
        author: { $regex: req.params.key },
      },
      {
        edition: { $regex: req.params.key },
      },
      {
        genre: { $regex: req.params.key },
      },
    ],
  });
  resp.send(result);
});
app.delete("/searchdelete/:id" ,async(req, resp)=>{
  let result= await Book.deleteOne({_id:req.params.id});
  resp.send(result);
});
app.get("/feedback", async (req, resp) => {
  let feedback = await Feedback.find();
  if (feedback.length > 0) {
    resp.send(feedback);
    console.log(feedback);
  } else {
    resp.send({ result: "No Feedbacks Found" });
  }
});
app.get("/customer", async (req, resp) => {
  let customer = await User.find();
  if (customer.length > 0) {
    resp.send(customer);
  } else {
    resp.send({ result: "No Customer is Found" });
  }
});
//Issue page
app.delete("/issuedelete/:reg", async(req,resp)=>{
  const result =await Issue.deleteOne({reg:req.params.reg});
  resp.send(result);
});
app.get("/issue/:reg", async (req, resp) => {
  const result = await Issue.findOne({ reg: req.params.reg });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record is Found" });
  }
});
app.post("/issuedet", async (req, resp) => {
  let issuelist = new Issuelist(req.body);
  issuelist = await issuelist.save();
  let booksissued = new Booksissued(req.body);
  booksissued = await booksissued.save();
  resp.send(booksissued);
});
//return page
app.delete("/returned/:reg", async (req, resp) => {
  const result = await Return.deleteOne({reg:req.params.reg });
  const result1 = await Booksissued.deleteOne({reg: req.params.reg });
  if (result) {
    resp.send(result);
  }
});
app.get("/returnlist/:reg", async (req, resp) => {
  const result = await Booksissued.findOne({ req: req.params.reg });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record is Found" });
  }
});
app.listen(5001);
