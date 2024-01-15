import React from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import './Users.css'
import UserCard from '../reuseable components/UserCard'
import profile from '../images/profile.png'
// import verify from '../images/verify.png'
import adminVerified from '../images/adminVerified.png'
import SuperAdmin from '../reuseable components/SuperAdmin'
import Header from '../header/Header'
// import OtherDocuments from '../OtherDocuments'
// import image from '../images/image.png'

const Users = () => {

// props data for super admin
  const SuperAdminData1 = {
    profile:profile,
    Verified: "Verified",
    verifiedLogo:adminVerified,
    Linkname1:"Restrict",
    Linkname2:"Block",
    Linkname3:"Delete",
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





  return (
    <>
  
  

    <div className=" d-flex" >
    <div className='' style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617" }}>
        <div className="row">
          <Header headerLink1={"Active"} headerLink2={"Inactive"} />
          <h2 className='header-title ms-3'>Users</h2>
          <div className="row" style={{marginLeft:"1px"}} >

            <UserCard  {...SuperAdminData1} />
            <UserCard  {...SuperAdminData1} />
            <UserCard  {...SuperAdminData1} />
            <UserCard  {...SuperAdminData1}/>
            <UserCard  {...SuperAdminData1}/>
            <UserCard  {...SuperAdminData1}/>
            <UserCard  {...SuperAdminData1}/>
            <UserCard  {...SuperAdminData1} />
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
         {/* <OtherDocuments {...OtherDocumentsData}/> */} 
        </div>
    </div>

    <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          <SuperAdmin {...SuperAdminData1}/>
          <div className='sidebar-btn flex flex-column text-center'>
            <button  className='w-75 py-2 '>Restrict</button>
            <button className='w-75 py-2 mt-2 '>Block</button>
          </div>
    </div>
    </div>
  
          
  
          
        
  
    
          
  
    </>
  )
}

export default Users