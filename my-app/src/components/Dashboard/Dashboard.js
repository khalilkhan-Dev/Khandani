import React,{ useEffect, useState} from 'react'
import Sidebar from '../sidebar/Sidebar';
import Users from '../users/Users';
import UserVerifications from '../userVerifications/UserVerifications';
import UpdateRequest from '../updaterequest/UpdateRequest';
import BlockUser from '../blockuser/BlockUser';
import UserMembership from '../usermembership/UserMembership';
import Adminpages from '../addAdmin/Adminpages';
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import OtherDocuments from '../reuseable components/OtherDocuments';
import Login from '../login/Login';
import CreateAdmin from '../addAdmin/CreateAdmin';

const Dashboard = () => {

// for screen adjustment
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
     <div className="container-fluid">
      <div className="row d-flex justify-content-around p-2" style={{height:`${height}px`}} >
        <Router>
          <div className="p-0 m-0" style={{width:"20%"}}>
            <Sidebar/>
            </div>
            <div className="m-0 p-0 text-white " style={{width:"79%", borderRadius:"10px"}}>
            <Routes>
            <Route path='/Users' element={<Users/>} />
            <Route path='/UsersVerifications' element={<UserVerifications/>} />
            <Route path='/UserMembership' element={<UserMembership/>} />
            <Route path='/UpdateRequest' element={<UpdateRequest/>} />
            <Route path='/BlockUser' element={<BlockUser/>} />
            <Route path='/AddAdmin' element={<Adminpages/>} />
            <Route  path='/UserBio'  element={<OtherDocuments/>} /> 
            <Route path='/createadmin' element={<CreateAdmin/>}/>
            </Routes>
              </div>
              </Router>
              </div>
              </div>
    </>
  )
}

export default Dashboard