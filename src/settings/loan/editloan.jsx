import React from 'react'
import { SelectChart } from '../../dashboard/dashboard'
import { useNavigate } from 'react-router-dom';


let Dropdown = ({ text, width })=>{
    //  let text = props.text;
        
    return (<div className={`h-[37px] flex justify-between items-center  relative px-[1%]`} style={{width: width }}>
        <div  className='w-full bg-[#FFFFFF] h-full rounded-[8px] gap-[8px] mt-2 items-center  flex justify-between cursor-pointer border border-[#E4E4E4]'>
            <span className="text-[14px]  ml-3 leading-[21px] text-[#8C8C8C]">{text}</span>
            <svg style={{transform
    :"rotate(-90deg)",transition:'0.3s all'}} xmlns="http://www.w3.org/2000/svg" width="19" className="mr-3 size-5 text-[#8C8C8C] " height="19" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
    
    </div>)
    }

function Adduser() {
    let navigate = useNavigate();

    return (<div className='w-full h-full flex flex-col items-center overflow-scroll'>
                <div className='h-full w-[70%] mt-4'>
                    <div className='flex justify-between items-center'>
                        <div className='w-full flex '>
                            <svg onClick={()=>{
                                navigate('/settings/loan')
                            }} className='mr-7 cursor-pointer' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.66667 13H18.3333M7.66667 13L13 18.3333M7.66667 13L13 7.66667M6.33333 25H19.6667C22.6122 25 25 22.6122 25 19.6667V6.33333C25 3.38781 22.6122 1 19.6667 1H6.33333C3.38781 1 1 3.38781 1 6.33333V19.6667C1 22.6122 3.38781 25 6.33333 25Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Create Loan Options</span>
                        </div>
                        
                    </div>
                <div className='w-full h-max mt-4 rounded-[8px] overflow-hidden border border-[#E4E4E4]'>
                        
                    
                    <div className="h-fit  w-full">
                        <div className="w-full h-[69px] bg-[rgb(246,246,246)] flex justify-between px-4 items-center">
                            <div>
                                <span className='font-[700] text-[18px]'>Loan Information</span>
                                
                            </div>
                            {/* <SelectChart text="Active" /> */}
                        </div>
                        <div className='h-max w-full flex gap-3 px-4 flex-wrap mt-4'>
                            
                               
                            
                            <div className='w-[50%] '>
                                <span className='ml-[0.6rem]'>Tenure Options <span className='text-red-600'>*</span></span>
                                <Dropdown text="Nigeria" width='100%' />
                            </div> 
                            <div className='w-[46%] h-[90px]'>
                                <span>Interest Rates (%) <span className='text-red-600'>*</span></span>
                                <input type="text" placeholder='Define rate per tenure' className='w-[100%] border-[#E4E4E4] border rounded-sm h-[38px] pl-2 mt-1 outline-0'/>
                            </div>    
                            
                        </div>
                        <div className='h-max w-full flex gap-3 px-4 flex-wrap mt-4 mb-6'>
                        <div className='w-[99%]'>
                                <span className='ml-[0.6rem]'>Repayment Terms<span className='text-red-600'>*</span></span>
                                <Dropdown text="Lagos" width='100%' />
                            </div> 
                               
                        </div>
                    </div>        
                    <div className="w-full h-[3rem]  flex justify-end items-center border-t pr-2 border-t-[#E4E4E4]">
                       <div className="flex gap-2 py-2">
                            <button 
                            onClick={()=>{
                                
                                navigate('/customers');

                            }}
                            className='px-3 rounded-sm cursor-pointer h-[36px] w-[87px] border py-3 border-[#E4E4E4] text-center flex justify-center items-center cursor-pointer'>Cancel</button>
                            <button className='px-3 h-[36px] py-3 bg-[#7217B8]  flex justify-center items-center rounded-sm gap-2 cursor-pointer text-white whitespace-nowrap'>
                                <span>Save Changes</span> 
                            
                          </button>
                       </div>
                    </div>
                </div>
            </div>
            </div>);
}

export default Adduser;
