import React from "react";
import { Link } from "react-router-dom";

const Home =()=>{
    const id=JSON.parse(localStorage.getItem('Admin'))._id;
    return(
        < div className="container1">
    
           <p id="para"><b>Autograph Library is  the indian's Largest online Library Service Provider </b></p> 
        
    
    <div id="adoffer">
        <p>What We Offer</p>
    </div>
    <section>
        <ul>
        <li id="adprofile">
           <Link to={"/Profile/"+id}> <img src="https://png.pngitem.com/pimgs/s/130-1303196_medical-id-theft-icon-id-card-png-transparent.png" alt="Error in loading" /> </Link>
            <figcaption>Profile</figcaption>
        </li>
       
        <li id="adreturn">
           <Link to="/Return" ><img src="https://cdn-icons-png.flaticon.com/512/1245/1245520.png" alt="Error in loading" /></Link>
            <figcaption>Return</figcaption>
        </li>
        <li id="adsearchb">
            <Link to="/Search" >  <img src="https://www.kindpng.com/picc/m/222-2225603_document-search-icon-hd-png-download.png" alt="Error in loading" /> </Link>
            <figcaption>Search</figcaption>
    </li>
        <li  id="issue">
            <Link to="/Issue" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEIgpfiNFR_wm51RZkybQv1KjRmpaXLUhc9-M91o9fx6g3Hg9w8Q5Po9b9AVa2jmkZqo&usqp=CAU" alt="Error in loading" /> </Link>
            <figcaption>Issue Book</figcaption>
        </li>
        <li id="add">
            <Link to="/AddBook" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEa_-6ZNWZu3yiNaIEeLQVDHSmGpKX4xHHMA&usqp=CAU" alt="Error in loading" /></Link>
            <figcaption>Add Book</figcaption>
       </li>
       <li id="addadmin">
         <Link to="/Addadmin" ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/feedback-5029287-4181776.png" alt="Error in loading" /></Link>
        <figcaption>Add Admin</figcaption>
       </li>
       <li id="customer">
          <Link to="/Customerdetails" ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/feedback-5029287-4181776.png" alt="Error in loading" /></Link>
        <figcaption>Customer Details</figcaption>
       </li>
       <li id="feedback">
        <Link to="/Feedback" ><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/feedback-5029287-4181776.png" alt="Error in loading" /></Link>
        <figcaption>Feedback</figcaption>
       </li>
      
        </ul>
    </section>
    </div>
    )
}
export default Home;