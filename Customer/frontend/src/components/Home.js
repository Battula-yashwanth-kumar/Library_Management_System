import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    const id=JSON.parse(localStorage.getItem('User'))._id;
    return(
    <div className="container1"> 
        <p id="para"><b>Autograph Library is  the indian's Largest online Library Service Provider </b></p>
        <div id="offer">
        <p>What We Offer</p>
    </div>
    <div>
        <ul>
        <li id="profile">
         <Link to={"/Profile/"+id} > <img src="https://png.pngitem.com/pimgs/s/130-1303196_medical-id-theft-icon-id-card-png-transparent.png" alt="Error in loading" /></Link> 
            <figcaption>Profile</figcaption>
        </li>
       
        <li id="return">
            <Link to="/Return" > <img src="https://cdn-icons-png.flaticon.com/512/1245/1245520.png" alt="Error in loading" /> </Link>
            <figcaption>Return</figcaption>
        </li>
        <li id="searchb">
            <Link to="/Search" >  <img src="https://www.kindpng.com/picc/m/222-2225603_document-search-icon-hd-png-download.png" alt="Error in loading" /></Link>
            <figcaption>Search</figcaption>
    </li>
        <li  id="study">
            <Link to="/Feedback" > <img src="https://www.cce.upes.ac.in/images/key-highlight/Robust-Learning-Management.png" alt="Error in loading" /></Link>
            <figcaption>Feedback</figcaption>
        </li>
    
        <li id="payments">
            <Link to="/Payment" > <img src="https://t3.ftcdn.net/jpg/05/32/66/82/360_F_532668212_FK5r1UmmnyaBU4CFzMjW7s6ybRQZtAK1.jpg" alt="Error in loading" /></Link>
            <figcaption>payments</figcaption>
       </li>
        </ul>
        </div>
    </div>
    )
}
export default Home;