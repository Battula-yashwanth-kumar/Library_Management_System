import React, { useState } from "react";
import axios from "axios";

const Forgot=()=>{
    const[email,setEmail]=useState("");
    const [passwor,setPassword]=useState([]);
    const forgothandle=async(email)=>{
        let result=await fetch(`http://localhost:5000/forgot/${email}`);
        result = await result.json();
        setPassword(result);
        alert("the password is " +  passwor.password);

    }
    return(
        <div className="signup">
            <input type="email" className="inputBox4"  placeholder='Enter your Mail ID' onChange={(e)=>setEmail(e.target.value)} value={email} />
            <button  className="appButton " onClick={()=>forgothandle(email)}>Submit</button>
        </div>
    )
}
export default Forgot;