import { useEffect, useState } from 'react';
import man from '../images/man.png'
import line from '../images/line.png'
import './Users.css'
import UserCard from '../reuseable components/UserCard'
import SuperAdmin from '../reuseable components/SuperAdmin'
import Header from '../header/Header'
import {db} from '../firebase'
import {getDocs,doc,updateDoc, collection} from 'firebase/firestore';
// import profile from '../images/profile.png'

const Users = () => {
  //for firebase setup
  const [userData, setUserData]=useState([]);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const movieCollectionRef = collection(db,"users");
  console.log(selectedCardData)
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
  const handleclick2 =async()=>{
    try{
      const docRef = doc(db,"users",selectedCardData.id);
      await updateDoc(docRef,{
        blocked:true
      })
      alert("user blocked successfully")
    }catch(error){
      console.error('error during update',error);
    }
    window.location.reload();

  }

  const propsCardData={
   
    Linkname1:"Restrict",
    Linkname2:"Block",
    Linkname3:"Delete",
    handleclick2:handleclick2,
    Verified:"verify",
    button1:"Restrict",
    button2:"Block",

    
  
  }

  return (
    <>
    <div className="d-flex" style={{height:"100%"}} >
    <div  style={{width:"75%",borderRadius:"10px",backgroundColor:"#161617" }}>
        <div className="">
          <Header headerLink1={"Active"} headerLink2={"Inactive"} />
          <h2 className='header-title ms-3'>Users</h2>
          <div className="row" style={{marginLeft:"1px"}} >

  {userData.filter((user) => !user.blocked).map((users)=>(
   
                 <UserCard firstName={users.firstName} phone={users.phone} id={users.id}  active={users.blocked===true?"blocked":"not blocked"}  image={users.profileimage} {...propsCardData} onClick={() => handleCardClick(users)} />  
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

          <SuperAdmin selectedCardData={selectedCardData} {...propsCardData}  />
          
    </div>
    </div>
  
          
  
          
        
  
    
          
  
    </>
  )
}

export default Users