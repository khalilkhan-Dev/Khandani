import React from 'react'
import profileDropdown from '../images/profileDropdown.png'

const UpdateRequestCard = ({image,onClick,title,display,displaytitle}) => {
   

  return (
    <>
    <div className="col-md-4 mt-2 " onClick={onClick} style={{cursor:"pointer"}}>
        <div className="card" >
        <div className='d-flex justify-content-between'>
            <p className='title mt-3' style={displaytitle}>{title}</p>
            <div class="dropdown text-end " style={{display}}>
        <button class="dropdownicon mt-1 me-2  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileDropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="">Verify</a></li>
            <li><a class="dropdown-item" href="">Close</a></li>
            <li><a class="dropdown-item" href="">Reject</a></li>

          </ul>
     </div>
          </div>
     <div className="profile-img mt-4 text-center">
        <img src={image} width={65} height={65} className='rounded-circle' alt="" />
     </div>
     <div className="bio">
        <p>Update </p>
        <p>Name</p>
        <p>Contcat</p>
        <div className="footer  d-flex justify-content-between">
        <p>Gender</p>
        <p>+2 more</p>
        </div>
     </div>
</div>
    </div>
    </>
  )
}

export default UpdateRequestCard