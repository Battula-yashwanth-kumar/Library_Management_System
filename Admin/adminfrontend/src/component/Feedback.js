import React, { useEffect, useState } from 'react'

const Feedback=()=>{
    const[feedbacks ,setFeedback]=useState([]);
    useEffect(()=>{
        getFeedbacks();
    },[]);
    const getFeedbacks=async()=>{
        let result =await fetch("http://localhost:5001/feedback");
        result=await result.json();
        setFeedback(result);
    }
    console.warn("Feedback",feedbacks);
    return(
        <div className='feedback-list'>
            <h2>Feedback Reports</h2>
            {
              feedbacks.map((item,index)=>
            <ul>
                <li className='list-bolder'><b>S.No</b> <span id="feedindex">: {index+1}</span></li>
                <li  className='list-bolder' ><b>Name</b> <span id="feedname">: {item.name}</span></li>
                <li  className='list-bolder'><b>Email</b> <span  id="feedmail">: {item.email}</span></li>
                <li  className='list-bolder'><b>Feedback</b> <span id="feedtext">: {item.text}</span></li>
                <hr />
            </ul>
              )
}
        </div>
    )
}
export default Feedback;