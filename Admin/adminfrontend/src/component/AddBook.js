import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook=()=>{
    const[title,setTitle]=useState("");
    const[author, setAuthor]=useState("");
    const[edition, setEdition]=useState("");
    const[copies,setCopies]=useState("");
    const[genre, setGenre]=useState("");
    const[shelf, setShelf]=useState("");
    const[rack, setRack]=useState("");
    const navigate=useNavigate();
    const addbook=async(e)=>{
        e.preventDefault();
        const adminid=JSON.parse(localStorage.getItem('Admin'))._id;
        let result=await fetch("http://localhost:5001/addbook",{
            method:'post',
        body:JSON.stringify({title,author,edition,copies,genre,shelf,rack,adminid}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
   if(result){
    navigate('/');
   }
    
    }
    
    return(
        <div className="Addbook">
        <form onSubmit={addbook}>
            <div className="Addbook1">
                <h3>Add Book</h3>
                
                   <input type="text" className="addbookinputs" placeholder="Enter the Book Title " value={title} onChange={(e)=>{
                    setTitle(e.target.value)}} required/>
                   <input type="text"  className="addbookinputs" placeholder="Enter the Author Name" value={author}  onChange={(e)=>{
                    setAuthor(e.target.value)}} required/>
                   <input type="text" className="addbookinputs" placeholder="Enter the Edition " value={edition} onChange={(e)=>{
                     setEdition(e.target.value)
                   }} required/>
                    <input type="text"  className="addbookinputs" placeholder="Enter the No Of Copies" value={copies}  onChange={(e)=>{
                        setCopies(e.target.value)}} required/>
                    <input type="text"  className="addbookinputs" placeholder="Enter the Genre" value={genre} onChange={(e)=>{
                        setGenre(e.target.value)}} required/>
                    <input type="text"  className="addbookinputs" placeholder="Enter the Shelf No" value={shelf} onChange={(e)=>{
                        setShelf(e.target.value)
                    }} required/>
                    <input type="text" className="addbookinputs" placeholder="Enter the Rack No" value={rack} onChange={(e)=>{
                        setRack(e.target.value)
                    }} required />
                     <div>
                    <button id="addbtn" type="submit">ADD Book</button>
                </div>
                
                </div>
               

            

                </form>
        
        </div>
    )
}
export default AddBook;