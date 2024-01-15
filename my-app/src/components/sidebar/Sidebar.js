import React, { useState, useEffect }  from 'react'
import logo from '../images/logo.png'
import usericon from '../images/usericon.png'
import usersVerification from '../images/userverification.png'
import usermembership from '../images/usermember.png'
import update from '../images/update.png'
import block from '../images/block.png'
import admin from '../images/admin.png'
import logout from '../images/logout.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [height, setHeight] = useState(window.innerHeight * 1);

    useEffect(() => {
        const handleResize = () => {
          setHeight(window.innerHeight * 1); // Adjust the multiplier as needed
        };
    
        window.addEventListener('resize', handleResize);
        
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  return (
    <>

 
<div class="Sidebar d-flex flex-column flex-shrink-0 p-3" style={{height:`${height}px`}}>
    <a href="/">
      <img src={logo} width={101} height={83} alt="" />
    </a>
    <hr/>
    <ul class="sidebar-ul nav flex-column ">
      <li class="nav-item">
        <Link to="Users" class="nav-link active "  aria-current="page">
            <img className='mx-3' src={usericon} alt="" />Users</Link>
      </li>
      <li>
        <Link to="UsersVerifications" class="nav-link ">
            <img className='mx-3' src={usersVerification} alt="" />  Users Verifications</Link>
      </li>
      <li>
        <Link to="/UserMembership" class="nav-link ">
            <img className='mx-3' src={usermembership} alt="" />User Membership</Link>
      </li>
      <li>
        <Link to="/UpdateRequest" class="nav-link ">
            <img className='mx-3' src={update} alt="" />Update Requests</Link>
      </li>
      <li>
        <Link to="/BlockUser" class="nav-link ">
            <img className='mx-3' src={block} alt="" /> Blocked User</Link>
      </li>
      <li>
        <Link to="/AddAdmin" class="nav-link ">
            <img className='mx-3' src={admin} alt="" />Add Admin</Link>
      </li>
    </ul>
    <Link className='logout nav-link  ms-3' to="/"><span><img className='mx-3' src={logout} alt="" /></span>LogOut</Link>
  </div>
  
   

  
    </>
  )
}

export default Sidebar