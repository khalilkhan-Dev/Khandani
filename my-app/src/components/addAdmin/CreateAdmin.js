import React from 'react'

const CreateAdmin = () => {
 
  return (
    <>

    <div className="createadmin ">
      <p className='ms-3'>Add Admin</p>

      <div className="form d-flex justify-content-center" >
        <form action="" className=''>
          <label htmlFor="">Full Name:</label>
          <input type="text"  className='bg-dark'/><br />
          <label htmlFor="" style={{marginRight:"33px"}}>Email:</label>
          <input type="email" className='bg-dark' /><br />
          <label htmlFor=""  style={{marginRight:"8px"}}>Password</label>
          <input type="password" className='bg-dark' /><br />
          <label htmlFor="" style={{marginRight:"30px"}}>image</label>
          <input type="text"  className='bg-dark' style={{height:"219px"}} />
        </form>

      </div>
      <div className='text-end'>
        <button className='formbtn'>Create</button>
      </div>
    </div>

    
    </>
  )
}

export default CreateAdmin