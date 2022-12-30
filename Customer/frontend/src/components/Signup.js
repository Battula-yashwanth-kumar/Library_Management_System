import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
 

  const collectionData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, reg, course, branch, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      localStorage.setItem("User", JSON.stringify(result));
      nav("/");
    }
  };
  return (
    <div className="signup">
      <h1>Register</h1>
      <form onSubmit={collectionData}>
        <input
          className="inputBox"
          type={"text"}
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter your Full Name"
          required
        />
        
        <input
          className="inputBox"
          type={"text"}
          value={reg}
          onChange={(e) => setReg(e.target.value)}
          placeholder="enter registration no"
          required="required"
        />
        <input
          className="inputBox"
          type={"text"}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="enter course name"
          required="required"
        />
        <input
          className="inputBox"
          type={"text"}
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          placeholder="enter Branch name"
          required="required"
        />
        <input
          className="inputBox"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your MAIL ID"
          required="required"
        />
        <input
          className="inputBox"
          id="inpassword"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
          required="required"
        />
        <button className="appButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};
export default Signup;
