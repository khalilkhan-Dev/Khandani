import React from 'react'
import './Admin.css'
import profile from '../images/adminprofile.png'
import profileDropdown from '../images/profileDropdown.png'

const AdminCard = () => {
  return (
    <>
        <div className="col-md-4">
            <div className="admin-card d-flex justify-content-between" >
            
            <div className="bio d-flex ">
                <img src={profile} alt="" />
                <div className='my-auto ms-2'>
                <p>AdminName</p>
                <p>Emial:james@gmail.com</p>
                </div>
            </div>
            <div class="dropdown  text-end " >
        <button className='admindropdown mt-1 me-1' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileDropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="">Delete</a></li>
        

          </ul>
     </div>

            </div>
        </div>
    </>
  )
}

export default AdminCard