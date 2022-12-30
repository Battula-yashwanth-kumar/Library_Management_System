import React, { useEffect, useState } from "react";

const Customerdetails=()=>{
   
    const [customer, setCustomer]=useState([]);
    useEffect(()=>{
      getcustomer();
    },[]);
    const  getcustomer=async()=>{
        let result =await fetch('http://localhost:5001/customer');
        result=await result.json();
        setCustomer(result);
        console.warn("Customer Details",result);
    }
    
    return(
        <div className="customer-list">
           <h2>Customer Details :</h2> 
           <ul >
         
            <li className="customer-headers">Full Name</li>
            <li className="customer-headers" >Regestration No</li>
            <li className="customer-headers">Email ID</li>
            <li className="customer-headers">Course</li>
            <li className="customer-headers">Gender</li>
            <li className="customer-headers">Date Of Birth</li>
           
            <li className="customer-headers"> Branch</li>
           </ul>
           {
            customer.map((item,index)=>
             <ul >
               
                <li >{item.name}</li>
                <li >{item.reg}</li>
                <li >{item.email}</li>
                <li >{item.course}</li>
                <li>{item.gender}</li>
                <li >{item.dob}</li>
               
                <li >{item.branch}</li>
             </ul>
          ) }
        </div>
    )
}
export default Customerdetails;