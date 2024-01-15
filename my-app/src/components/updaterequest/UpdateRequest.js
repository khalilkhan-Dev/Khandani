import React from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import UpdateRequestCard from './UpdateRequestCard'
import profile from '../images/profile.png'
import AdminUpdateRequest from './AdminUpdateRequest'

const UpdateRequest = () => {
  const admindata={
    name:"james",
    profile:profile,
    contact:"+9293838 237273",
    gender:"male",
    work:"work",
    university:"kfueit"
  }
  return (
    <>
     <div className=" d-flex" >
    <div  style={{width:"75%",borderRadius:"10px" ,height:"735px",backgroundColor:"#161617"}}>

        <div className="row">
          <Header/>
          <h2 className='header-title ms-3'>Update Request</h2>
          <div className="row">
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
            <UpdateRequestCard profile={profile} />
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
        </div>
        </div>
    <div className='mx-auto' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          <h4>Update Request</h4>
          <AdminUpdateRequest {...admindata}/>
    </div>
    </div>
    </>
  )
}

export default UpdateRequest