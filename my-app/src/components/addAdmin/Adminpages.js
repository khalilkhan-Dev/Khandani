import React  from 'react'

import man from '../images/man.png'
import line from '../images/line.png'
import AdminData from './AdminData'
// import CreateAdmin from './CreateAdmin'
import AdminSidebar from './AdminSidebar'


const Adminpages = () => {

  
  return (
    <>
     <div className=" d-flex" >
    <div  style={{width:"75%",borderRadius:"10px" ,height:"735px",backgroundColor:"#161617"}}>

        <div className="row">
          
         

     
        <AdminData />

   
           
        </div>
        {/* <CreateAdmin/> */}



    </div>


    <div className='mx-auto' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-4 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>

          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          <AdminSidebar/>
          <div className='adminsideBarBtn  text-center ' style={{marginTop:"280px"}}>
            <button className='w-75 py-2'>Delete</button>
          </div>


    </div>
    </div>

    

    </>
  )
}

export default Adminpages