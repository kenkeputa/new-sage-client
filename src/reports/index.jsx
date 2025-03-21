

import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
// import FraudChart from './fraudchart';
import { LineChart } from "../components/LineChart";
// import Flagged from "./flagged_transaction";
import TransactionChart from "./transactionsuccess.jsx";
import Salereport from "./salereport.jsx";
import PaymentChart from "./paymentchart.jsx";
import TSProduct from "./TSProduct.jsx"


import { Auth } from "../App.jsx"
export let SelectChart = ({ text })=>{
  //  let text = props.text;
      
  return (<div className="w-[137px] h-[37px] flex justify-center items-center  relative">
      <div  className='w-full bg-[#FFFFFF] h-full rounded-[8px] gap-[8px] mt-2 items-center  flex justify-center cursor-pointer border border-[#E4E4E4]'>
          <span className="text-[14px]  ml-3 leading-[21px]">{text}</span>
          <svg style={{transform
  :"rotate(-90deg)",transition:'0.3s all'}} xmlns="http://www.w3.org/2000/svg" width="19" className="mr-3 size-5" height="19" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
      </div>
  
  </div>)
  }
function Report() {
  const navigate = useNavigate()
  const [nav, setnav] = useState(["Sages Reports", "Payment & Transactions Reports", "Inventory Reports", "User Engagement", "Key Performance indicators"])
  const [nav1, setnav1] = useState(["Top-Selling Products"])
  const [index, setindex] = useState(0)
  const [index1, setindex1] = useState(0)
  const { isLoading, setLoader } = useContext(Auth)
  const [task, settask] = useState(0)
  const [tobecomplete, setcomplete] = useState(3)
  const [main, setmain] = useState([[],[],[],[]])
// console.log(main)
  useEffect(() => {
    // Reset main state to avoid duplication
    //setmain([])

    // First fetch request
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fraud/index`)
      .then((e) => e.json())
      .then((e) => {
        console.log("All loans data:", e)
        // Use functional update to avoid dependency on main
        setmain((prevMain) => {
          // Store the data as the first element in the main array
          return [e.record
            , prevMain[1], prevMain[2], prevMain[3]
          ]
        })
        settask((prevTask) => prevTask + 1)
      })
      .catch((error) => {
        console.error("Error fetching all loans:", error)
      })

    // Second fetch request
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fraud/flaggeduser`)
      .then((e) => e.json())
      .then((e) => {
        console.log("Employment data:", e)
        // Use functional update to avoid dependency on main
        setmain((prevMain) => {
          // Add the new data as the second element in the main array
          prevMain[1] = e.record;
          return prevMain;
    
        })
        settask((prevTask) => prevTask + 1)
      })
      .catch((error) => {
        console.error("Error fetching employment data:", error)
      })

    // Uncomment if you need the third fetch request
    fetch('https://sage-admin-backend.vercel.app/api/fraud/risk')
        .then(e => e.json())
        .then(e => {
            console.log('Overdue data:', e);
            setmain((prevMain) => {
              // Add the new data as the second element in the main array
              prevMain[2] = e.record;
              return prevMain;
        
            })
            settask(prevTask => prevTask + 1);
        })
        .catch(error => {
            console.error('Error fetching overdue data:', error);
        });
  }, []) // Empty dependency array to run only once

  useEffect(() => {
    if (task === tobecomplete) {
      setLoader(false)
    } else {
      setLoader(true)
    }
  }, [task, tobecomplete, setLoader])

  console.log(main, "Naim")


  return (
    <div className="w-[85%] h-full px-[2%] overflow-scroll">
      <div className="mt-[2rem] flex items-center justify-between mb-4">
        <span className="font-[700] text-[26px] text-[#333333]">Reporting & Analytics</span>
        <div className="flex gap-2 justify-center items-center h-[24px]">
          <div className="w-[137px] flex justify-center items-center bg-[#FFFFFF] pt-[8px] pl-[12px] relative">
            <div className="w-full h-[37px] rounded-[8px] gap-[8px] items-center flex justify-center cursor-pointer border border-[#E4E4E4]">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.66602 14.6667L9.99935 18M9.99935 18L13.3327 14.6667M9.99935 18V10.5M3.23469 13C2.26159 11.9379 1.66602 10.5117 1.66602 8.94363C1.66602 5.66106 4.27606 3 7.49571 3C10.2437 3 12.6862 4.87672 13.3022 7.48571C15.2472 6.76397 17.3977 7.78639 18.1057 9.76936C18.7077 11.4559 18.0723 13.2941 16.6723 14.25"
                  stroke="#565656"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[13px] leading-[21px]">Export</span>
              <svg
                style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                className="mr-1 size-5"
                height="19"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
            
          </div>
          <button className='bg-[rgba(114,23,184,1)] text-white flex justify-center items-center gap-1 rounded-[8px] h-[37px] py-[16px] px-[12px] mt-2 cursor-pointer' onClick={()=> {
                navigate('/inventory/add')
            }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99935 1.66675V13.3334M1.16602 7.50008H12.8327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<span className='text-[16px]'>Download Report</span>
</button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="w-full flex gap-[24px]">
        {/* Card 1 */}
        
        <div
          className="flex flex-col h-[120px] w-[267.5px] bg-[#B5E45E1A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center bg-[#E1F4BF80] rounded-full size-[40px]">
              <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.2844 14.4338C22.1686 10.7561 19.1351 8.75818 15.7232 8.0813C16.7929 7.36384 18.0929 6.10827 19.3747 3.86553C19.7164 3.26852 19.537 2.50915 18.9649 2.12685C18.8719 2.06401 16.6292 0.597656 13.0013 0.597656C9.37337 0.597656 7.13194 2.06401 7.03768 2.12685C6.46423 2.50915 6.28617 3.26852 6.62788 3.86553C7.90964 6.10827 9.20972 7.36514 10.2794 8.0813C6.86617 8.75818 3.83265 10.7548 1.71821 14.4338C0.102606 17.2434 -0.394907 20.3437 0.316013 23.1638C1.43411 27.5943 5.10916 29.4011 13 29.4011C20.8908 29.4011 24.5672 27.5943 25.684 23.1651C26.3949 20.345 25.8987 17.2447 24.2844 14.4338Z"
                  fill="#87BF20"
                />
              </svg>
            </div>
            <span className="text-[16px] mt-1 font-[500]"></span>
          </div>
          <span className="text-[12px] mt-1 font-[600]">Total Revenue</span>
          <span className="text-[26px] font-[700]">N20,654,000</span>
        </div>

        <div
          className="flex flex-col h-[125px] w-[267.5px] bg-[#FDF5ED] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center rounded-full size-[40px]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5.83304C0 3.89988 3.13367 2.33304 7 2.33304C10.8663 2.33304 14 3.89988 14 5.83304C14 7.76621 10.8663 9.33304 7 9.33304C3.13367 9.33304 0 7.76621 0 5.83304ZM7 18.6664C10.9912 18.6664 14 16.9105 14 14.583V12.2497C14 14.5492 11.0833 16.333 7 16.333C2.91667 16.333 0 14.5492 0 12.2497V14.583C0 16.9105 3.00883 18.6664 7 18.6664ZM7 13.9997C10.9912 13.9997 14 12.2439 14 9.91638V7.58304C14 9.88254 11.0833 11.6664 7 11.6664C2.91667 11.6664 0 9.88254 0 7.58304V9.91638C0 12.2439 3.00883 13.9997 7 13.9997ZM21 18.6664C24.8663 18.6664 28 17.0995 28 15.1664C28 13.2332 24.8663 11.6664 21 11.6664C17.1337 11.6664 14 13.2332 14 15.1664C14 17.0995 17.1337 18.6664 21 18.6664ZM21 25.6664C16.9167 25.6664 14 23.8825 14 21.583C14 23.8825 11.0833 25.6664 7 25.6664C2.91667 25.6664 0 23.8825 0 21.583V23.9164C0 26.2439 3.00883 27.9997 7 27.9997C10.9912 27.9997 14 26.2439 14 23.9164C14 26.2439 17.0088 27.9997 21 27.9997C24.9912 27.9997 28 26.2439 28 23.9164V21.583C28 23.8825 25.0833 25.6664 21 25.6664ZM21 20.9997C16.9167 20.9997 14 19.2159 14 16.9164C14 19.2159 11.0833 20.9997 7 20.9997C2.91667 20.9997 0 19.2159 0 16.9164V19.2497C0 21.5772 3.00883 23.333 7 23.333C10.9912 23.333 14 21.5772 14 19.2497C14 21.5772 17.0088 23.333 21 23.333C24.9912 23.333 28 21.5772 28 19.2497V16.9164C28 19.2159 25.0833 20.9997 21 20.9997ZM17.85 4.95804C18.1463 4.95804 18.4427 4.84604 18.669 4.62088L19.8333 3.47638V8.16638C19.8333 8.81038 20.3548 9.33304 21 9.33304C21.6452 9.33304 22.1667 8.81038 22.1667 8.16638V3.48804L23.3368 4.62671C23.7988 5.07588 24.5362 5.06538 24.9865 4.60454C25.4357 4.14254 25.4263 3.40404 24.9632 2.95488L22.6263 0.678709C21.7175 -0.225457 20.2452 -0.225457 19.3457 0.674043L17.031 2.95954C16.5713 3.41221 16.5678 4.15071 17.0193 4.60921C17.248 4.84021 17.549 4.95571 17.85 4.95571V4.95804Z" fill="#9B5612"/>
</svg>

            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] mt-1 font-[600]">Total Sales</span>
          <span className="text-[26px] font-[700]">N10,654,000</span>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col h-[120px] w-[267.5px] bg-[#FAF3DD] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center rounded-full size-[40px]">
              
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9973 6.74222L3.50783 3.23406L12.1435 0.355891C13.3405 -0.0431094 14.6355 -0.0431094 15.8325 0.355891L24.488 3.24106L13.9973 6.74222ZM10.285 13.3024L12.8225 9.07439L3.55216 5.98389C2.83233 5.74356 2.04366 6.03639 1.65283 6.68622L0.337998 8.87956C-0.440169 10.1769 0.182831 11.8604 1.61783 12.3387L7.54567 14.3151C8.58283 14.6604 9.72266 14.2392 10.285 13.3024ZM3.488 3.22706V3.23989L3.50783 3.23406L3.488 3.22706ZM12.8213 27.9452V13.6092L12.2847 14.5029C11.419 15.9449 9.9 16.7721 8.3005 16.7721C7.80466 16.7721 7.30183 16.6939 6.80717 16.5282L2.32133 15.0337V20.3514C2.32133 22.8621 3.92783 25.0916 6.31017 25.8849L11.4843 27.6092C11.9207 27.7504 12.3687 27.8659 12.8213 27.9441V27.9452ZM27.6613 8.91806L26.322 6.68622C25.9323 6.03639 25.1425 5.74356 24.4227 5.98389L15.1535 9.07322L17.691 13.3012C18.2533 14.2392 19.392 14.6604 20.4292 14.3139L26.4002 12.3236C27.813 11.8522 28.4267 10.1944 27.6602 8.91689L27.6613 8.91806ZM19.6755 16.7732C18.076 16.7732 16.557 15.9472 15.6913 14.5041L15.1547 13.6104V27.9394C15.647 27.8531 16.1347 27.7271 16.5967 27.5731H16.6083L21.6658 25.8861C24.0482 25.0916 25.6547 22.8632 25.6547 20.3526V15.0337L21.1688 16.5294C20.6742 16.6951 20.1713 16.7732 19.6755 16.7732Z" fill="#BC8F01"/>
</svg>
            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] mt-1 font-[600]">Active Users</span>
          <span className="text-[26px] font-[700]">3000</span>
        </div>

        {/* Card 4 */}
        <div
          className="flex flex-col h-[120px] w-[267.5px] bg-[#E2EDFF] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center  rounded-full size-[40px]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1098_138270)">
<path d="M0 5.83304C0 3.89988 3.13367 2.33304 7 2.33304C10.8663 2.33304 14 3.89988 14 5.83304C14 7.76621 10.8663 9.33304 7 9.33304C3.13367 9.33304 0 7.76621 0 5.83304ZM7 18.6664C10.9912 18.6664 14 16.9105 14 14.583V12.2497C14 14.5492 11.0833 16.333 7 16.333C2.91667 16.333 0 14.5492 0 12.2497V14.583C0 16.9105 3.00883 18.6664 7 18.6664ZM7 13.9997C10.9912 13.9997 14 12.2439 14 9.91638V7.58304C14 9.88254 11.0833 11.6664 7 11.6664C2.91667 11.6664 0 9.88254 0 7.58304V9.91638C0 12.2439 3.00883 13.9997 7 13.9997ZM21 18.6664C24.8663 18.6664 28 17.0995 28 15.1664C28 13.2332 24.8663 11.6664 21 11.6664C17.1337 11.6664 14 13.2332 14 15.1664C14 17.0995 17.1337 18.6664 21 18.6664ZM21 25.6664C16.9167 25.6664 14 23.8825 14 21.583C14 23.8825 11.0833 25.6664 7 25.6664C2.91667 25.6664 0 23.8825 0 21.583V23.9164C0 26.2439 3.00883 27.9997 7 27.9997C10.9912 27.9997 14 26.2439 14 23.9164C14 26.2439 17.0088 27.9997 21 27.9997C24.9912 27.9997 28 26.2439 28 23.9164V21.583C28 23.8825 25.0833 25.6664 21 25.6664ZM21 20.9997C16.9167 20.9997 14 19.2159 14 16.9164C14 19.2159 11.0833 20.9997 7 20.9997C2.91667 20.9997 0 19.2159 0 16.9164V19.2497C0 21.5772 3.00883 23.333 7 23.333C10.9912 23.333 14 21.5772 14 19.2497C14 21.5772 17.0088 23.333 21 23.333C24.9912 23.333 28 21.5772 28 19.2497V16.9164C28 19.2159 25.0833 20.9997 21 20.9997ZM17.85 4.95804C18.1463 4.95804 18.4427 4.84604 18.669 4.62088L19.8333 3.47638V8.16638C19.8333 8.81038 20.3548 9.33304 21 9.33304C21.6452 9.33304 22.1667 8.81038 22.1667 8.16638V3.48804L23.3368 4.62671C23.7988 5.07588 24.5362 5.06538 24.9865 4.60454C25.4357 4.14254 25.4263 3.40404 24.9632 2.95488L22.6263 0.678709C21.7175 -0.225457 20.2452 -0.225457 19.3457 0.674043L17.031 2.95954C16.5713 3.41221 16.5678 4.15071 17.0193 4.60921C17.248 4.84021 17.549 4.95571 17.85 4.95571V4.95804Z" fill="#1A65DE"/>
</g>
<defs>
<clipPath id="clip0_1098_138270">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>

            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] font-[600] mt-1">Total Orders</span>
          <span className="text-[26px] font-[700]">5,000</span>
        </div>
      </div>
      <div className="w-full h-8 flex gap-2 mt-8 border-b border-b-[#E4E4E4]">
        {nav.map((e, i) => (
          <div
            key={i}
            className="cursor-pointer"
            style={{ borderBottom: index === i ? "2px solid rgba(114,23,184,1)" : "none" }}
            onClick={() => setindex(i)}
          >
            {e}
          </div>
        ))}
      </div>
      <div className="flex justify-center  gap-5.5 mt-10 w-full">
           {index === 0?
           
          <>
          
            <Salereport />
            <Card className="w-[60%] border-[#E4E4E4] bg-[#F6F6F6]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-[312px] ">
                    <CardTitle>Revenue Trend</CardTitle>
                    <p className="text-[14px] text-lg mb-8">Tracks daily, weekly, and monthly revenue growth</p>
                    </div>
                    <div className="relative w-fit rounded-lg overflow-hidden border-[#E4E4E4] border">

<select
          id="dealerID"
          name="dealerID"
        
          className="w-[118px] px-2 py-2  rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none text-[14px] bg-white pr-10 text-gray-500"
          required
        >
          <option value="">This week</option>
        
            <option  value="This week">
              This week
            </option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="size-5 text-[#8C8C8C]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
    </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            
          </>: index === 1 ?
          <>
          <PaymentChart />
          <Card className="w-[60%] border-[#E4E4E4] bg-[#F6F6F6]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-[312px]">
                    <CardTitle>Financial Insight</CardTitle>
                    
                    </div>
                    <div className="relative w-fit rounded-lg overflow-hidden border-[#E4E4E4] border">

<select
          id="dealerID"
          name="dealerID"
        
          className="w-[118px] px-2 py-2  rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none text-[14px] bg-white pr-10 text-gray-500"
          required
        >
          <option value="">This week</option>
        
            <option  value="This week">
              This week
            </option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="size-5 text-[#8C8C8C]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
    </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
          </> : index ===2 ?
          <>
           <PaymentChart />
          <Card className="w-[60%] border-[#E4E4E4] bg-[#F6F6F6]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-[312px]">
                    <CardTitle>Financial Insight</CardTitle>
                   
                    </div>
                    <div className="relative w-fit rounded-lg overflow-hidden border-[#E4E4E4] border">

<select
          id="dealerID"
          name="dealerID"
        
          className="w-[118px] px-2 py-2  rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none text-[14px] bg-white pr-10 text-gray-500"
          required
        >
          <option value="">This week</option>
        
            <option  value="This week">
              This week
            </option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="size-5 text-[#8C8C8C]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
    </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
          </>  : index === 4 ?
          <>
          <Card className="w-[60%] border-[#E4E4E4] bg-[#F6F6F6]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-[312px]">
                    <CardTitle>Cart Abandonment Trends</CardTitle>
                    <p className="text-[16px] text-lg mb-8">Tracks fluctuations in drop-off rate</p>
                    </div>
                    <div className="relative w-fit rounded-lg overflow-hidden border-[#E4E4E4] border">

<select
          id="dealerID"
          name="dealerID"
        
          className="w-[118px] px-2 py-2  rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none text-[14px] bg-white pr-10 text-gray-500"
          required
        >
          <option value="">This week</option>
        
            <option  value="This week">
              This week
            </option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="size-5 text-[#8C8C8C]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
    </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
          <TransactionChart />
          </> :
          <div className="w-full h-max ">
            <div className="w-full h-[287px] mt-8 py-[2rem] pl-[2rem] bg-[#F6F6F6] rounded-[12px] border border-[#E4E4E4]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <div className="flex flex-col">
              <h1 className="font-[700] text-[18px]">User Engagement </h1>
              <p className="text-[16px] text-[#565656]">Tracks how users interact with the platform.</p>
              </div>
              <div className='flex gap-[12px] mt-[28px] w-max items-center'>

              <div className="w-[337px] h-[105px] rounded-[8px] border border-[#ECECEC] bg-[#D3FFE8] pl-[20px] py-[14px]">
               
                  <p className="text-[#16884B] mb-[6px] font-[700]">800</p>
                  <p className="text-[#333333] mb-[4px] text-[16px] font-[700]">Daily Active Users</p>
                  <p className="text-[#565656] text-[14px]">Number of users making transactions daily</p>
               
              </div>
              <div className="w-[337px] h-[105px] rounded-[8px] border border-[#ECECEC] bg-[#FFF8DE] pl-[20px] py-[14px]">
               
                  <p className="text-[#AE8C00] mb-[6px] font-[700]">10%</p>
                  <p className="text-[#333333] mb-[4px] text-[16px] font-[700]">Repeat Customers</p>
                  <p className="text-[#565656] text-[14px]">Customers returning for purchases</p>
               
              </div>
              </div>

            </div>
          </div>
        } 
            {/* <Card className="w-[60%] border-[#E4E4E4] bg-[#F6F6F6] " style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="">
                    <CardTitle>Fraudulent Detection Rate</CardTitle>
                    <p className="text-gray-600 text-lg mb-8">Tracks the percentage of flagged fraudulent transctions.</p>
                    </div>
                    <div className="relative rounded-lg overflow-hidden border-[#E4E4E4] border">

<select
          id="dealerID"
          name="dealerID"
        
          className="w-full px-4 py-3  rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-white pr-10 text-gray-500 mr-4"
          required
        >
          <option value="">This week</option>
        
            <option  value="This week">
              This week
            </option>
        
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
          <svg
            style={{ transform: "rotate(-90deg)", transition: "0.3s all" }}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            className="size-5 text-[#8C8C8C]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
    </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card> */}
            
                </div>
        {/* Navigation tabs */}
        {index === 0?
      <div className="w-full h-8 flex gap-2 mt-8 border-b border-b-[#E4E4E4]">
        {nav1.map((e, i) => (
          <div
            key={i}
            className="cursor-pointer"
            style={{ borderBottom: index1 === i ? "2px solid rgba(114,23,184,1)" : "none" }}
            onClick={() => setindex1(i)}
          >
            {e}
          </div>
        ))}
      </div> : index === 1 ?
      <div className="w-full h-max ">
      <div className="w-full h-[287px] mt-8 py-[2rem] px-[2%]  bg-[#F6F6F6] rounded-[12px] border border-[#E4E4E4] flex flex-col justify-center items-center" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
        <div className="w-full flex flex-col">
        <h1 className="font-[700] text-[18px]">Key Performance Indicators (KPIs)</h1>
        <p className="text-[16px] text-[#565656]">Essential KPIs Tracked</p>
        </div>
        <div className='flex gap-[6px] mt-[28px] w-full items-center'>

        <div className="w-[330px] h-max rounded-[8px] border border-[#ECECEC] bg-[#D3FFE8] pl-[20px] py-[14px]">
         
            <p className="text-[#16884B] mb-[6px] font-[700]">80%</p>
            <p className="text-[#333333] mb-[4px] text-[16px] font-[700]">Transaction Success Rate</p>
            <p className="text-[#565656] text-[14px]">Percentage of successful payments vs. failed</p>
         
        </div>
        <div className="w-[330px] h-max rounded-[8px] border border-[#ECECEC] bg-[#FFF8DE] pl-[20px] py-[14px]">
         
            <p className="text-[#AE8C00] mb-[6px] font-[700]">10%</p>
            <p className="text-[#333333] mb-[4px] text-[16px] font-[700]">Cart Abandonment Rate</p>
            <p className="text-[#565656] text-[14px]">Percentage of users who add items but don’t checkout</p>
         
        </div>
        <div className="w-[330px] h-max rounded-[8px] border border-[#ECECEC] bg-[#EBFFC8] pl-[20px] py-[14px]">
         
            <p className="text-[#16884B] mb-[6px] font-[700]">10%</p>
            <p className="text-[#333333] mb-[4px] text-[16px] font-[700]">Cart Abandonment Rate</p>
            <p className="text-[#565656] text-[14px]">Percentage of users who add items but don’t checkout</p>
         
        </div>
        </div>

      </div>
    </div> :
      ""}

      {/* Content based on selected tab */}
      {index === 0  ? (
        <TSProduct />
      ) 
      :""}
      
      
      {/*}: index === 1 && main[1] ? (
        <Identity datatable={main[0]} />
      ) : index === 2 && main[1] ? (
        <Employment datatable={main[1]} />
      ) : (
        <Loan_Activity datatable={main[0]} />
      ) */}
      {/* <Flagged /> */}
    </div>
  )
}

export default Report

