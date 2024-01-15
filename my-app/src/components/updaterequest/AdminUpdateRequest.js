import React from 'react'

const AdminUpdateRequest = (props) => {
  const {name,profile,Verified,verifiedLogo,work,university,contact,gender}= props;

  return (
    <>
      
    <div className="super-admin pt- text-center">
        <img src={profile}  alt="" />
        <p>{Verified} <span><img src={verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-6 text-start">
            <p>Name</p>
            <p>Contact</p>
            <p>Gender</p>
            <p>Work</p>
            <p>university</p>
            
          </div>
          <div className="section2 col-md-6 text-start">
            <p>{name}</p>
            <p>{contact}</p>
            <p>{gender}</p>
            <p>{work}</p>
            <p>{university}</p>
            

          </div>
          <div className="otherdocuments">
          <a href="/UserBio" className='text-end'>Other documents</a>

          </div>
        </div>
        <hr />
        <div className='sidebar-btn flex flex-column text-center'>
            <button className='w-75 mt-4 py-2'>Verify</button>
            <button className='w-75 mt-4 py-2'>Close</button>
            <button className='w-75 mt-4  py-2'>Reject</button>

          </div>
    </div>
    </>
  )
}

export default AdminUpdateRequest