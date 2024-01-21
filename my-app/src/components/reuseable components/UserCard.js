import React from 'react'
import profileDropdown from '../images/profileDropdown.png'

const UserCard = (cardData) => {
  const {image,firstName,verify,email,id,phone,active,displaytitle,title,handleclick1,handleclick2,handleclick3,Linkname1,Linkname2,Linkname3,display,dropdowndisplay1,dropdowndisplay2,onClick} = cardData;


  return (
    <>

    <div className="col-md-4 mt-4 d-flex justify-content-center" onClick={onClick} style={{cursor:"pointer"}}  >
        <div className="card"  >
          <div className='d-flex justify-content-between'>
            <p className='title mt-3' style={displaytitle}>{title}</p>
            <div class="dropdown text-end " style={{display}}>
        <button class="dropdownicon mt-1 me-2  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileDropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><button className='dropdown-item' onClick={handleclick1}>{Linkname1}</button></li>
            <li style={dropdowndisplay1 } ><button onClick={handleclick2} className='dropdown-item'>{Linkname2}</button></li>
            <li style={{dropdowndisplay2}}><button onClick={handleclick3} className='dropdown-item'>{Linkname3}</button></li>

          </ul>
     </div>
          </div>
       
     <div className="profile-img text-center">
        <img src={image} width={65} height={65} className='rounded-circle' alt="" />
     </div>
     <div className="bio" >
        <p >{firstName}<span className='ms-1'><img src={verify} alt="" /></span> </p>
        <p>ID:<span>{id}</span> </p>
        <p>Contcat: <span>{phone}</span> </p>
        <p>Status: <span>{active}</span> </p>
        {/* <p>Email: <span>{email}</span> </p> */}

        </div>
        </div>
    </div>
    
    </>
  )
}

export default UserCard