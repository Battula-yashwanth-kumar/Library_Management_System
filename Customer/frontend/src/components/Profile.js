import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setphone] = useState("");
  const [branch, setBranch] = useState("");
  const [photo, setPhoto]=useState("https://www.pngitem.com/pimgs/m/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png");
  const navigate = useNavigate();
  const params=useParams();
  useEffect(()=>{
    getuserdetails();
    
  },[]);
  const  getuserdetails = async () => {
    let result = await fetch(`http://localhost:5000/updatedet/${params.id}`);
    result = await result.json();
    setName(result.name);
    setReg(result.reg);
    setEmail(result.email);
    setCourse(result.course);
    setGender(result.gender);
    setDob(result.dob);
    setphone(result.phone);
    setBranch(result.branch);
   
  };
  const updateprofile = async () => {
    
    let result = await fetch(`http://localhost:5000/update/${params.id}`, 
    {
      method: "put",
      body: JSON.stringify({
        name,
        reg,
        email,
        course,
        gender,
        dob,
        phone,
        branch,
        photo
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
 

  return (
    <div className="profilepage">
       <div className="profile_pic" >
                    <img src={photo} alt="Error in loading" id="photo"/>
                    <input type="file" id="file"   onChange={(e) => {
                  setPhoto(e.target.value) 
                }} />
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
                Course
              </label>
              <input
                type="text"
                id="pronumber"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value)
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
              <label htmlFor="proadm" id="proadm1">
                Phone Number:
              </label>
              <input
                type="text"
                id="proadm"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value)
                }}
              />
              <label htmlFor="pronat" id="pronat1">
                Branch :
              </label>
              <input
                type="text"
                id="pronat"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value)
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
  );
};
export default Profile;
