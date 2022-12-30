import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile=()=>{
  
const [name, setName]=useState("");
const [reg, setReg]=useState("");
const [email, setEmail]=useState("");
const [dept, setDept]=useState("");
const [gender, setGender]=useState("");
const [dob,setDob]=useState("");

const params=useParams();
const navigate=useNavigate();
useEffect(()=>{
    getuserdetails();
},[]);
const  getuserdetails = async () => {
    let result = await fetch(`http://localhost:5001/updatedet/${params.id}`);
    result = await result.json();
    setName(result.name);
    setReg(result.reg);
    setEmail(result.email);
    setDept(result.dept);
    setGender(result.gender);
    setDob(result.dob);
    
   
  };
  const updateprofile = async () => {
    
    let result = await fetch(`http://localhost:5001/update/${params.id}`, 
    {
      method: "put",
      body: JSON.stringify({
        name,
        reg,
        email,
        dept,
        gender,
        dob
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
 



   return(
    <div className="profilepage">
       <div className="profile_pic" >
                    <img src="https://www.pngitem.com/pimgs/m/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png" alt="Error in loading" id="photo"/>
                    <input type="file" id="file"   />
                    <label htmlFor="file" id="uploadBtn">Choose Photo</label>
                </div>
        <div className="profile_details">
          
            <div>
              <label htmlFor="proname" id="proname">
                Full Name :
              </label>
              <input
                type="text"
                id="proname"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <label htmlFor="proregs" id="proregs1">
                Registration No :
              </label>
              <input
                type="text"
                id="proregs"
                value={reg}
                onChange={(e) => {
                  setReg(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="proemail" id="proemail1" >
                Email ID :
              </label>
              <input
                type="email"
                id="proemail"
                value={email}
              />
              <label htmlFor="pronumber"  id="pronumber1">
                Department
              </label>
              <input
                type="text"
                id="pronumber"
                value={dept}
                onChange={(e) => {
                  setDept(e.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="progender" id="progender1">
                Gender :
              </label>
              <input
                type="text"
                id="progender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value)
                }}
              />
              <label htmlFor="prodob"  id="prodob1">
                DOB :
              </label>
              <input
                type="text"
                id="prodob"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value)
                }}
              />
            </div>
            <div>
              <button id="save"  onClick={updateprofile}>
                Update Profile
              </button>
            </div>
        
        </div>

    </div>
    )
}
export default Profile;