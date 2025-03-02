import React from 'react'
import { useNavigate } from 'react-router-dom';
import Activity from './activities.jsx'
function Customer() {
    let navigate = useNavigate();
    return ( <div className='w-[85%] h-full px-[2%] overflow-scroll'>
        <div className='bg-[rgba(255,251,235,1)] w-[100%] h-[82px] mt-8 flex gap-4 relative'>
        <svg className='mt-3 ml-4' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99902 6.49991V9.83324M9.99902 13.1666H10.0074M8.57465 2.21659L1.51632 13.9999C1.37079 14.2519 1.29379 14.5377 1.29298 14.8287C1.29216 15.1197 1.36756 15.4059 1.51167 15.6587C1.65579 15.9115 1.86359 16.1222 2.11441 16.2698C2.36523 16.4174 2.65032 16.4967 2.94132 16.4999H17.058C17.349 16.4967 17.6341 16.4174 17.8849 16.2698C18.1357 16.1222 18.3435 15.9115 18.4876 15.6587C18.6317 15.4059 18.7071 15.1197 18.7063 14.8287C18.7055 14.5377 18.6285 14.2519 18.483 13.9999L11.4247 2.21659C11.2761 1.97168 11.0669 1.76919 10.8173 1.62866C10.5677 1.48813 10.2861 1.41431 9.99965 1.41431C9.71321 1.41431 9.43159 1.48813 9.18199 1.62866C8.93238 1.76919 8.72321 1.97168 8.57465 2.21659Z" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className='mt-2 flex flex-col'>
            <span className='text-[rgba(146,64,14,1)]  text-[14px] font-[700]'>Important reminder!!</span>
            <span className='text-[rgba(180,83,9,1)]'>Verify customer’s identity and employment status before approving a loan.</span>
        </div>
        <div className='absolute right-3 top-3'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1L1 11M1 1L11 11" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </div>
        </div>
        <div className="mt-[2rem] flex items-center justify-between mb-4">
                    <span className="font-[700] text-[26px] text-[#333333]">Customers</span>
        
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
                navigate('/customers/new')
            }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99935 1.66675V13.3334M1.16602 7.50008H12.8327" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<span className='text-[16px]'>Add New Customer</span>
</button>
        </div>
        </div>
        <div className="w-full flex gap-[24px]">
    <div className="flex flex-col h-[125px] w-[267.5px] bg-[#831AD31A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center rounded-full size-[40px]">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_660_93738)">
