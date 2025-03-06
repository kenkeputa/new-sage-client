import React, {useContext} from "react";
import {Auth} from "../App.jsx";

function Header(){

    let {isLogin, setLogin} =  useContext(Auth);
    return (<div className='h-[68px] bg-[#F6F6F6] w-full border-b-[1px] border-b-[#C1C1C1] flex items-center'>
            <div className="w-[264px] h-[90%] flex items-center gap-[10px] ml-6">
                <div className="bg-[#B974EE] rounded-full w-[40px] h-[40px]"></div>
                <span className="text-[22px] font-[700] text-[#333333] font-[Mulish]">Sage</span>
            </div>
            {isLogin ? <>
            <span className="font-[700] font-[Mulish] mr-auto">Good Morning, Daniel Stephens</span>
            <div className="h-[90%] flex justify-evenly items-center  mr-6 gap-1">
                    <div className=" border-[1px] border-[#C1C1C1] w-[353px] h-[40px] rounded-full flex items-center justify-center">
                        <input type="text" placeholder="Search anything..." className="w-[90%] pl-4 border-0 outline-0" />
                        <svg width="24" className="mr-3" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0004 21.0004L16.6504 16.6504M11 7C13.2091 7 15 8.79086 15 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#9D9D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                    <div className="p-[3.2px] flex justify-center items-center">
                        <div>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                                <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                    </div>
                    <div className="w-max flex gap-2 items-center text-[14px]">
                        <img src="/image.png" className="border-[#AFAFAF] border-[1px] rounded-full" alt="" />
                        <div className="flex-col flex items-center">
                            <span className="text-[14px] mb-[3px]">Daniel Stephens</span>
                            <span className="text-[12px] bg-[#831AD31A] py-[2px] px-[8px] rounded-[8px]">Super Admin</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

            </div>
            </>:""}

    </div>)
}
export default Header;
