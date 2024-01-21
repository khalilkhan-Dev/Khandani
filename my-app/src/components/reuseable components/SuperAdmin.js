import React from 'react'
import {Link} from 'react-router-dom';

const SuperAdmin = ({selectedCardData,handleUpdatebnt1,handleUpdatebtn2,button1,button2,display}) => {
 
  return (
    
    <>
    
    <div className="super-admin text-center m-0 p-0">
    {selectedCardData && (
              <div className='m-0 p-0'>
        <img className='superadminprofile' src={selectedCardData.profileimage}  alt="" />
        <p>{selectedCardData.Verified} <span><img src={selectedCardData.verifiedLogo} alt="" /></span></p>
        <div className="row ps-3 ">
        <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Name</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.firstName}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Contact</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.phone}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Email</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.email}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Relegion</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.religion}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Nationality</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.nationality}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Hometown</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.address}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Study</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.studyPlace}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Job Title</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.jobTitle}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Workplace</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.workPlace}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>DOB</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.dob}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Gender</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.gender}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>Height</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.height}</p></div>
            </div>
            <div className="row">
              <div className="section1 col-md-4 text-start" ><p>ID</p></div>
              <div className="section2 col-md-8 text-start"><p>{selectedCardData.id}</p></div>
            </div>
            

          <div className='otherdocuments '>
          <Link to="/UserBio" >Other documents</Link>
          </div>
        </div>
        <hr className='' />
        <div className='sidebar-btn flex flex-column text-center align-items-end'>
            <button className='w-75 py-2' onClick={handleUpdatebnt1}>{button1}</button>
           <button className='w-75 py-2 mt-2 ' onClick={handleUpdatebtn2} style={display}  >{button2}</button>
          </div>
  
        </div>
            )}
    </div>

    </>
  )
}

export default SuperAdmin