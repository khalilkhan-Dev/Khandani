import React from 'react'
import './Admin.css'
import profile from '../images/adminprofile.png'
import profileDropdown from '../images/profileDropdown.png'

const AdminCard = ({Link1,Link2,Link3,Linkname1,Linkname2,Linkname3,display}) => {
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
            <div class="dropdown  text-end " style={{display}}>
        <button className='admindropdown mt-1 me-1' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileDropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href={Link1}>{Linkname1}</a></li>
            <li><a class="dropdown-item" href={Link2}>{Linkname2}</a></li>
            <li><a class="dropdown-item" href={Link3}>{Linkname3}</a></li>

          </ul>
     </div>

            </div>
        </div>
    </>
  )
}

export default AdminCard