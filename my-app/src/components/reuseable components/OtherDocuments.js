import React from 'react'
import Header from '../header/Header'
import SuperAdmin from './SuperAdmin'
import man from '../images/man.png'
import line from '../images/line.png'
const OtherDocuments = (props) => {
    const {passportimage,employeeimage,licenseimage,educationimage}= props
  return (
    <>
 <div className=" d-flex" >
    <div className='' style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617" }}>
        <div className="row">
          <Header headerLink1={"Active"} headerLink2={"Inactive"} />
          <h2 className='header-title ms-3'>Users</h2>
          <div className="row" style={{marginLeft:"1px"}} >
            
        <div className="row mt-4">
            <div className="col-md-6 d-flex">
                <div className='card-text'><p>passport:</p></div>
                <div className="card-img" ><img src={passportimage} alt="" /></div>
            </div>
            <div className="col-md-6 d-flex">
            <div className='card-text'><p>Employee:</p></div>
                <div className="card-img" ><img src={employeeimage} alt="" /></div>
            </div>
        </div>
        
          <div className="row mt-4">
          <div className="col-md-6 d-flex">
            <div className='card-text'><p>License:</p></div>
                <div className="card-img" ><img src={licenseimage} alt="" /></div>
            </div>
            <div className="col-md-6 d-flex">
            <div className='card-text'><p>Education:</p></div>
                <div className="card-img" ><img src={educationimage} alt="" /></div>
            </div>
          </div>
          <div className="biometric row">
          <p>These are the image proofs (documents) share by user and also had passed the <a href="">biometrical verification</a>.</p>
          </div>
          </div>
        </div>
    </div>

    <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          <SuperAdmin/>
          <div className='sidebar-btn flex flex-column text-center'>
            <button  className='w-75 py-2 '>Restrict</button>
            <button className='w-75 py-2 mt-2 '>Block</button>
          </div>
    </div>
    </div>

    
    </>
  )
}

export default OtherDocuments