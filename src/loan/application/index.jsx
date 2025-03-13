

import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AllActivity from "./allactivities.jsx"
import Identity from "./identityactivities.jsx"
import Employment from "./employment_activities.jsx"
import Loan_Activity from "./loan_activities.jsx"
import { Auth } from "../../App.jsx"

function Repayment() {
  const navigate = useNavigate()
  const [nav, setnav] = useState(["All", "Identity Verification", "Employment Verification", "Loan Approval"])
  const [index, setindex] = useState(0)
  const { isLoading, setLoader } = useContext(Auth)
  const [task, settask] = useState(0)
  const [tobecomplete, setcomplete] = useState(2)
  const [main, setmain] = useState([])
// console.log(main)
  useEffect(() => {
    // Reset main state to avoid duplication
    setmain([])

    // First fetch request
    fetch("https://sage-admin-backend.vercel.app/api/loan/app/all")
      .then((e) => e.json())
      .then((e) => {
        console.log("All loans data:", e)
        // Use functional update to avoid dependency on main
        setmain((prevMain) => {
          // Store the data as the first element in the main array
          return [[e]]
        })
        settask((prevTask) => prevTask + 1)
      })
      .catch((error) => {
        console.error("Error fetching all loans:", error)
      })

    // Second fetch request
    fetch("https://sage-admin-backend.vercel.app/api/loan/app/employment")
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

    // Uncomment if you need the third fetch request
    // fetch('https://sage-admin-backend.vercel.app/api/loan/repayment/overdue')
    //     .then(e => e.json())
    //     .then(e => {
    //         console.log('Overdue data:', e);
    //         setmain(prevMain => [...prevMain, [e]]);
    //         settask(prevTask => prevTask + 1);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching overdue data:', error);
    //     });
  }, []) // Empty dependency array to run only once

  useEffect(() => {
    if (task === tobecomplete) {
      setLoader(false)
    } else {
      setLoader(true)
    }
  }, [task, tobecomplete, setLoader])

  return (
    <div className="w-[85%] h-full px-[2%] overflow-scroll">
      <div className="mt-[2rem] flex items-center justify-between mb-4">
        <span className="font-[700] text-[26px] text-[#333333]">Loan Repayment</span>
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
        </div>
      </div>

      {/* Stats cards */}
      <div className="w-full flex gap-[24px]">
        {/* Card 1 */}
        <div
          className="flex flex-col h-[125px] w-[267.5px] bg-[#831AD31A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center rounded-full size-[40px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 8.66667V7.58333C0 4.59658 2.42992 2.16667 5.41667 2.16667H6.5V1.08333C6.5 0.485333 6.98533 0 7.58333 0C8.18133 0 8.66667 0.485333 8.66667 1.08333V2.16667H17.3333V1.08333C17.3333 0.485333 17.8176 0 18.4167 0C19.0158 0 19.5 0.485333 19.5 1.08333V2.16667H20.5833C23.5701 2.16667 26 4.59658 26 7.58333V8.66667H0ZM20.9408 15.8459C21.3547 15.4429 21.7761 14.9641 22.0805 14.4441C22.4553 13.8049 21.9559 13 21.2149 13H17.784C17.043 13 16.5447 13.8049 16.9184 14.4441C17.2228 14.9641 17.6443 15.4429 18.0581 15.8459C15.3552 16.6898 12.9989 19.7253 12.9989 22.7652C12.9989 24.5516 14.4538 26 16.2489 26H22.7489C24.544 26 25.9989 24.5516 25.9989 22.7652C25.9989 19.7253 23.6448 16.6898 20.9408 15.8459ZM10.8333 22.7652C10.8333 19.8434 12.4648 16.8892 14.8417 15.1114C14.5015 14.2458 14.5676 13.2524 15.0421 12.4258C15.6054 11.4433 16.6552 10.8333 17.784 10.8333H0V20.5833C0 23.5701 2.42992 26 5.41667 26H11.9394C11.2548 25.0954 10.8333 23.9828 10.8333 22.7652Z"
                  fill="#7217B8"
                />
              </svg>
            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] mt-1 font-[600]">Total Active Loans</span>
          <span className="text-[26px] font-[700]">2,350</span>
        </div>

        {/* Card 2 */}
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
          <span className="text-[12px] mt-1 font-[600]">Total Amount Repaid</span>
          <span className="text-[26px] font-[700]">N40,800,000</span>
        </div>

        {/* Card 3 */}
        <div
          className="flex flex-col h-[120px] w-[267.5px] bg-[#FFDB431A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center bg-[#FFEDA180] rounded-full size-[40px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0142 20.9289C17.0748 21.3969 18.2448 21.6623 19.4765 21.6656C19.483 22.6915 19.1407 23.6947 18.4582 24.4877C17.6295 25.4497 16.428 26 15.1605 26H4.33805C3.07055 26 1.86913 25.4475 1.04146 24.4855C0.225712 23.5387 -0.136121 22.2928 0.0480458 21.0654C0.487879 18.1415 2.09013 15.4343 4.8158 13.0011C2.08905 10.5668 0.486796 7.85958 0.0469624 4.93567C-0.137204 3.70825 0.225712 2.46242 1.04038 1.51558C1.86913 0.5525 3.07055 0 4.33805 0H15.1605C16.428 0 17.6295 0.550333 18.4582 1.51233C19.1407 2.30425 19.483 3.3085 19.4765 4.33442C14.7088 4.34742 10.8337 8.229 10.8337 13C10.8337 13.7107 10.929 14.3975 11.0915 15.0594L10.4285 14.5308C10.0331 14.2166 9.47521 14.2166 9.0798 14.5286L8.31713 15.1342C6.63038 16.4678 4.39655 18.6138 3.32838 21.2615C3.19296 21.5963 3.23413 21.9743 3.43455 22.2733C3.63605 22.5713 3.97296 22.75 4.33263 22.75H15.166C15.5267 22.75 15.8636 22.5723 16.064 22.2733C16.2655 21.9754 16.3056 21.5952 16.1702 21.2615C16.1247 21.1478 16.0651 21.0416 16.0153 20.93L16.0142 20.9289ZM26.0004 13C26.0004 16.5848 23.0851 19.5 19.5004 19.5C15.9156 19.5 13.0004 16.5848 13.0004 13C13.0004 9.41525 15.9156 6.5 19.5004 6.5C23.0851 6.5 26.0004 9.41525 26.0004 13ZM21.8913 13.8591L20.5837 12.5515V10.2917C20.5837 9.69367 20.0984 9.20833 19.5004 9.20833C18.9024 9.20833 18.417 9.69367 18.417 10.2917V13C18.417 13.2871 18.5308 13.5633 18.7345 13.7659L20.3595 15.3909C20.5707 15.6022 20.848 15.7083 21.1254 15.7083C21.4027 15.7083 21.68 15.6022 21.8913 15.3909C22.3149 14.9673 22.3149 14.2827 21.8913 13.8591ZM6.11688 20.5823H13.3774C12.3764 19.0342 10.8868 17.667 9.75038 16.7613C8.61613 17.6583 7.11571 19.0309 6.11688 20.5823Z"
                  fill="#D3AA00"
                />
              </svg>
            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] mt-1 font-[600]">Total Overdue Loans</span>
          <span className="text-[26px] font-[700]">N10,000</span>
        </div>

        {/* Card 4 */}
        <div
          className="flex flex-col h-[120px] w-[267.5px] bg-[#FB37481A] rounded-[0.5rem] border-[1px] border-[#E4E4E4] px-[16px] py-[6px]"
          style={{ boxShadow: "0px 16px 30px 0px #585C5F29" }}
        >
          <div className="flex items-center gap-1.5 ">
            <div className="flex justify-center items-center bg-[#FDAFB680] rounded-full size-[40px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.25 1.625C16.25 0.728 16.978 0 17.875 0C18.772 0 19.5 0.728 19.5 1.625C19.5 2.522 18.772 3.25 17.875 3.25C16.978 3.25 16.25 2.522 16.25 1.625ZM17.4417 9.425C17.7342 9.64383 18.0754 9.75 18.4156 9.75C18.9096 9.75 19.3971 9.52575 19.7167 9.1L24.5917 2.6C25.1301 1.88175 24.9838 0.863417 24.2667 0.325C23.5495 -0.212333 22.5312 -0.06825 21.9917 0.65L17.1167 7.15C16.5783 7.86825 16.7245 8.88658 17.4417 9.425ZM24.375 6.5C23.478 6.5 22.75 7.228 22.75 8.125C22.75 9.022 23.478 9.75 24.375 9.75C25.272 9.75 26 9.022 26 8.125C26 7.228 25.272 6.5 24.375 6.5ZM24.9167 16.25V21.9375C24.9167 24.2916 21.9559 26 17.875 26C15.6249 26 13.7193 25.4789 12.4583 24.6177C11.1973 25.4789 9.29175 26 7.04167 26C2.96075 26 0 24.2916 0 21.9375V5.41667C0 2.9055 2.96075 1.08333 7.04167 1.08333C11.1226 1.08333 14.0833 2.9055 14.0833 5.41667V12.5428C15.1591 12.1442 16.4461 11.9167 17.875 11.9167C21.9559 11.9167 24.9167 13.7388 24.9167 16.25ZM3.28142 5.41667C3.55875 5.7785 4.87067 6.5 7.04167 6.5C9.21267 6.5 10.5246 5.7785 10.8019 5.41667C10.5246 5.05483 9.21267 4.33333 7.04167 4.33333C4.87067 4.33333 3.55875 5.05483 3.28142 5.41667ZM10.8333 19.9572C9.75758 20.3558 8.47058 20.5833 7.04167 20.5833C5.61275 20.5833 4.32575 20.3558 3.25 19.9572V21.7923C3.53817 22.0892 4.79483 22.75 7.04167 22.75C9.2885 22.75 10.5452 22.0903 10.8333 21.7923V19.9572ZM10.8333 14.5405C9.75758 14.9392 8.47058 15.1667 7.04167 15.1667C5.61275 15.1667 4.32575 14.9392 3.25 14.5405V16.25C3.38108 16.5078 4.72008 17.3333 7.04167 17.3333C9.334 17.3333 10.6632 16.5306 10.8333 16.1948V14.5405ZM10.8333 9.12383C9.75758 9.5225 8.47058 9.75 7.04167 9.75C5.61275 9.75 4.32575 9.5225 3.25 9.12383V10.8333C3.38108 11.0912 4.72008 11.9167 7.04167 11.9167C9.334 11.9167 10.6632 11.1139 10.8333 10.7781V9.12383ZM14.1148 16.25C14.3921 16.6118 15.704 17.3333 17.875 17.3333C20.046 17.3333 21.3579 16.6118 21.6353 16.25C21.3579 15.8882 20.046 15.1667 17.875 15.1667C15.704 15.1667 14.3921 15.8882 14.1148 16.25ZM21.6667 19.9572C20.5909 20.3558 19.3039 20.5833 17.875 20.5833C16.4461 20.5833 15.1591 20.3558 14.0833 19.9572V21.7923C14.3715 22.0892 15.6282 22.75 17.875 22.75C20.1218 22.75 21.3785 22.0903 21.6667 21.7923V19.9572Z"
                  fill="#FA1024"
                />
              </svg>
            </div>
            <span className="text-[16px] font-[500]"></span>
          </div>
          <span className="text-[12px] font-[600] mt-1">Defaulters Count</span>
          <span className="text-[26px] font-[700]">90</span>
        </div>
      </div>

      {/* Navigation tabs */}
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

      {/* Content based on selected tab */}
      {index === 0 ? (
        <AllActivity datatable={main[0]?.[0]?.record} />
      ) : index === 1 ? (
        <Identity datatable={main[0]?.[0]?.record} />
      ) : index === 2 ? (
        <Employment datatable={main[1]?.[0]?.record} />
      ) : (
        <Loan_Activity datatable={main[0]?.[0]?.record} />
      )}
    </div>
  )
}

export default Repayment

