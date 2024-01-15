import React from 'react'
// import profile from '../images/profile.png'

const UpdateRequestCard = ({profile}) => {
   

  return (
    <>
    <div className="col-md-3">
        <div className=" m-2  card" >
     <div className="profile-img mt-4 text-center">
        <img src={profile} width={73} height={73} alt="" />
     </div>
     <div className="bio">
        <p>Update </p>
        <p>Name</p>
        <p>Contcat</p>
        <div className="footer  d-flex justify-content-between">
        <p>Gender</p>
        <p>+2 more</p>
        </div>
     </div>
</div>
    </div>
    </>
  )
}

export default UpdateRequestCard