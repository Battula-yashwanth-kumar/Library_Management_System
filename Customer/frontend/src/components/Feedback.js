import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feedback=()=>{
    const[name,setName]=useState("");
    const[email, setEmail]=useState("");
    const[text,setText]=useState("");
    const navigation = useNavigate();

    const feedbackhandle= async()=>{
let result=await fetch('http://localhost:5000/feedback',{
    method:'post',
    body:JSON.stringify({name,email,text}),
    headers:{
        'Content-Type':'application/json'
    },
});
result=await result.json();
console.warn(result);
if(result){
    navigation('/');
}
    }
    return(
        <div className="feedbackpage1">
        <div className="FeedbackPage">
            <h2 className="feedbackinput">Feedback </h2>
            <input type="text" className="feedbackinput"  placeholder ="Enter your Name   " value={name} onChange={(e)=>{
                setName(e.target.value)

            }}/>
            <input type={'text'} className="feedbackinput" placeholder="Enter your Email ID " value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <textarea className="feedbackinput feedbacktext" placeholder="Enter your Feedback here MAx of 1500 characters" value={text} onChange={(e)=>{
                setText(e.target.value)
            }} ></textarea>
            <div className="feedbackbtn">
            <button className="feedbackbtntext" onClick={feedbackhandle}> Submit</button>
        </div>
        </div>
        </div>
    )
}
export default Feedback;