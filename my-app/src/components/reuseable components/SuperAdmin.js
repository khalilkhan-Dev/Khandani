import React from 'react'


const SuperAdmin = ({selectedCardData}) => {
 
  return (
    <>
    
    <div className="super-admin pt- text-center">
    {selectedCardData && (
              <div>
        <img src={selectedCardData.image}  alt="" />
        <p>{selectedCardData.Verified} <span><img src={selectedCardData.verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 mt-3">
          <div className="section1 col-md-6 text-start">
            <p>Name</p>
            <p>ID</p>
            <p>Contact</p>
            <p>Email</p>
            <p>Relegion</p>
            <p>Country</p>
            <p>Hometown</p>
            <p>Study</p>
            <p>Job Title</p>
            <p>Workplace</p>
            <p>DOB</p>
            <p>Gender</p>
            <p>Height</p>
          </div>
          <div className="section2 col-md-6 text-start">
          
            <p>{selectedCardData.name}</p>
            <p>{selectedCardData.id}</p>
            <p>{selectedCardData.contact}</p>
            <p>{selectedCardData.email}</p>
            <p>{selectedCardData.religion}</p>
            <p>{selectedCardData.country}</p>
            <p>{selectedCardData.city}</p>
            <p>{selectedCardData.study}</p>
            <p>{selectedCardData.job}</p>
            <p>{selectedCardData.workplace}</p>
            <p>{selectedCardData.dob}</p>
            <p>{selectedCardData.gender}</p>
            <p>{selectedCardData.height}</p>
           
           
          </div>
          <div className='otherdocuments'>
          <a href="/UserBio">Other documents</a>
          </div>
        </div>
        <hr className='my-2' />
        </div>
            )}
    </div>

    </>
  )
}

export default SuperAdmin