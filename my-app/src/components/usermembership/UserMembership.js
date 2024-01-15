import React from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import UserCard from '../reuseable components/UserCard'
import profile from '../images/profile.png'
import SuperAdminMembership from './SuperAdminMembership'
import VerifiedLogo from '../images/adminVerified.png'

const UserMembership = () => {

  const data={
    profile: profile,
    name:"James",
    id:"0000 0000 0000",
    contact:"+92 399 3939838",
    mail:"james@gmail.com",
    Linkname1:"Basic",
    Linkname2:"Gold",
    Linkname3:"VIP",
    title:"Basic",
  }
  const SuperAdmin={
    profile:profile,
    name:"james",
    Verified:"Verified",
    verifiedLogo:VerifiedLogo,
    id:"0000 0000 0000",
    email:"james@gmail.com"
  }
  return (
    <>
     <div className=" d-flex" >
    <div  style={{width:"75%",borderRadius:"10px" ,height:"735px",backgroundColor:"#161617"}}>

        <div className="row">
          <Header/>
          <h2 className='header-title ms-3'>User Membership</h2>
          <div className="row" style={{marginLeft:"1px"}}>
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
            <UserCard {...data} />
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
          </div>
    </div>
     <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />

          <SuperAdminMembership {...SuperAdmin} />
    </div>
    </div>
    </>
  )
}

export default UserMembership