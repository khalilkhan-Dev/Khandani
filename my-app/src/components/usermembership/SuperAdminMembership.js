import React from 'react'
import dropdown from '../images/dropdownicon.png'
const SuperAdminMembership = ({selectedCardData,Linkname1,Linkname2,Linkname3,handleclick1,handleclick2,handleclick3}) => {
   

  return (
    <>
    
    <div className="super-admin pt- text-center ">
    {selectedCardData && (
    <div>

   
        <img src={selectedCardData.profileimage}  width={65} height={65} className='rounded-circle' alt="" />
        <p>{selectedCardData.Verified} <span><img src={selectedCardData.verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-4 text-start">
            <p>Name</p>
            <p>Email</p>
            <p>ID</p>
          </div>

          <div className="section2 col-md-8 text-start">
            <p>{selectedCardData.firstName}</p>
            <p>{selectedCardData.email}</p>
            <p>{selectedCardData.id}</p>

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
        <div className='changeMembership'>
            <p className='text-start ms-3'>Change Membership</p>
            <div class="dropdown text-center " >
        <button class="dropdownicon  px-5 py-2 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          dropdown <img src={dropdown} alt="" />
        </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button className='dropdown-item' onClick={handleclick1}>{Linkname1}</button></li>
            <li  ><button onClick={handleclick2} className='dropdown-item'>{Linkname2}</button></li>
            <li ><button onClick={handleclick3} className='dropdown-item'>{Linkname3}</button></li>

          </ul>
     </div>
<div className='sidebar-btn flex mt-5 flex-column text-center'>
            <button className='w-75 py-2'>Change</button>
          </div>
           </div>
           </div>
    )}
       </div>
    </>
  )
}

export default SuperAdminMembership