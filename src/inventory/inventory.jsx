import { useState, useContext, useEffect  } from 'react';

import { useNavigate } from 'react-router-dom';
import ProductActivity from './productactivities.jsx'
import RefundActivity from './refundactivities.jsx'
import OrderActivity from './orderactivities.jsx'
import { Auth } from "../App.jsx"
function Customer() {
    let navigate = useNavigate();
    let [nav, setnav] = useState(['Inventory', 'Order Management', 'Refund Requests']);
    let [index,setindex] = useState(0);
    const { isLoading, setLoader } = useContext(Auth)
    let [task, settask] = useState(0)
    let [tobecomplete, setcomplete] = useState(3)
    let [main, setmain] = useState([])


    useEffect(()=>{
        fetch('https://sage-admin-backend.vercel.app/api/inventory/product')
        .then(e=>{
          return e.json()
        })
        .then(e=>{
          // console.log(e[0])
  
          setmain((p)=> [...p,e])
          settask(1)
  
        })
        fetch('https://sage-admin-backend.vercel.app/api/inventory/product')
        .then(e=>{
          return e.json()
        })
        .then(e=>{
          console.log(e[0])
  
          setmain((p)=> [...p,e])
          settask(2)
  
        })
        fetch('https://sage-admin-backend.vercel.app/api/inventory/product')
        .then(e=>{
          return e.json()
        })
        .then(e=>{
          console.log(e[0])
  
          setmain((p)=> [...p,e])
          settask(3)
  
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
                    <span className="font-[700] text-[26px] text-[#333333]">Inventory</span>
        
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
            <button className='bg-[rgba(114,23,184,1)] text-white flex justify-center items-center gap-1 rounded-[8px] h-[37px] py-[16px] px-[12px] mt-2 cursor-pointer' onClick={()=> {
                navigate('/inventory/add')
            }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99935 1.66675V13.3334M1.16602 7.50008H12.8327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<span className='text-[16px]'>Add New Product</span>
</button>
        </div>
        </div>
        <div className="w-full flex gap-[24px]">
    <div className="flex flex-col h-[80px] w-[267.5px] bg-[#831AD31A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">Total Inventory</span>
                    <span className="text-[26px] font-[700]">{main[0]?.inventory}</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#B5E45E1A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">In Stock</span>
                    <span className="text-[26px] font-[700]">{main[0]?.in_stocks}</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#FFDB431A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] mt-1 font-[600]">Low Stock</span>
                    <span className="text-[26px] font-[700]">{main[0]?.low_stock}</span>
                    
                </div>
                <div className="flex flex-col h-[80px] w-[267.5px] bg-[#FB37481A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    
                    <span className="text-[12px] font-[600] mt-1">Out Of Stock</span>
                    <span className="text-[26px] font-[700]">{main[0]?.out_of_stock}</span>
                    
                
                
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
    { index === 0 ?
    <ProductActivity datatable={main[0]?.record} /> 
    : index === 1? <OrderActivity /> 
    :  <RefundActivity />}
    
    </div>);
}

export default Customer;

