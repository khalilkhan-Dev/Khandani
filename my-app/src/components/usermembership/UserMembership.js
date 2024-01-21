import React,{useState,useEffect} from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import UserCard from '../reuseable components/UserCard'
import profile from '../images/profile.png'
import SuperAdminMembership from './SuperAdminMembership'
import VerifiedLogo from '../images/adminVerified.png'
import {db} from '../firebase'
import {getDocs, updateDoc,doc, collection} from 'firebase/firestore';

const UserMembership = () => {
  
   //for firebase setup
   const [userData, setUserData]=useState([]);
   const [selectedCardData, setSelectedCardData] = useState(null);
   const movieCollectionRef = collection(db,"users");
 
   const handleCardClick = (users) => {
     setSelectedCardData(users);
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


     //subscription changed to basic function
   const handleCardClick1 =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        subscription: {
          basic: true,
          premium: false,
          standard: false
        }
      })
      alert("subscription changed to basic successfully")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();
  }
  //subscription changed to premium function
  const handleCardClick2 =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        subscription: {
          basic: false,
          premium: true,
          standard: false
        }

      })
      alert("subscription changed to premium successfully")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();
  }
  // subscription changed to standard function
  const handleCardClick3 =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        subscription: {
          basic: false,
          premium: false,
          standard: true
        }

      })
      alert("subscription changed to premium successfully")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();
  }

  const propsData={
    Linkname1:"Basic",
    Linkname2:"premium",
    Linkname3:"standard",
    handleclick1: handleCardClick1,
    handleclick2:handleCardClick2,
    handleclick3:handleCardClick3,
  }

 
  return (
    <>
     <div className=" d-flex" style={{height:"100%"}} >
    <div  style={{width:"75%",borderRadius:"10px" ,backgroundColor:"#161617"}}>

        <div className="row">
          <Header/>
          <h2 className='header-title ms-3'>User Membership</h2>
          <div className="row" style={{marginLeft:"1px"}}>
          {userData.map((users)=>(

         <UserCard firstName={users.firstName} phone={users.phone}
          title={users.subscription.basic===true?"basic":users.subscription.premium===true?"premium":users.subscription.standard===true?"standard":""}
           id={users.id} email={users.email}  image={users.profileimage}
            {...propsData} onClick={() => handleCardClick(users)} />
  ))}
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
          </div>
    </div>
     <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />

          <SuperAdminMembership selectedCardData={selectedCardData} {...propsData} />
    </div>
    </div>
    </>
  )
}

export default UserMembership