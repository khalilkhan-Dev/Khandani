import React from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import profile from '../images/profile.png'
import adminVerified from '../images/adminVerified.png'
import SuperAdmin from '../reuseable components/SuperAdmin'
import UserCard from '../reuseable components/UserCard'

const UserVerifications = () => {
  const data={
    profile: profile,
    name:"khalil",
    id:"0000 0000 0000",
    contact:"+92 399 3939838",
    mail:"james@gmail.com",
    Linkname1:"verify",
    Linkname2:"reject",
    title:"Basic",
  }

  const SuperAdminData = {
    profile:profile,
    Verified: "Verified",
    verifiedLogo:adminVerified,
    name:"james",
    id:"0000 0000 0000",
    email:"james@gmail.com",
    contact:"+92307662172",
    religion:"non-muslim",
    country:"America",
    city:"city",
    study:"Masters",
    job:"Engineer",
    workplace:"company",
    dob:"1 Srpt,2000",
    gender:"male",
    height:"5.9 FT",
  }

  const headerDropdown = {
    headerLink1:"All",
    headerLink2:"Basics",
    headerLink3:"Gold",
    headerLink4:"Vip"
  }
  return (
    <>
     <div className=" d-flex" >
    <div  style={{width:"75%",borderRadius:"10px" ,height:"735px",backgroundColor:"#161617"}}>
        <div className="row">
          <Header {...headerDropdown}/>
          <h2 className='header-title ms-3'>User Verifications</h2>
          <div className="row" style={{marginLeft:"1px"}}>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
            <UserCard {...data}/>
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
          {/* <h4>User Verifications</h4>l */}
          <SuperAdmin {...SuperAdminData} />
          <div className='sidebar-btn flex flex-column text-center'>
            <button className='w-75 py-2'>Reject</button>
            <button className='w-75 mt-2 py-2 '>Verify</button>
          </div>
    </div>
    </div>

    </>
  )
}

export default UserVerifications