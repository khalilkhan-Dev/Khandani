import React,{ useEffect, useState} from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import UpdateRequestCard from './UpdateRequestCard'
import AdminUpdateRequest from './AdminUpdateRequest'
import {db} from '../firebase'
import {getDocs,doc, collection, updateDoc} from 'firebase/firestore';


const UpdateRequest = () => {
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

  //  function to chnage status to verified
  const verifyUpdate = async () => {
    try {
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        isVerified:'verified'
      })
      alert("verified")
    } catch (error) {
      console.error('Error during update:', error);
    }
    window.location.reload();

  };
    // function for updating status to pending
  const rejectUpdate =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        isVerified:'pending'
      })
      alert("rejected")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();

  }

   const propsdata={
    handleclick1:verifyUpdate,
    handleclick2:"",
    handleclick3:rejectUpdate
   }


  return (
    <>
     <div className="d-flex" style={{height:"100%"}} >
    <div  style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617" }}>
        <div className="row mx-auto">
          <Header headerLink1={"Active"} headerLink2={"Inactive"} />
          <h2 className='header-title ms-3'>Update Request</h2>
          <div className="row mx-auto p-0"   >

         
          {userData.map((users)=>(
         <UpdateRequestCard  image={users.profileimage}  onClick={() => handleCardClick(users)} />
  ))}
  
          </div>
          <p className='showing'>Showing Result 8 of 15</p>
         {/* <OtherDocuments {...OtherDocumentsData}/> */} 
        </div>
    </div>

    <div className='mx-auto ' style={{width:"24%",borderRadius:"10px",backgroundColor:"#161617"}}>
          <div className='d-flex mt-1 justify-content-center'>
            <img src={man} alt="" width={40} height={40} />
            <p className='superadmintitle d-flex align-items-center  ms-3'>Super Admin</p>
          </div>
          <img src={line} width={"100%"} alt="" />
          <AdminUpdateRequest selectedCardData={selectedCardData} {...propsdata}  />
         
    </div>
    </div>
  
    </>
  )
}

export default UpdateRequest