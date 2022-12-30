const express = require("express");
require("./db/config");
const User = require("./db/User");
const Book = require("./db/Book");
const Issue = require("./db/Issue");
const Return = require("./db/Return");
const app = express();
const Feedback = require("./db/Feedback");
const cors = require("cors");
const Booksissued = require("./db/Booksissued");
const Fines=require("./db/Fines");
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found 1" });
    }
  } else {
    resp.send({ result: "No User Found 2" });
  }
});
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
app.put("/update/:id", async (req, resp) => {
  let result1 = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result1);
});
app.get("/updatedet/:id", async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
});
app.get("/book", async (req, resp) => {
  let result = await Book.find();
  console.log(result);
  resp.send(result);
});
app.post("/feedback", async (req, resp) => {
  let feedback = new Feedback(req.body);
  let result = await feedback.save();
  resp.send(result);
});
//Issue page
app.get("/userdetails/:id", async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
});
app.get("/bookdetails/:id", async (req, resp) => {
  let result = await Book.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no record found" });
  }
});
app.post("/issue", async (req, resp) => {
  let issue = new Issue(req.body);
  let result = await issue.save();
  result = result.toObject();
  resp.send(result);
});
//return page
app.get("/returndetails/:reg", async (req, resp) => {
  const result = await Booksissued.find({ reg: req.params.reg });
  if (result) {
    console.log(result);
    resp.send(result);
  } else {
    resp.send({ result: "No record is Found" });
  }
});
app.post("/give", async (req, resp) => {
  console.log(req.body);
  if (req.body) {
    let hello = new Return(req.body);
    console.log(req.body);
    result = await hello.save();

    resp.send(result);
  }
});
app.get("/forgot/:email", async (req, resp) => {
  const result = await User.find({ email: req.params.email });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record is Found" });
  }
});
app.post("/fine", async (req,resp)=>{
  let fine = new Fines(req.body);
  let result = await fine.save();
  result = result.toObject();
  resp.send(result);
});

app.listen(5000);
