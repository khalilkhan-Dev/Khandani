import React from 'react'

const AdminUpdateRequest = ({selectedCardData,handleclick1,handleclick2,handleclick3}) => {
 

  return (
    <>
       {selectedCardData && (
    <div className="super-admin pt- text-center">
      
        <img src={selectedCardData.profileimage} width={65} height={65} className='rounded-circle'  alt="" />
        <p>{selectedCardData.Verified} <span><img src={selectedCardData.verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-6 text-start">
            <p>Name</p>
            <p>Contact</p>
            <p>Gender</p>
            <p>Work</p>
            <p>university</p>
            
          </div>
          <div className="section2 col-md-6 text-start">
            <p>{selectedCardData.firstName}</p>
            <p>{selectedCardData.phone}</p>
            <p>{selectedCardData.gender}</p>
            <p>{selectedCardData.workPlace}</p>
            <p>{selectedCardData.studyPlace}</p>
            

          </div>
          <div className="otherdocuments">
          <a href="/UserBio" className='text-end'>Other documents</a>

          </div>
        </div>
        <hr />
        <div className='sidebar-btn flex flex-column text-center'>
            <button className='w-75 mt-4 py-2' onClick={handleclick1}>Verify</button>
            <button className='w-75 mt-4 py-2' onClick={handleclick2}>Close</button>
            <button className='w-75 mt-4  py-2' onClick={handleclick3}>Reject</button>

          </div>
    </div>
       )}
    </>
  )
}

export default AdminUpdateRequest