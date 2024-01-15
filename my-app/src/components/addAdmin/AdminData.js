import React from 'react'
// import man from '../images/man.png'
// import line from '../images/line.png'
// import Header from '../header/Header'
import AdminCard from './AdminCard'
import Header from '../header/Header'


const AdminData = ({data}) => {
  
  return (
    <>
    <Header/>
    <h4 className='header-title ms-3 mt-5'>Add Admin</h4>
    <div className="container">
     
        <div className='text-end me-4' >
<a href="/AddAdmin">        <button  className='ps-5 pe-5 mb-5 py-2 rounded-pill' style={{backgroundColor:"black",color:"white",border:"none"}}>Add Admin</button>
</a>     
        </div>
          <div className="row" style={{marginLeft:"1px"}}>
          <AdminCard Linkname1={"Delete"}/>
          <AdminCard Linkname1={"Delete"}/>
          <AdminCard Linkname1={"Delete"}/>
          <AdminCard Linkname1={"Delete"}/>
          <AdminCard Linkname1={"Delete"}/>
          <AdminCard Linkname1={"Delete"}/>

       
         
      
  


          </div>    
    </div>

   
    </>
  )
}

export default AdminData