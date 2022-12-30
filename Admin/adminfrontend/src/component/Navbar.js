import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("Admin");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }
  return (
    <div className="navbar1">
      <div className="navbar3">
        <img
          src="https://i.pinimg.com/originals/06/45/72/064572dc00f2ce77686c8155eb100e55.jpg"
          alt="error"
          id="nav_ul_logo" className="navbar"
        />
       {auth? <ul className="nav_ul ">
         <li> <Link  className="navbar" to={"/"}>Home</Link></li>
         <li> <Link  className="navbar" to={"/about"}>About Us</Link></li>
         <li> <Link  className="navbar"  to={"/service"}>Service</Link></li>
         <li> <Link  className="navbar"  to={"/conatact"}>Contact Us</Link></li>
         <li>  <Link   className="navbar" onClick={logout} to={"/Login"}>
            Logout
          </Link> </li>
        
         <li> <input
            type={"search"}
            placeholder="search here"
            id="navsearch_input"  className="searchnavbar"
          /></li>
         <li> <button id="navsearch_btn"  className="searchnavbar">Search</button></li>
         <li><img
            src="https://www.pngitem.com/pimgs/m/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png"
            alt="Error"
            id="nav_ul_profile"  className="navbar"
          /> </li>
           <li>  <input type={"file"} id="file1"  className="navbar" /> </li>
          
          </ul> :

<ul className=" navbar2">
<li> <Link className="nav_ul_right navbar" to={"/Login"}>Login</Link></li>
</ul>

  }
        
        </div>
    </div>
  )
};
export default Navbar;
