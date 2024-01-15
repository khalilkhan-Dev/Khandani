import React from 'react'
import profile from '../images/adminprofile.png'

const AdminSidebar = () => {
  return (
    <>
    <div className="sidebar mt-5 text-center">
        <img src={profile} width={100} height={100} alt="" />
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-6 text-start">
            <p>Name</p>
            <p>Email</p>
            <p>Password</p>
          
          </div>
          <div className="section2 col-md-6 text-start">
            <p>james</p>
            <p>james@gmail.com</p>
            <p>1234567</p>
           
            

          </div>
        </div>
        
    </div>
    </>
  )
}

export default AdminSidebar