<path d="M14 18.6667C13.077 18.6667 12.1748 18.393 11.4073 17.8802C10.6399 17.3674 10.0418 16.6386 9.68856 15.7859C9.33535 14.9331 9.24294 13.9948 9.423 13.0896C9.60307 12.1843 10.0475 11.3528 10.7002 10.7002C11.3528 10.0475 12.1843 9.60307 13.0896 9.423C13.9948 9.24294 14.9331 9.33536 15.7859 9.68856C16.6386 10.0418 17.3674 10.6399 17.8802 11.4073C18.393 12.1748 18.6667 13.077 18.6667 14C18.6667 15.2377 18.175 16.4247 17.2998 17.2998C16.4247 18.175 15.2377 18.6667 14 18.6667ZM6.63017 18.6667H1.16667C0.857247 18.6667 0.560501 18.5438 0.341709 18.325C0.122916 18.1062 0 17.8094 0 17.5C0.0110551 15.8248 0.620345 14.2087 1.71798 12.9431C2.81562 11.6775 4.32935 10.8458 5.98617 10.598C6.17869 10.571 6.3749 10.5926 6.55698 10.6607C6.73905 10.7289 6.90121 10.8414 7.02871 10.9882C7.15622 11.1349 7.24503 11.3112 7.28709 11.501C7.32914 11.6908 7.32309 11.8881 7.2695 12.075C7.09071 12.701 7.00001 13.3489 7 14C7.00034 15.0381 7.23398 16.0627 7.68367 16.9983C7.76825 17.1759 7.80655 17.372 7.79503 17.5684C7.78351 17.7647 7.72253 17.955 7.61776 18.1214C7.51298 18.2879 7.36783 18.4252 7.19577 18.5205C7.02372 18.6158 6.83036 18.6661 6.63367 18.6667H6.63017ZM19.8333 28H8.16667C7.85725 28 7.5605 27.8771 7.34171 27.6583C7.12292 27.4395 7 27.1428 7 26.8333C7 24.9768 7.7375 23.1963 9.05025 21.8836C10.363 20.5708 12.1435 19.8333 14 19.8333C15.8565 19.8333 17.637 20.5708 18.9497 21.8836C20.2625 23.1963 21 24.9768 21 26.8333C21 27.1428 20.8771 27.4395 20.6583 27.6583C20.4395 27.8771 20.1428 28 19.8333 28ZM21 9.33334C20.077 9.33334 19.1748 9.05964 18.4073 8.54686C17.6399 8.03408 17.0418 7.30525 16.6886 6.45253C16.3354 5.5998 16.2429 4.66149 16.423 3.75625C16.6031 2.851 17.0475 2.01948 17.7002 1.36684C18.3528 0.714192 19.1843 0.269735 20.0896 0.0896708C20.9948 -0.0903936 21.9331 0.00202198 22.7859 0.355231C23.6386 0.70844 24.3674 1.30658 24.8802 2.07401C25.393 2.84144 25.6667 3.74369 25.6667 4.66667C25.6667 5.90435 25.175 7.09133 24.2998 7.9665C23.4247 8.84167 22.2377 9.33334 21 9.33334ZM7 9.33334C6.07702 9.33334 5.17477 9.05964 4.40734 8.54686C3.63991 8.03408 3.04177 7.30525 2.68856 6.45253C2.33535 5.5998 2.24294 4.66149 2.423 3.75625C2.60307 2.851 3.04752 2.01948 3.70017 1.36684C4.35281 0.714192 5.18433 0.269735 6.08958 0.0896708C6.99482 -0.0903936 7.93313 0.00202198 8.78586 0.355231C9.63858 0.70844 10.3674 1.30658 10.8802 2.07401C11.393 2.84144 11.6667 3.74369 11.6667 4.66667C11.6667 5.90435 11.175 7.09133 10.2998 7.9665C9.42466 8.84167 8.23768 9.33334 7 9.33334ZM26.8333 18.6667H21.3698C21.1731 18.6661 20.9798 18.6158 20.8077 18.5205C20.6357 18.4252 20.4905 18.2879 20.3857 18.1214C20.281 17.955 20.22 17.7647 20.2085 17.5684C20.1969 17.372 20.2353 17.1759 20.3198 16.9983C20.7683 16.0625 21.0008 15.0378 21 14C20.9981 13.3487 20.9054 12.7008 20.7247 12.075C20.6708 11.8876 20.6647 11.6897 20.707 11.4993C20.7493 11.309 20.8387 11.1323 20.9669 10.9853C21.0952 10.8384 21.2582 10.726 21.441 10.6583C21.6239 10.5907 21.8209 10.5699 22.0138 10.598C23.6706 10.8458 25.1844 11.6775 26.282 12.9431C27.3797 14.2087 27.9889 15.8248 28 17.5C28 17.8094 27.8771 18.1062 27.6583 18.325C27.4395 18.5438 27.1428 18.6667 26.8333 18.6667Z" fill="#511082"/>
</g>
<defs>
<clipPath id="clip0_660_93738">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
                    </div>
                        <span className="text-[16px] font-[500]"></span>
                    </div>
                    <span className="text-[12px] mt-1 font-[600]">Total Customers</span>
                    <span className="text-[26px] font-[700]">654</span>
                    {/* <div className="h-[24px] w-[83px] bg-[#1FC16B1A] border-[#ADF2CD] border px-[8px] gap-[4px] flex items-center rounded-md">
                        
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1H19M19 1V7M19 1L10 10L6 6L1 11" stroke="#16884B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>+12%</span>
                    </div> */}
                </div>
                <div className="flex flex-col h-[120px] w-[267.5px] bg-[#B5E45E1A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#E1F4BF80] rounded-full size-[40px]">

                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 21V19C17.5 17.9391 17.0786 16.9217 16.3284 16.1716C15.5783 15.4214 14.5609 15 13.5 15H6.5C5.43913 15 4.42172 15.4214 3.67157 16.1716C2.92143 16.9217 2.5 17.9391 2.5 19V21M16.525 3.30078C17.9777 3.90028 19.0001 5.33068 19.0001 6.99987C19.0001 8.68196 17.9618 10.1215 16.4912 10.7127M22.5 20.9999V18.9999C22.4993 18.1136 22.2044 17.2527 21.6614 16.5522C21.1184 15.8517 20.3581 15.3515 19.5 15.1299M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="#5F8717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] mt-1 font-[500]"></span>
                    </div>
                    <span className="text-[12px] mt-1 font-[600]">Customers</span>
                    <span className="text-[26px] font-[700]">120</span>
                    
                </div>
                <div className="flex flex-col h-[120px] w-[267.5px] bg-[#FFDB431A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#FFEDA180] rounded-full size-[40px]">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 5V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5M7 15H19C20.1046 15 21 14.1046 21 13V7C21 5.89543 20.1046 5 19 5H7C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15ZM15 10C15 11.1046 14.1046 12 13 12C11.8954 12 11 11.1046 11 10C11 8.89543 11.8954 8 13 8C14.1046 8 15 8.89543 15 10Z" stroke="#896F00" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] font-[500]"></span>
                    </div>
                    <span className="text-[12px] mt-1 font-[600]">45 Customers</span>
                    <span className="text-[26px] font-[700]">60</span>
                    
                </div>
                <div className="flex flex-col h-[120px] w-[267.5px] bg-[#FB37481A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]" style={{boxShadow: "0px 16px 30px 0px #585C5F29"}}>
                    <div className="flex items-center gap-1.5 ">
                    <div className="flex justify-center items-center bg-[#FDAFB680] rounded-full size-[40px]">
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 13H5.5M17.5 9H5.5M12.5 5H5.5M3.5 17H19.5C20.6046 17 21.5 16.1046 21.5 15V3C21.5 1.89543 20.6046 1 19.5 1H3.5C2.39543 1 1.5 1.89543 1.5 3V15C1.5 16.1046 2.39543 17 3.5 17Z" stroke="#B60413" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    </div>
                        <span className="text-[16px] font-[500]"></span>
                    </div>
                    <span className="text-[12px] font-[600] mt-1">Applications Awaiting Review</span>
                    <span className="text-[26px] font-[700]">25</span>
                    
                
                
                </div>
    </div> 
    <Activity />
    
    </div>);
}

export default Customer;

