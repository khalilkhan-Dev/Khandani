import React from 'react'


const SuperAdmin = (selectedData) => {
  const {name,id,profile,Verified,verifiedLogo,contact,email,religion,country,city,study,job,workplace,dob,gender,height}= selectedData;
  return (
    <>
    
    <div className="super-admin pt- text-center">
        <img src={profile}  alt="" />
        <p>{Verified} <span><img src={verifiedLogo} alt="" /></span></p>
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
            <p>{name}</p>
            <p>{id}</p>
            <p>{contact}</p>
            <p>{email}</p>
            <p>{religion}</p>
            <p>{country}</p>
            <p>{city}</p>
            <p>{study}</p>
            <p>{job}</p>
            <p>{workplace}</p>
            <p>{dob}</p>
            <p>{gender}</p>
            <p>{height}</p>
          </div>
          <div className='otherdocuments'>
          <a href="/UserBio">Other documents</a>
          </div>
        </div>
        <hr className='my-2' />
    </div>

    </>
  )
}

export default SuperAdmin