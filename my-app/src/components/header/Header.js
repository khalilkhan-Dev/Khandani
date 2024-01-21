import React from 'react'
import dropdown from '../images/dropdown.png'
import bell from '../images/bell.png'
import search from '../images/search.png'


const Header = ({headerLink1,headerLink2,headerLink3,headerLink4}) => {
  return (
    <>
    
     <div className='search mt-2  pb-2 d-flex justify-content-around' >
    <div className='d-flex'>
      <div className="searchbar">
        <img src={search}  alt="" />
        <input type="text" placeholder='search' />
      </div>
      
    </div>
    <div className="mt-4 "><a href=""><img src={bell} alt="" /></a></div>

  </div>
    </>
  )
}

export default Header