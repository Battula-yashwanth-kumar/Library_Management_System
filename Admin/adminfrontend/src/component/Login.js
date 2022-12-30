import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const [email, setEmail]=React.useState("");
    const [password, setPassword]=React.useState("");
    const navigate =useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem("Admin");
        if(auth){
            navigate('/');
        }
    },[]);
    const handleLogin=async()=>{
        let result=await fetch('http://localhost:5001/login',{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("Admin",JSON.stringify(result));
            navigate('/');
        }
        else{
            alert("please enter correct details");
        }
    }
    return(
        <div className='signup'>
            <h1>Login</h1>
        <input className="inputBox" type={'email'} placeholder='Enter your Mail ID' onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input className="inputBox" type={'password'} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button onClick={handleLogin}  className="appButton" type="button">Login</button>
        </div>
    )
}
export default Login;