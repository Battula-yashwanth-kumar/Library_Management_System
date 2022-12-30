import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Issue = () => {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [phone, setPhone] = useState("");
  const [bookid, setBookid] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getuserdetails();
    getbookdetails();
  }, []);
  const getuserdetails = async () => {
    const userId = JSON.parse(localStorage.getItem("User"))._id;
    console.warn(userId);
    let result = await fetch(`http://localhost:5000/userdetails/${userId}`);
    result = await result.json();
    setName(result.name);
    setReg(result.reg);
    setPhone(result.phone);
  };
  const getbookdetails = async () => {
    let result = await fetch(`http://localhost:5000/bookdetails/${params.id}`);
    result = await result.json();
    console.log(result);
    setTitle(result.title);
    setBookid(result._id);
    setAuthor(result.author);
    setEdition(result.edition);
  };
  const requesthandle = async () => {
    let result = await fetch("http://localhost:5000/issue", {
      method: "post",
      body: JSON.stringify({
        name,
        reg,
        phone,
        bookid,
        title,
        author,
        edition,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
  };
  return (
    <div>
      <div className="issuepage">
      <div >
        <h2>Your Details </h2>
        <input className="issuebk" type="text" value={reg} />
        <input className="issuebk" type="text" value={name} />
        <input className="issuebk" type="text" value={phone} />
      </div>
      <div>
        <h2>Book Details </h2>
        <input className="issuebk" type="text" value={title} />
        <input className="issuebk" type="text" value={bookid} />
        <input className="issuebk" type="text" value={author} />
      </div>
      <div>
        <button className="issuebtn" onClick={requesthandle}>REQUEST</button>
      </div>
    </div>
    </div>
  );
};
export default Issue;
