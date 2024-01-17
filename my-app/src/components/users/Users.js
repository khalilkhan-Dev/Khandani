import { useEffect, useState } from 'react';
import man from '../images/man.png'
import line from '../images/line.png'
import './Users.css'
import UserCard from '../reuseable components/UserCard'
import SuperAdmin from '../reuseable components/SuperAdmin'
import Header from '../header/Header'
import {db} from '../firebase'
import {getDocs, collection} from 'firebase/firestore';

const Users = () => {
  //for firebase setup
  const [userData, setUserData]=useState([]);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const movieCollectionRef = collection(db,"profile");

  const handleCardClick = (profile) => {
    setSelectedCardData(profile);
  };

  useEffect(()=>{
    const getUserData = async()=>{
      try{
        const data= await getDocs(movieCollectionRef);
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id,
        }));
        console.log(userData);
        setUserData(filteredData);
      }catch(err){
        console.error(err);
      }
    }
    getUserData();

  }, []);

  const propsCardData={
    Linkname1:"Restrict",
    Linkname2:"Block",
    Linkname3:"Delete"
  }

  return (
    <>
    <div className=" d-flex" >
    <div className='' style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617" }}>
        <div className="row">
          <Header headerLink1={"Active"} headerLink2={"Inactive"} />
          <h2 className='header-title ms-3'>Users</h2>
          <div className="row " style={{marginLeft:"1px"}} >

          
  {userData.map((profile)=>(
         <UserCard name={profile.name} contact={profile.contact} id={profile.id} email={profile.email} profile={profile.image} {...propsCardData} onClick={() => handleCardClick(profile)} />
  ))}
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
         {/* <OtherDocuments {...OtherDocumentsData}/> */} 
        </div>
    </div>

    <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",height:"735px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          <SuperAdmin selectedCardData={selectedCardData} />
          <div className='sidebar-btn flex flex-column text-center'>
            <button  className='w-75 py-2 '>Restrict</button>
            <button className='w-75 py-2 mt-2 '>Block</button>
          </div>
    </div>
    </div>
  
          
  
          
        
  
    
          
  
    </>
  )
}

export default Users