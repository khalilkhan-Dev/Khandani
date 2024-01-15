import React from 'react'
import logo from '../images/logo.png'
const Login = () => {
  return (
    <>
   <div className="conatiner-fluid" style={{marginBottom:"300px"}}>
    <div className="row p-0 m-0">
        <img className='m-5' style={{width:"150px",height:"100px"}} src={logo} alt="" />
    </div>
    <div className="row   text-center p-0 m-0">
        <div className="form p-5 mx-auto" style={{width:"max-content",backgroundColor:"#161617",borderRadius:"30px"}} >
            <h4 className='text-white'>Administraion Login</h4>
            <form action="">
                <input type="email" className='rounded-pill  px-4 py-2 my-2 mt-5 bg-dark text-white ' style={{width:"300px", border:"1px solid white"}} placeholder='Email' /><br />
                <input type="password" className='rounded-pill px-4 py-2 my-2 bg-dark text-white ' style={{width:"300px",border:"1px solid white"}} placeholder='Password' /><br />
                <button className='btn rounded-pill px-5 mt-2 mb-3 ' style={{backgroundColor:"black",color:"white"}}>Log In</button>
            </form>
        </div>
    </div>
    
   </div>
    </>
  )
}

export default Login