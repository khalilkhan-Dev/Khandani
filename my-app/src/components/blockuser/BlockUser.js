import { useEffect, useState } from 'react';
import {db} from '../firebase'
import {getDocs,updateDoc,doc, collection} from 'firebase/firestore';
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import SuperAdmin from '../reuseable components/SuperAdmin'
import UserCard from '../reuseable components/UserCard'

const BlockUser = () => {

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


    // function for updating status to pending
  const handleUnblock  =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        blocked:false
      })
      alert("unblock successfully")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();

  }
 
  const propsdata={
    Linkname1:"Unblock",
    Linkname2:"Delete",
    handleclick1:handleUnblock
    
    
  }

  const handleUpdate=()=>{
    alert("block")
  }

  


  
  return (
    <>
    <div className=" d-flex"  style={{height:"100%"}}>
    <div style={{width:"75%",borderRadius:"10px" ,backgroundColor:"#161617"}}>

        <div className="row">
          <Header/>
          <h2 className='header-title ms-3'>Blocked User</h2>
          <div className="row" style={{marginLeft:"1px"}}>

          {userData.filter((user) => user.blocked).map((users)=>(
         <UserCard firstName={users.firstName} phone={users.phone} id={users.id} email={users.email} 
         title={users.subscription.basic===true?"basic":users.subscription.premium===true?"premium":users.subscription.standard===true?"standard":""}
         image={users.profileimage} dropdowndisplay1={{display:"none"}} dropdowndisplay2={{display:"none"}} {...propsdata} onClick={() => handleCardClick(users)} />
  ))}
            </div>
          <p className='showing'>Showing Result 8 of 15</p>

           
        </div>


    </div>


    <div className='mx-auto' style={{width:"24%",borderRadius:"10px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-2 justify-content-center'>
            <img src={man} alt="" />
            <h4 className='superadmintitle d-flex align-items-center ms-3'>Super Admin</h4>
          </div>
          <img src={line} className='mt-2' width={"100%"} alt="" />
          
          <SuperAdmin selectedCardData={selectedCardData} handleUpdatebnt1={handleUnblock} button1={"Unblock"} display={{display:"none"}}  />
         

    </div>
    </div>
    </>
  )
}

export default BlockUser