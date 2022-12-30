import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Addadmin=()=>{
const [name, setName]=useState("");
const [reg, setReg]=useState("");
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const navigate=useNavigate();
const addadmin=async()=>{
let result=await fetch('http://localhost:5001/register',{
   method:'post',
   body:JSON.stringify({name,reg,email,password}),
   headers:{
    'Content-Type':'application/json'
   },
});
result= await result.json();
console.warn(result);
if(result){
    navigate('/');
}
}
    return(
        <div className="yashadmin">
        <div className="addadminpage">
        <section>
            <div className="addadmin">
                <h3>Add Admin</h3>
                
                   
                    <input type="text" className="Admininputs" placeholder="Enter the Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
               
                    <input type="text"className="Admininputs" placeholder="Enter the Registration Numbar" value={reg} onChange={(e)=>{setReg(e.target.value)}} />
               
                    <input type="text" className="Admininputs" placeholder="Enter the Email ID" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              
                    <input type="password" className="Admininputs" placeholder="Enter the Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
               
                <div>
                    <button  id="adminbtn" onClick={addadmin}>ADD</button>
                </div>
                

            </div>
        </section>
        </div>
        </div>
    )
}
export default Addadmin;