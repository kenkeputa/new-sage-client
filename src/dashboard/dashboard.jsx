import React, {useState} from 'react';

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

import { LineChart } from "../components/LineChart"
import { DonutChart } from "../components/DonutChart"





  export let Select = ({ text, callback })=>{
//  let text = props.text;
    
return (<div onClick={callback} className="w-[137px] flex justify-center items-center bg-[#FFFFFF] pt-[8px] pl-[12px] relative">
    <div  className='w-full  h-[37px]  rounded-[8px] gap-[8px] mt-2 items-center  flex justify-center cursor-pointer border border-[#E4E4E4]'>
        <span className="text-[13px]  ml-3 leading-[21px]">{text}</span>
        <svg style={{transform
:"rotate(-90deg)",transition:'0.3s all'}} xmlns="http://www.w3.org/2000/svg" width="19" className="mr-3 size-5" height="19" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
    </div>

</div>)
}
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

function Dashboard(){
  let [option, setoption] = useState(false)
  let [option1, setoption1] = useState(false)
  let [option2, setoption2] = useState(false)
  let [menu, setmenu] = useState(null)
  let [display, setdis] = useState(false)

  const tableRows = [
    {
      description: "Identity Verification For CUST001",
      category: "Customer",
      status: "Pending",
      date: "27/12/2024",
      action: "Verify Customer"
    },
    {
      description: "Overdue Payment of ₦400,000 For CUST037",
      category: "Payment",
      status: "Overdue",
      date: "26/12/2024",
      action: "Alert Customer"
    },
    {
      description: "10 Items Pending Delivery",
      category: "Orders",
      status: "In Progress",
      date: "22/12/2024",
      action: "Track Shipment"
    },
    {
      description: "Automated Payment Reminder Sent to CUST568",
      category: "Communication",
      status: "Successful",
      date: "22/12/2024",
      action: "Monitor Response"
    },
    {
      description: "₦400,000 Loan Application pending for CUST137",
      category: "Loan",
      status: "Pending",
      date: "16/12/2024",
      action: "Approve Loan"
    }
  ];
  
  const filteroptions = [
    { label: "All" },
    { label: "Communications" },
    { label: "Customers" },
    { label: "Inventory" },
    { label: "Loan" },
    { label: "Orders" },
    { label: "Payment" },
  ];

  const [selectedOption, setSelectedOption] = useState(0);


  const sortOptions = [
    { label: "Most Recent" },
    { label: "Oldest" },
  ];


const [selectedSortOption, setSelectedSortOption] = useState(0);


    return (<div className="w-[85%] h-full px-[2%] overflow-scroll">
                <div className="mt-[2rem] flex items-center justify-between mb-4">
                    <span className="font-[700] text-[26px] text-[#333333]">Dashboard</span>

                    {/* <select name="" id="">
                        <option value="months">months</option>
                    </select> */}
                    <div className="w-[137px] relative" >

                    <Select callback={()=>{
                      if(option){
                        setoption(false)
                      } else {
                        setoption(true)
                      }
                    }} text="This Month"/>
                    <div className="absolute right-[1%] mt-[2px] w-[125px] h-[148px] bg-white rounded-lg shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start gap-2 inline-flex overflow-hidden" style={{display: option ? 'inline-flex': 'none'}}>
    <div className="self-stretch h-[148px] flex-col justify-start items-start flex">
        <div className="self-stretch h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">This Year</div>
            </div>
        </div>
        <div className="self-stretch h-[37px] px-3 py-2 bg-[#333333]/10 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">This Month</div>
                <div data-svg-wrapper className="relative">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 10.5L7.91667 14.6667L16.25 6.33334" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">This Week</div>
            </div>
        </div>
        <div className="self-stretch h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
                <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Today</div>
            </div>
        </div>
    </div>
    <div data-svg-wrapper className="relative">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.91 12.36L17 20.854L14.182 21.88L11.09 13.386L6.91797 16.542L8.40797 1.633L19.134 12.096L13.91 12.36Z" fill="#333333"/>
    </svg>
                    </div>
                </div>
            </div>
            
      </div>
    <div className="w-full flex gap-[24px]">

                <div className="flex flex-col h-[136px] w-[267.5px] bg-[#831AD31A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#DCBAF680] rounded-full size-[40px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.36754 6.72394L4.05486 5.77408H4.05486L4.36754 6.72394ZM15.3675 3.10287L15.6802 4.05273L15.3675 3.10287ZM16.5 13.0871C15.9477 13.0871 15.5 13.5348 15.5 14.0871C15.5 14.6393 15.9477 15.0871 16.5 15.0871V13.0871ZM16.51 15.0871C17.0623 15.0871 17.51 14.6393 17.51 14.0871C17.51 13.5348 17.0623 13.0871 16.51 13.0871V15.0871ZM19 20H5V22H19V20ZM4 19.0249V12.1119H2V19.0249H4ZM4 12.1119V9.14924H2V12.1119H4ZM5 20C4.43588 20 4 19.5517 4 19.0249H2C2 20.6798 3.35498 22 5 22V20ZM5 6.17412C3.35498 6.17412 2 7.49436 2 9.14924H4C4 8.62246 4.43588 8.17412 5 8.17412V6.17412ZM19 22C20.645 22 22 20.6798 22 19.0249H20C20 19.5517 19.5641 20 19 20V22ZM22 9.14924C22 7.49436 20.645 6.17412 19 6.17412V8.17412C19.5641 8.17412 20 8.62246 20 9.14924H22ZM17 4.97664V6.7706H19V4.97664H17ZM4 12.1119V8.59771H2V12.1119H4ZM4.68023 7.67379L15.6802 4.05273L15.0549 2.15301L4.05486 5.77408L4.68023 7.67379ZM4 8.59771C4 8.18605 4.2673 7.80972 4.68023 7.67379L4.05486 5.77408C2.83442 6.17583 2 7.30905 2 8.59771H4ZM19 4.97664C19 2.92985 16.9799 1.51932 15.0549 2.15301L15.6802 4.05273C16.3453 3.83379 17 4.32716 17 4.97664H19ZM16.5 15.0871H16.51V13.0871H16.5V15.0871ZM16 14.0871C16 13.7957 16.2357 13.5808 16.5 13.5808V15.5808C17.3166 15.5808 18 14.9238 18 14.0871H16ZM16.5 13.5808C16.7643 13.5808 17 13.7957 17 14.0871H15C15 14.9238 15.6834 15.5808 16.5 15.5808V13.5808ZM17 14.0871C17 14.3784 16.7643 14.5933 16.5 14.5933V12.5933C15.6834 12.5933 15 13.2503 15 14.0871H17ZM16.5 14.5933C16.2357 14.5933 16 14.3784 16 14.0871H18C18 13.2503 17.3166 12.5933 16.5 12.5933V14.5933ZM22 19.0249V9.14924H20V19.0249H22ZM19 6.17412H5V8.17412H19V6.17412Z" fill="#62139D"/>
                        </svg>
                    </div>
                        <span className="text-[16px] font-[500]">Total Revenue</span>
                    </div>
                    <span className="text-[26px] font-[700]">₦11,560,000</span>
                    <span className="text-[12px] font-[600]">Income Generated</span>
                    <div className="h-[24px] w-[83px] bg-[#1FC16B1A] border-[#ADF2CD] border px-[8px] gap-[4px] flex items-center rounded-md">
                        
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1H19M19 1V7M19 1L10 10L6 6L1 11" stroke="#16884B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>+12%</span>
                    </div>
                </div>
                <div className="flex flex-col h-[136px] w-[267.5px] bg-[#B5E45E1A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#E1F4BF80] rounded-full size-[40px]">

                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 21V19C17.5 17.9391 17.0786 16.9217 16.3284 16.1716C15.5783 15.4214 14.5609 15 13.5 15H6.5C5.43913 15 4.42172 15.4214 3.67157 16.1716C2.92143 16.9217 2.5 17.9391 2.5 19V21M16.525 3.30078C17.9777 3.90028 19.0001 5.33068 19.0001 6.99987C19.0001 8.68196 17.9618 10.1215 16.4912 10.7127M22.5 20.9999V18.9999C22.4993 18.1136 22.2044 17.2527 21.6614 16.5522C21.1184 15.8517 20.3581 15.3515 19.5 15.1299M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="#5F8717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] font-[500]">Total Revenue</span>
                    </div>
                    <span className="text-[26px] font-[700]">1250</span>
                    <span className="text-[12px] font-[600]">Customers</span>
                    <div className="h-[24px] w-[83px] bg-[#1FC16B1A] border-[#ADF2CD] border px-[8px] gap-[4px] flex items-center rounded-md">
                        
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1H19M19 1V7M19 1L10 10L6 6L1 11" stroke="#16884B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>+12%</span>
                    </div>
                </div>
                <div className="flex flex-col h-[136px] w-[267.5px] bg-[#FFDB431A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#FFEDA180] rounded-full size-[40px]">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 5V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5M7 15H19C20.1046 15 21 14.1046 21 13V7C21 5.89543 20.1046 5 19 5H7C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15ZM15 10C15 11.1046 14.1046 12 13 12C11.8954 12 11 11.1046 11 10C11 8.89543 11.8954 8 13 8C14.1046 8 15 8.89543 15 10Z" stroke="#896F00" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] font-[500]">Overdue Payments</span>
                    </div>
                    <span className="text-[26px] font-[700]">₦340,520</span>
                    <span className="text-[12px] font-[600]">45 Customers</span>
                    <div className="h-[24px] w-[83px] bg-[#FB37481A] border-[#FDAFB6] border px-[8px] gap-[4px] flex items-center rounded-md">
                        
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 11H19M19 11V5M19 11L10 2L6 6L1 1" stroke="#DD0417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span>+12%</span>
                    </div>
                </div>
                <div className="flex flex-col h-[136px] w-[267.5px] bg-[#FB37481A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#FDAFB680] rounded-full size-[40px]">
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 13H5.5M17.5 9H5.5M12.5 5H5.5M3.5 17H19.5C20.6046 17 21.5 16.1046 21.5 15V3C21.5 1.89543 20.6046 1 19.5 1H3.5C2.39543 1 1.5 1.89543 1.5 3V15C1.5 16.1046 2.39543 17 3.5 17Z" stroke="#B60413" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] font-[500]">Pending Applications</span>
                    </div>
                    <span className="text-[26px] font-[700]">25</span>
                    <span className="text-[12px] font-[600]">Applications Awaiting Review</span>
                    <div className="h-[24px] w-[83px] bg-[#1FC16B1A] border-[#ADF2CD] border px-[8px] gap-[4px] flex items-center rounded-md">
                        
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1H19M19 1V7M19 1L10 10L6 6L1 11" stroke="#16884B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>+12%</span>
                    </div>
                </div>
                </div>
                <div className="flex justify-center gap-5.5 mt-10">
            <Card className="w-[80%] border-[#E4E4E4] bg-[#F6F6F6]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Applications Over Time</CardTitle>
                  <SelectChart text="This Week"/>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card className="w-[25%] bg-[#F6F6F6] border border-[#E4E4E4]">
              <CardHeader>
                <CardTitle>Inventory</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DonutChart />
              </CardContent>
            </Card>
                </div>
<div className="w-full h-[386px] bg-[#f6f6f6] rounded-xl shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start inline-flex overflow-hidden  mt-6 relative">
  <div className="self-stretch h-[72px] px-6 py-[3px] bg-[#f6f6f6] border-b border-[#d3d3d3] justify-start items-center gap-4 inline-flex overflow-hidden">
    <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
      <div className="text-[#333333] text-lg font-bold font-['Mulish'] leading-normal tracking-tight">Pending Activities</div>
      <div className="px-1 bg-[#ffdb43] rounded-[999px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="text-[#333333] text-sm font-medium font-['Mulish'] leading-[21px]">12</div>
      </div>
    </div>
    {/* sort */}
    <div onClick={()=>{
      if(option1){
        setoption1(false)
      } else {
        setoption1(true)
      }
    }} className="justify-end items-center gap-2 flex cursor-pointer">
      <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[2.50px] top-[2.50px] absolute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1667 16.5L13.1667 6.5M13.1667 16.5L9.83333 13.1667M13.1667 16.5L16.5 13.1667M4.83333 1.5L4.83333 11.5M4.83333 1.5L1.5 4.83333M4.83333 1.5L8.16666 4.83333" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
        <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Sort By</div>
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>
    </div>
    {/* filter */}
  
  <div onClick={()=>{
      if(option2){
        setoption2(false)
      } else {
        setoption2(true)
      }
    }} className="justify-end items-center gap-2 flex cursor-pointer">
    <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
        <div data-svg-wrapper className="relative ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3334 2.5H1.66675L8.33342 10.3833V15.8333L11.6667 17.5V10.3833L18.3334 2.5Z" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Filter By</div>
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>
        
    </div>

    <div className="text-[#7217b8] text-sm font-medium font-['Mulish'] cursor-pointer leading-[21px]" onClick={()=>{
      setdis(true)
    }}>View All</div>

    {/* nav */}
<div
      className="h-[259px] flex-col justify-start items-start inline-flex absolute top-[9%] z-[999] bg-white right-[10%] mt-6 cursor-pointer"
      style={{ display: option2 ? "inline-flex" : "none" }}
    >
      {filteroptions.map((item, index) => {
        // Show the icon if no option is selected (initial state) OR if this is the selected option.
        const showIcon =
          selectedOption === null ? true : selectedOption === index

        return (
          <div
            key={index}
            className="self-stretch h-[37px] px-3 py-2 hover:bg-[#333333]/10 bg-white justify-start items-center gap-2 inline-flex"
            onClick={() => {
              // If the option is already selected, unselect it (optional behavior)
              // Otherwise, set the clicked option as selected.
              setSelectedOption(index);
            }}
          >
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {item.label}
              </div>
              {showIcon && (
                <div data-svg-wrapper className="relative">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                      stroke="#565656"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>




<div
      style={{ display: option1 ? "inline-flex" : "none" }}
      className="w-[129px] h-[74px] flex-col bg-white justify-start items-start inline-flex absolute top-[9%] right-[24%] mt-6 cursor-pointer"
    >
      {sortOptions.map((item, index) => {
        // When no option is selected, show the check mark on all items.
        // Once an option is selected, show the icon only on that option.
        const showIcon = selectedSortOption === null ? true : selectedSortOption === index;
        return (
          <div
            key={index}
            onClick={() => {
              
              setSelectedSortOption(index);
            }}
            className="self-stretch hover:bg-[#333333]/10 h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex"
          >
            <div className="grow shrink basis-0 h-[21px] flex justify-between items-center">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {item.label}
              </div>
              {showIcon && (
                <div data-svg-wrapper className="relative">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                      stroke="#565656"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>

  </div>
{/* Activity */}
<div className="self-stretch justify-start items-start inline-flex">
      
      {/* Description Column */}
      <div className="w-[359px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="w-5 h-5 relative">
              <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-[#e4e4e4]" />
            </div>
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Description
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="w-5 h-5 relative">
                <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-[#e4e4e4]" />
              </div>
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Category Column */}
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Category
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.category}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Status Column */}
      <div className="w-[154px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Status
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div
                className={`px-2 rounded-md border text-sm font-medium leading-[21px] ${
                  row.status === "Pending"
                    ? "bg-[#ffdb43]/10 border-[#ffeda1] text-[#ae8c00]"
                    : row.status === "Overdue"
                    ? "bg-[#fb3748]/10 border-[#fdafb6] text-[#dd0417]"
                    : row.status === "In Progress"
                    ? "bg-[#b5e45e]/10 border-[#e1f4bf] text-[#5f8717]"
                    : row.status === "Successful"
                    ? "bg-[#1fc16b]/10 border-[#adf2cd] text-[#16884b]"
                    : ""
                }`}
              >
                {row.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Date Column */}
      <div className="w-[154px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Date
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Action Column */}
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Action
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="px-1 flex justify-center  py-1 w-[8.5rem] bg-[#7217b8] rounded-lg text-white text-sm font-medium leading-[21px] mr-[1rem]">
                {row.action}
              </div>
              <div data-svg-wrapper className="relative cursor-pointer">
                <svg onClick={()=>{
                  if(menu === null){
                    setmenu(idx)
                  }else if(menu !== idx){
                    setmenu(idx)
                  }
                  else{
                    setmenu(null)
                  }
                }}
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 13C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11C18.9477 11 18.5 11.4477 18.5 12C18.5 12.5523 18.9477 13 19.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 13C6.05228 13 6.5 12.5523 6.5 12C6.5 11.4477 6.05228 11 5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* manage */}
                <div className="w-[129px] h-[37px] absolute right-[110%] top-[-23%] z-[99] bg-white rounded-[4px] overflow-hidden" style={{display: menu === idx ? 'block' : 'none'}}>
                  <div className="w-full h-full px-3 py-2 bg-[#333333]/10 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                      Manage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
</div>
{display ?
<Popup display={setdis} /> : ""

}
            </div>)
}


  let Popup = ({ display })=>{
  // let [option, setoption] = useState(false)
  let [option1, setoption1] = useState(false)
  let [option2, setoption2] = useState(false)
  let [menu, setmenu] = useState(null)


  const tableRows = [
    {
      description: "Identity Verification For CUST001",
      category: "Customer",
      status: "Pending",
      date: "27/12/2024",
      action: "Verify Customer"
    },
    {
      description: "Overdue Payment of ₦400,000 For CUST037",
      category: "Payment",
      status: "Overdue",
      date: "26/12/2024",
      action: "Alert Customer"
    },
    {
      description: "10 Items Pending Delivery",
      category: "Orders",
      status: "In Progress",
      date: "22/12/2024",
      action: "Track Shipment"
    },
    {
      description: "Automated Payment Reminder Sent to CUST568",
      category: "Communication",
      status: "Successful",
      date: "22/12/2024",
      action: "Monitor Response"
    },
    {
      description: "₦400,000 Loan Application pending for CUST137",
      category: "Loan",
      status: "Pending",
      date: "16/12/2024",
      action: "Approve Loan"
    }
  ];
  
  const filteroptions = [
    { label: "All" },
    { label: "Communications" },
    { label: "Customers" },
    { label: "Inventory" },
    { label: "Loan" },
    { label: "Orders" },
    { label: "Payment" },
  ];

  const [selectedOption, setSelectedOption] = useState(0);


  const sortOptions = [
    { label: "Most Recent" },
    { label: "Oldest" },
  ];


const [selectedSortOption, setSelectedSortOption] = useState(0);


  return (<div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-[#333333]/30 backdrop-blur-lg">
    <div className="w-[80%] h-[447px] bg-[#f6f6f6] rounded-xl shadow-[0px_16px_30px_0px_rgba(88,92,95,0.16)] border border-[#e4e4e4] flex-col justify-start items-start inline-flex overflow-hidden  mt-6 relative">
  <div className="self-stretch h-[72px] px-6 py-[3px] bg-[#f6f6f6] border-b border-[#d3d3d3] justify-start items-center gap-4 inline-flex overflow-hidden">
    <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
      <div className="text-[#333333] text-lg font-bold font-['Mulish'] leading-normal tracking-tight">Pending Activities</div>
      <div className="px-1 bg-[#ffdb43] rounded-[999px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="text-[#333333] text-sm font-medium font-['Mulish'] leading-[21px]">12</div>
      </div>
    </div>
    {/* sort */}
    <div onClick={()=>{
      if(option1){
        setoption1(false)
      } else {
        setoption1(true)
      }
    }} className="justify-end items-center gap-2 flex cursor-pointer">
      <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[2.50px] top-[2.50px] absolute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1667 16.5L13.1667 6.5M13.1667 16.5L9.83333 13.1667M13.1667 16.5L16.5 13.1667M4.83333 1.5L4.83333 11.5M4.83333 1.5L1.5 4.83333M4.83333 1.5L8.16666 4.83333" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
        <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Sort By</div>
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>
    </div>
    {/* filter */}
  
  <div onClick={()=>{
      if(option2){
        setoption2(false)
      } else {
        setoption2(true)
      }
    }} className="justify-end items-center gap-2 flex cursor-pointer">
    <div className="px-3 py-2 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex overflow-hidden">
        <div data-svg-wrapper className="relative ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3334 2.5H1.66675L8.33342 10.3833V15.8333L11.6667 17.5V10.3833L18.3334 2.5Z" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">Filter By</div>
        <div className="w-5 h-5 relative bg-white/0">
          <div className="w-5 h-5 left-0 top-0 absolute bg-white/0" />
          <div data-svg-wrapper className="left-[5px] top-[7.50px] absolute">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1.5L6 6.5L1 1.5" stroke="#565656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>
        
    </div>
{/* XXX */}
<div data-svg-wrapper className="relative cursor-pointer" onClick={()=>
{
  display(false)
}}>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="15" fill="#8C8C8C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 13.9898L18.7806 10.2092C19.0596 9.93026 19.5118 9.93026 19.7908 10.2092C20.0697 10.4882 20.0697 10.9404 19.7908 11.2194L16.0102 15L19.7908 18.7806C20.0697 19.0596 20.0697 19.5118 19.7908 19.7908C19.5118 20.0697 19.0596 20.0697 18.7806 19.7908L15 16.0102L11.2194 19.7908C10.9404 20.0697 10.4882 20.0697 10.2092 19.7908C9.93026 19.5118 9.93026 19.0596 10.2092 18.7806L13.9898 15L10.2092 11.2194C9.93026 10.9404 9.93026 10.4882 10.2092 10.2092C10.4882 9.93026 10.9404 9.93026 11.2194 10.2092L15 13.9898Z" fill="white"/>
</svg>
</div>

    {/* nav */}
<div
      className="h-[259px] flex-col justify-start items-start inline-flex absolute top-[9%] z-[999] bg-white right-[10%] mt-6 cursor-pointer"
      style={{ display: option2 ? "inline-flex" : "none" }}
    >
      {filteroptions.map((item, index) => {
        // Show the icon if no option is selected (initial state) OR if this is the selected option.
        const showIcon =
          selectedOption === null ? true : selectedOption === index

        return (
          <div
            key={index}
            className="self-stretch h-[37px] px-3 py-2 hover:bg-[#333333]/10 bg-white justify-start items-center gap-2 inline-flex"
            onClick={() => {
              // If the option is already selected, unselect it (optional behavior)
              // Otherwise, set the clicked option as selected.
              setSelectedOption(index);
            }}
          >
            <div className="grow shrink basis-0 h-[21px] justify-between items-center flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {item.label}
              </div>
              {showIcon && (
                <div data-svg-wrapper className="relative">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                      stroke="#565656"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>




<div
      style={{ display: option1 ? "inline-flex" : "none" }}
      className="w-[129px] h-[74px] flex-col bg-white justify-start items-start inline-flex absolute top-[9%] right-[24%] mt-6 cursor-pointer"
    >
      {sortOptions.map((item, index) => {
        // When no option is selected, show the check mark on all items.
        // Once an option is selected, show the icon only on that option.
        const showIcon = selectedSortOption === null ? true : selectedSortOption === index;
        return (
          <div
            key={index}
            onClick={() => {
              
              setSelectedSortOption(index);
            }}
            className="self-stretch hover:bg-[#333333]/10 h-[37px] px-3 py-2 bg-white justify-start items-center gap-2 inline-flex"
          >
            <div className="grow shrink basis-0 h-[21px] flex justify-between items-center">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {item.label}
              </div>
              {showIcon && (
                <div data-svg-wrapper className="relative">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 10.5L7.91667 14.6667L16.25 6.33333"
                      stroke="#565656"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>

  </div>
{/* Activity */}
<div className="self-stretch justify-start items-start inline-flex">
      
      {/* Description Column */}
      <div className="w-[359px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="w-5 h-5 relative">
              <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-[#e4e4e4]" />
            </div>
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Description
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="w-5 h-5 relative">
                <div className="w-5 h-5 left-0 top-0 absolute bg-white rounded-md border border-[#e4e4e4]" />
              </div>
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Category Column */}
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Category
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.category}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Status Column */}
      <div className="w-[154px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Status
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div
                className={`px-2 rounded-md border text-sm font-medium leading-[21px] ${
                  row.status === "Pending"
                    ? "bg-[#ffdb43]/10 border-[#ffeda1] text-[#ae8c00]"
                    : row.status === "Overdue"
                    ? "bg-[#fb3748]/10 border-[#fdafb6] text-[#dd0417]"
                    : row.status === "In Progress"
                    ? "bg-[#b5e45e]/10 border-[#e1f4bf] text-[#5f8717]"
                    : row.status === "Successful"
                    ? "bg-[#1fc16b]/10 border-[#adf2cd] text-[#16884b]"
                    : ""
                }`}
              >
                {row.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Date Column */}
      <div className="w-[154px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Date
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="grow shrink basis-0 text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                {row.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Action Column */}
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-11 p-3 bg-[#e4e4e4]/50 border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden">
          <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
            <div className="grow shrink basis-0 text-[#333333] text-xs font-semibold font-['Mulish'] leading-normal tracking-tight">
              Action
            </div>
          </div>
        </div>
        {tableRows.map((row, idx) => (
          <div
            key={idx}
            className="self-stretch h-[54px] p-3 bg-[#f6f6f6] border-b border-[#e4e4e4] justify-start items-center gap-3 inline-flex overflow-hidden"
          >
            <div className="grow shrink basis-0 h-[30px] justify-start items-center gap-3 flex">
              <div className="px-1 flex justify-center  py-1 w-[8.5rem] bg-[#7217b8] rounded-lg text-white text-sm font-medium leading-[21px] mr-[1rem]">
                {row.action}
              </div>
              <div data-svg-wrapper className="relative cursor-pointer">
                <svg onClick={()=>{
                  if(menu === null){
                    setmenu(idx)
                  }else if(menu !== idx){
                    setmenu(idx)
                  }
                  else{
                    setmenu(null)
                  }
                }}
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 13C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11C18.9477 11 18.5 11.4477 18.5 12C18.5 12.5523 18.9477 13 19.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 13C6.05228 13 6.5 12.5523 6.5 12C6.5 11.4477 6.05228 11 5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13Z"
                    stroke="#565656"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* manage */}
                <div className="w-[129px] h-[37px] absolute right-[110%] top-[-23%] z-[99] bg-white rounded-[4px] overflow-hidden" style={{display: menu === idx ? 'block' : 'none'}}>
                  <div className="w-full h-full px-3 py-2 bg-[#333333]/10 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#565656] text-sm font-medium font-['Mulish'] leading-[21px]">
                      Manage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    {/* prev */}
    <div className="h-[66px] w-full px-6 pt-3 pb-4 bg-[#f6f6f6] border-t justify-between items-center inline-flex">
    <div className="px-3 py-1.5 bg-white rounded-lg border border-[#e4e4e4] justify-center items-center gap-2 flex">
        <div data-svg-wrapper className="relative">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8334 10H4.16671M4.16671 10L10 4.16667M4.16671 10L10 15.8333" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="text-[#565656] text-base font-medium font-['Mulish'] leading-normal">Previous</div>
    </div>
    <div className="justify-start items-start gap-0.5 flex">
        <div className="w-10 h-10 bg-[#e4e4e4] rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#7217b8] text-sm font-medium font-['Mulish'] leading-[21px]">1</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">2</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">3</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">...</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">8</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">9</div>
            </div>
        </div>
        <div className="w-10 h-10 rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-10 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
                <div className="text-[#667084] text-sm font-medium font-['Mulish'] leading-[21px]">10</div>
            </div>
        </div>
    </div>
    <div className="px-3 py-1.5 rounded-lg border border-[#7217b8] justify-center items-center gap-2 flex">
        <div className="text-[#7217b8] text-base font-medium font-['Mulish'] leading-normal">Next</div>
        <div data-svg-wrapper className="relative">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="#7217B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    </div>
</div>
</div>

</div>
)
}


export default Dashboard;
