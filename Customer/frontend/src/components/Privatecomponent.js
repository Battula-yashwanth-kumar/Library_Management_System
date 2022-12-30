import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
const Privatecomponent=()=>{
    const auth =localStorage.getItem('User');
    return auth?<Outlet />:<Navigate to ="/Signup" />
}
export default Privatecomponent; 