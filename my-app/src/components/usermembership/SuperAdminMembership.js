import React from 'react'

const SuperAdminMembership = (props) => {
    const {name,id,profile,Verified,verifiedLogo,email}= props;

  return (
    <>
    
    <div className="super-admin pt- text-center">
        <img src={profile}  alt="" />
        <p>{Verified} <span><img src={verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-6 text-start">
            <p>Name</p>
            <p>ID</p>
            <p>Email</p>
          </div>

          <div className="section2 col-md-6 text-start">
            <p>{name}</p>
            <p>{id}</p>
            <p>{email}</p>
          </div>
        </div>
        <hr />
        <div className='BasicMembership text-start ms-3 my-2'>
        <p style={{fontSize:"15px"}}>Basic Membership</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <hr />
        <div className='changeMemvership'>
            <p className='text-start ms-3'>Change Membership</p>
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-dark text-white px-5 py-2 " style={{borderRadius:"10px",border:"1px solid white"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Basic</button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<div className='sidebar-btn flex mt-5 flex-column text-center'>
            <button className='w-75 py-2'>Change</button>
          </div>
           </div>
       </div>
    </>
  )
}

export default SuperAdminMembership