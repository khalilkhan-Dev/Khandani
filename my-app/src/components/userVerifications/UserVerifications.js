import React,{useState,useEffect} from 'react'
import man from '../images/man.png'
import line from '../images/line.png'
import Header from '../header/Header'
import SuperAdmin from '../reuseable components/SuperAdmin'
import UserCard from '../reuseable components/UserCard'
import {db} from '../firebase'
import {getDocs,doc, collection, updateDoc} from 'firebase/firestore';



const UserVerifications = () => {

    //for firebase setup
    const [userData, setUserData]=useState([]);
    const [selectedCardData, setSelectedCardData] = useState(null);
    const collectionRef = collection(db,"users");
    const [newData, setNewData] = useState({
      // Your updated data fields
      isVerified: 'verified',
      lastName: 'UpdatedLastName',
      // Add other fields you want to update
    });
  
    const handleCardClick = (users) => {
      setSelectedCardData(users);
    };
  
    useEffect(()=>{
      const getUserData = async()=>{
        try{
          const data= await getDocs(collectionRef);
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

  const headerDropdown = {
    headerLink1:"All",
    headerLink2:"Basics",
    headerLink3:"Gold",
    headerLink4:"Vip",
  }


  const verifyUpdate = async () => {
    try {
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        isVerified:'verified'
      })
      // alert("verified successfully refresh the page to see the updated data")
    } catch (error) {
      console.error('Error during update:', error);
    }
    window.location.reload();

  };

  const rejectUpdate =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        isVerified:'pending'
      })
      // alert("rejected successfully refresh the page to see the updated data")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();

  }
  const propsData={
    Linkname1:"Verify",
    Linkname3:"Reject",
    handleclick1: verifyUpdate,
    handleclick3: rejectUpdate
  }

  return (
    <>
     <div className=" d-flex" style={{height:"100%"}} >
    <div  style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617"}}>
        <div className="row">
          <Header {...headerDropdown}/>
          <h2 className='header-title ms-3'>User Verifications</h2>
          <div className="row" style={{marginLeft:"1px"}}>

          {userData.map((users)=>(
                <UserCard firstName={users.firstName} phone={users.phone} id={users.id} email={users.email} {...propsData} active={users.isVerified==="verified"?"Verified":"pending"} 
                title={users.subscription.basic===true?"basic":users.subscription.premium===true?"premium":users.subscription.standard===true?"standard":""}
                dropdowndisplay1={{display:"none"}}  image={users.profileimage} onClick={() => handleCardClick(users)} />
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

          <SuperAdmin  selectedCardData={selectedCardData} handleUpdatebnt1={verifyUpdate} handleUpdatebtn2={rejectUpdate} button1={"Verify"} button2={"Reject"} />
          

       
    </div>
    </div>

    </>
  )
}

export default UserVerifications