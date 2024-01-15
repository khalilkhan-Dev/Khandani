import React from 'react'
import dropdown from '../images/dropdown.png'
import bell from '../images/bell.png'
import search from '../images/search.png'


const Header = ({headerLink1,headerLink2,headerLink3,headerLink4}) => {
  return (
    <>
    
     <div className='search mt-2  pb-2 d-flex justify-content-around' >
    <div className='d-flex'>
      <div className='mt-3 me-3 ps-2  rounded-pill' style={{border:"1px solid white"}} >  
      <img src={search} alt="" />  
          <input type="text" className='py-2 text-center text-white ms-3 border-dark ' style={{width:"300px" ,borderRadius:"0px 20px 20px 0px",backgroundColor:"#161617",border:"#161617"}} placeholder='Search...' />
       </div>
      <div class="dropdown mt-2">
        <button class="text-dark  dropdown-toggle mt-3" style={{border:"none",backgroundColor:"#161617"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={dropdown} alt="" />
        </button>
         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">{headerLink1}</a></li>
            <li><a class="dropdown-item" href="#">{headerLink2}</a></li>
            <li><a class="dropdown-item" href="#">{headerLink3}</a></li>
            <li><a class="dropdown-item" href="#">{headerLink4}</a></li>

          </ul>
     </div>
    </div>
    <div className="mt-4 "><a href=""><img src={bell} alt="" /></a></div>

  </div>
    </>
  )
}

export default Header