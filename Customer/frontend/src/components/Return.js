import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Return = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getbooksdetails();
  }, []);

  const getbooksdetails = async () => {
    const Registration = JSON.parse(localStorage.getItem("User")).reg;
    console.log(Registration);
    console.warn(Registration);
    let result1 = await fetch(
      `http://localhost:5000/returndetails/${Registration}`
    );
    result1 = await result1.json();
    if (result1) {
      setBooks(result1);
   
    }
    console.log(result1);
  };

  const returnhandle=async(name,reg, phone, bookid,title,author,edition,issuedate,returndate)=>{
    console.log(name,reg, phone, bookid,title,author,edition,issuedate,returndate);
    let result1 = await fetch('http://localhost:5000/give',
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
      navigate("/");
    }
  }

  return (
    <div className="returnpage">
      <div>
        <ul>
          <li className="return1">Title</li>
          <li className="return1">Author</li>
          <li className="return1">Edition</li>
          <li className="return1">operations</li>
        </ul>

        {books.map((item, index) => (
            <ul>
              <li key="title">{item.title}</li>
              <li key="author">{item.author}</li>
              <li key="edition">{item.edition}</li>
              <li key="return">
                <button  onClick={()=>returnhandle(item.name,item.reg,item.phone,item.bookid,item.title,item.author,item.edition,item.issuedate,item.returndate)}>
                  Return
                </button>
              </li>
             
            </ul>
          
        ))}
      </div>
    </div>
  );
};
export default Return;
