import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";


const Issue=()=>{
    const [name, setName] = useState("");
    const [reg, setReg] = useState("");
    const [phone, setPhone] = useState("");
    const [bookid, setBookid]=useState("");
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [edition, setEdition]=useState("");
    const [issuedate ,setIssuedate]=useState("");
    const [returndate, setReturndate] =useState("");
    const Navigate=useNavigate();

    const searchhandle=async(event)=>{
        let key=event.target.value;
        
        if(key){
            let result=await fetch(`http://localhost:5001/issue/${key}`);
            
            result=await result.json();
            if(result){   
            setName(result.name);
            setReg(result.reg);
            setPhone(result.phone);
            setTitle(result.title);
            setBookid(result._id);
            setAuthor(result.author);
            setEdition(result.edition);
            }
    }
}
const accepthandle=async(e)=>{
    e.preventDefault();
    let result1 =await fetch('http://localhost:5001/issuedet',
    {
        method:'post',
        body:JSON.stringify({name,reg, phone, bookid,title,author,edition,issuedate,returndate}),
        headers:{
            'Content-Type':'application/json'
        },
    });
    result1=await result1.json();
    console.log(result1);
    if(result1){
        let result = await fetch(`http://localhost:5001/issuedelete/${reg}`,{
            method:"Delete"
        });
        result= await result.json();
        if(result){
            Navigate("/");
        }
      
    }

  }
    



    return(
        <div className="yashreturn">
        <div  className='returnpage'>
            <form onSubmit={accepthandle}>
            <div className="returnsearch">
            <input type="text" id="title" placeholder="Search by Registration Number" onChange={searchhandle} />
            </div>
            <div>
            <h2>Student Details :</h2>
           Name :<input type="text" value={name}  className="returninputs" />
           Regestration:<input type="text" value={reg}  className="returninputs" />
          Phone Number: <input type="text" value={phone}  className="returninputs" />
           </div>

           <div>
            <h2>Book Details :</h2>
           BookID :<input type="text" value={bookid}  className="returninputs" />
           Title :<input type="text" value={title}  className="returninputs" />
           Author :<input type="text" value={author}  className="returninputs" />
           Edition :<input type="text" value={edition}  className="returninputs" />
          Issue Date : <input type="text"  value={issuedate} onChange={(e)=>{setIssuedate(e.target.value)}}  className="returninputs" required/>
          Return Date: <input type="text"  value={returndate} onChange={(e)=>{setReturndate(e.target.value)}}  className="returninputs" required/>
        </div>
        <div>
            <button type="submit" className="returnbtn" >ACCEPT</button>
            
        </div>
        </form>
        </div>
        </div>
    )
}

export default Issue;