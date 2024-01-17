import React from 'react'
import profileDropdown from '../images/profileDropdown.png'

const UserCard = (cardData) => {
  const {profile,name,verify,id,contact,email,title,Link1,Link2,Link3,Linkname1,Linkname2,Linkname3,display,onClick} = cardData;


  return (
    <>

    <div className="col-md-3 p-0 d-flex justify-content-center" onClick={onClick} style={{cursor:"pointer"}}  >
        <div className=" m-2 card" >
          <div className='d-flex justify-content-between'>
            <p className='title'>{title}</p>
            <div class="dropdown text-end " style={{display}}>
        <button class="dropdownicon mt-1 me-2  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileDropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href={Link1}>{Linkname1}</a></li>
            <li><a class="dropdown-item" href={Link2}>{Linkname2}</a></li>
            <li><a class="dropdown-item" href={Link3}>{Linkname3}</a></li>

          </ul>
     </div>
          </div>
       
     <div className="profile-img text-center">
        <img src={profile} width={73} height={73} alt="" />
     </div>
     <div className="bio">
        <p >{name}<span className='ms-1'><img src={verify} alt="" /></span> </p>
        <p>ID: <span>{id}</span> </p>
        <p>Contcat: <span>{contact}</span> </p>
        <p>Email: <span>{email}</span> </p>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default UserCard