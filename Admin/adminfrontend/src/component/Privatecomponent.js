import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
const Privatecomponent=()=>{
    const auth =localStorage.getItem('Admin');
    return auth?<Outlet />:<Navigate to ="/Login" />
}
export default Privatecomponent; 