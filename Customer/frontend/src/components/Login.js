import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Forgot from './Forgot';

const Login=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const nav = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("User");
        if(auth){
           nav('/');
        }
    },[]);

    const handleLogin=async()=>{
        console.warn(email,password);
       let result= await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        },

       });
    
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("User",JSON.stringify(result));
            nav("/");
        }
        else{
            alert("please enter correct details");
        }
    }
    return(
        <div className='login'>
            <h1>Login</h1>
        <input className="inputBox1" type={'email'} placeholder='Enter your Mail ID' onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input className="inputBox1" type={'password'} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <Link to="/Forgot" id="inputBox2" >forgot password ?</Link>
        <button onClick={handleLogin}  className="appButton inputBox2" type="button">Login</button>
        </div>
    )
}
export default Login;