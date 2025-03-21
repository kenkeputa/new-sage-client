import { ArrowLeft } from "lucide-react"
import { useState, useContext, useEffect  } from 'react';

import { useNavigate } from 'react-router-dom';
import { Auth } from "../App.jsx"
import OrderDetails from './orderdetails.jsx'
import Payment from './payment.jsx'
import Supportticket from './activities.jsx'
// import Activity from './activities.jsx'


export default function UserInformation() {
    let navigate = useNavigate();
    let [nav, setnav] = useState(['Order Details','Payment Method','Support Tickets', 'Loan History', 'Fraud Score']);
    let [index,setindex] = useState(0);
    const { isLoading, setLoader } = useContext(Auth)
    let [task, settask] = useState(0)
    let [tobecomplete, setcomplete] = useState(2);
    let [userData, setuserData] = useState({
      name: "",
      id: "",
      email: "",
      phone: "",
      address: "",
    })
  

//  useEffect(() => {
    // Get the URL search params
    
    
  // }, [])
  // const userData = {
  //   name: "Adebayo Tomiwa",
  //   id: "CUST037",
  //   email: "Stevenbomasa@gmail.com",
  //   phone: "08102976512",
  //   address: "1, Old Olowora, Berger",
  // }


  const [main, setmain] = useState([[],[],[],[]]);
  console.log(import.meta.env.VITE_BACKEND_URL, "ggg")
  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search)
    // Get the id parameter
    const encodedId = searchParams.get("id")

    if (encodedId) {
      // Decode the base64 encoded id
      const decodedId = JSON.parse(atob(encodedId))
      setuserData({
        name: decodedId.first_name + " " + decodedId.last_name, 
        id: decodedId.id,
        email: decodedId.email,
        phone: decodedId.phone_number,
        address: decodedId.address,
      })
      console.log("Decoded ID:", decodedId)
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/customer/orderdetails?id=${decodedId.id}`)
      .then(e=>{
        return e.json()
      })
      .then(e=>{
        console.log(e,'ob')

        setmain((prevMain) => {
          // Store the data as the first element in the main array
          return [e.record
            , prevMain[1], prevMain[2], prevMain[3]
          ]
        })
        settask((prevTask) => prevTask + 1)
        

      })
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/customer/payment_method?id=${decodedId.id}`)
      .then(e=>{
        return e.json()
      })
      .then(e=>{
        console.log(e,'ob')

        
          setmain((prevMain) => {
            // Add the new data as the second element in the main array
            prevMain[1] = e.record;
            return prevMain;
      
          })
          settask((prevTask) => prevTask + 1)
  
        

      })
    }
    },[])
    
    useEffect(()=>{
      if(task === tobecomplete){
        setLoader(false)
      }else{
        setLoader(true)

      }
    },[task, tobecomplete])




  return (
    <div className='w-[85%] h-full px-[2%] overflow-scroll'>
    <div className="w-[70%] h-max border border-gray-200 rounded-lg overflow-hidden font-sans mt-4">
      <header className="flex items-center px-5 py-4 bg-gray-100 border-b border-gray-200">
        <button className="p-1 rounded-md text-gray-600 hover:bg-gray-200 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-3 text-lg font-semibold text-gray-800">User Information</h1>
      </header>

      <div className="bg-white w-[78%] h-max">
        <div className="flex px-5 py-4">
          <div className="w-2/5 text-sm text-gray-500">Customer Name</div>
          <div className="w-3/5 text-sm text-gray-800 font-medium text-right">{userData.name}</div>
        </div>

        <div className="flex px-5 py-4">
          <div className="w-2/5 text-sm text-gray-500">Customer ID</div>
          <div className="w-3/5 text-sm text-gray-800 font-medium text-right">{userData.id}</div>
        </div>

        <div className="flex px-5 py-4">
          <div className="w-2/5 text-sm text-gray-500">Email</div>
          <div className="w-3/5 text-sm text-gray-800 font-medium text-right">{userData.email}</div>
        </div>

        <div className="flex px-5 py-4">
          <div className="w-2/5 text-sm text-gray-500">Phone Number</div>
          <div className="w-3/5 text-sm text-gray-800 font-medium text-right">{userData.phone}</div>
        </div>

        <div className="flex px-5 py-4">
          <div className="w-2/5 text-sm text-gray-500">Address</div>
          <div className="w-3/5 text-sm text-gray-800 font-medium text-right">{userData.address}</div>
        </div>
    </div>
    </div>
    <div className='w-full h-8 flex gap-2 mt-8 border-b border-b-[#E4E4E4]'>
        {nav.map((e,i)=>{
            
        return (<div className='cursor-pointer' style={{borderBottom: index === i ? '2px solid rgba(114,23,184,1)': "none"}} onClick={()=>{
            setindex(i)
        }}>{e}</div>)
        }
        )}
    </div>
    {index === 0 && main[1]? (
    <OrderDetails datatable={main[0]} />
    ) : index === 1 && main[1] ? (
    <Payment datatable={main[1]} />
     ) : index === 2 && main[1] ? (
    <Supportticket datatable={main[1]} />
    ) : (<div>No data here</div>)}
    </div>
  )
}


