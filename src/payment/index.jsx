import { useState, useContext, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
 
import RegularActivity from './regularactivities.jsx'
import LoanActivity from './loanactivities.jsx'
import { Auth } from "../App.jsx"

function Payment() {
    let navigate = useNavigate();
    let [nav, setnav] = useState(['Regular Transactions', 'Loan Transactions']);
    let [index,setindex] = useState(0);
    const { isLoading, setLoader } = useContext(Auth)
    let [task, settask] = useState(0)
    let [tobecomplete, setcomplete] = useState(1)
    let [main, setmain] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payment/rg_transaction`)
        .then(e=>{
          return e.json()
        })
        .then(e=>{
          console.log(e)
  
          setmain((prevMain) => {
            // Store the data as the first element in the main array
            return [[e]]
          })
          settask((prevTask) => prevTask + 1)
  
        })
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payment/loan_transaction`)
        .then((e) => e.json())
        .then((e) => {
          console.log("Employment data:", e)
          // Use functional update to avoid dependency on main
          setmain((prevMain) => {
            // Add the new data as the second element in the main array
            return [...prevMain, [e]]
          })
          settask((prevTask) => prevTask + 1)
        })
        .catch((error) => {
          console.error("Error fetching employment data:", error)
        })
      },[])
      useEffect(()=>{
        if(task === tobecomplete){
          setLoader(false)
        }else{
          setLoader(true)
  
        }
      },[task, tobecomplete])




    return ( <div className='w-[85%] h-full px-[2%] overflow-scroll'>
        
        <div className="mt-[2rem] flex items-center justify-between mb-4">
                    <span className="font-[700] text-[26px] text-[#333333]">Payment & Transactions</span>
        
        <div className='flex gap-2 justify-center items-center h-[24px]'>
        <div  className="w-[137px] flex justify-center items-center bg-[#FFFFFF] pt-[8px] pl-[12px] relative">
        <div  className='w-full  h-[37px]  rounded-[8px] gap-[8px] items-center  flex justify-center cursor-pointer border border-[#E4E4E4]'>
            
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66602 14.6667L9.99935 18M9.99935 18L13.3327 14.6667M9.99935 18V10.5M3.23469 13C2.26159 11.9379 1.66602 10.5117 1.66602 8.94363C1.66602 5.66106 4.27606 3 7.49571 3C10.2437 3 12.6862 4.87672 13.3022 7.48571C15.2472 6.76397 17.3977 7.78639 18.1057 9.76936C18.7077 11.4559 18.0723 13.2941 16.6723 14.25" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
            <span className="text-[13px] leading-[21px]">Export</span>
            <svg style={{transform
    :"rotate(-90deg)",transition:'0.3s all'}} xmlns="http://www.w3.org/2000/svg" width="19" className="mr-1 size-5" height="19" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
    </div>
            
        </div>
        </div>
        <div className="w-full flex gap-[24px]">
    <div className="flex flex-col h-[80px] w-[267.5px] bg-[#831AD31A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">Total Revenue</span>
                    <span className="text-[26px] font-[700]">₦1,000,000</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#B5E45E1A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">Total Transactions Today</span>
                    <span className="text-[26px] font-[700]">₦600,000</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#FFDB431A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">Total Refunds</span>
                    <span className="text-[26px] font-[700]">₦400,000</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#FB37481A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] font-[600] mt-1">Failed Transactions</span>
                    <span className="text-[26px] font-[700]">₦340,520</span>
                    
                
                
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
    {index === 0 ?
    <RegularActivity datatable={main[0]?.[0]?.record}/> : index === 1? <LoanActivity  datatable={main[0]?.[0]?.record}/> :
    <RegularActivity />}
    
    </div>);
}

export default Payment;

