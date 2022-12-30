import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Search=()=>{
    const [books,setBooks]=useState([]);
    const [bookid ,setBookid]=useState('');
    const Navigate=useNavigate();
    
    const searchhandle=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`http://localhost:5001/search/${key}`);
            result=await result.json();
            if(result){
                setBooks(result);
                setBookid(result._id);
            }
            else{
               
            }
        }
    }
  
    const deletehandle=async(id)=>{
      let id1 =id
        let result = await fetch(`http://localhost:5001/searchdelete/${id1}`,{
            method:"delete"
        });
result=await result.json() ;
if(result){
    Navigate("/");
}

    };
    return(
      <div className="searchpage">
      <h3>Search Books</h3>
      <div >
        <input
          type="text"
          id="title" className="searchbar3"
          placeholder="Search by Title , Author, Edition, Genre"
          onChange={searchhandle}
        />
      </div>

      <h2>Search result</h2>
      <div className="searchmap">
        <ul>
          <li className="search-headers">Title</li>
          <li className="search-headers">Author</li>
          <li className="search-headers">Edition</li>
          <li className="search-headers">Copies Available</li>
          <li className="search-headers">Shelf No</li>
          <li className="search-headers">Rack No</li>
          <li className="search-headers">operations</li>
        </ul>
        {books.map((item, index) => (
          <ul>
            <li key="title">{item.title}</li>
            <li key="author">
              {item.author}
            </li>
            <li key="edition">
            {item.edition}
            </li>
            <li key="copies">
             {item.copies}
            </li>
            <li key="shelf">
             {item.shelf}
            </li>
            <li key="rack">
              {item.rack}
            </li>
            <li key="delete">
        
                <button onClick={()=>deletehandle(item._id)}>Delete</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
         
                

    )
}
export default Search;