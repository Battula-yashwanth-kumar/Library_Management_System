import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Return=()=>{
    const [name, setName] = useState("");
    const [reg, setReg] = useState("");
    const [phone, setPhone] = useState("");
    const [bookid, setBookid]=useState("");
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [edition, setEdition]=useState("");
    const [issuedate ,setIssuedate]=useState("");
    const [returndate, setReturndate] =useState("");
    const navigate =useNavigate();
    const searchhandle=async(event)=>{
        let key=event.target.value;
        console.warn(key);
        if(key){
            let result=await fetch(`http://localhost:5001/returnlist/${key}`);
            console.warn(result);
            result=await result.json();
            
                if(result){   
                    setName(result.name);
                    setReg(result.reg);
                    setPhone(result.phone);
                    setTitle(result.title);
                    setBookid(result._id);
                    setAuthor(result.author);
                    setEdition(result.edition);
                    setIssuedate(result.issuedate);
                    setReturndate(result.returndate);
                    }
            
        }
    }
    const returnhandle=async()=>{
       
        let result1 = await fetch(`http://localhost:5001/returned/${reg}`,{
            method:"Delete"
        });
       
        result1= await result1.json();
        if(result1){
            navigate("/");
        }
    }
    return(
<div className="yashreturn">
<div className='returnpage'>
    
    <div className="returnsearch">
                <input type="text" id="title" placeholder="Search by Registration Number" onChange={searchhandle} />
                </div>
    
                <div className="returnstudentdetails">
            <h2>Student Details :</h2>
          Name: <input type="text" className="returninputs" value={name} />
           Regestration no:<input type="text"    value={reg} className="returninputs" />
           Phone Number:<input type="text" value={phone} className="returninputs" />
           </div>

           <div className="returnbookdetails">
            <h2>Book Details :</h2>
           BookID:<input type="text" value={bookid} className="returninputs" />
          Title: <input type="text" value={title} className="returninputs" />
          Author: <input type="text" value={author} className="returninputs" />
           Edition:<input type="text" value={edition} className="returninputs" />
          Issue Date: <input type="text"  value={issuedate} className="returninputs" />
          Return Date: <input type="text"  value={returndate} className="returninputs"/>

        </div> 
        <div >
            <button className="returnbtn"
            onClick={returnhandle}>Accept</button>
            </div>  
            
          

        
 
        </div>
</div>
    )
}
export default Return;