import { useState } from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    
    return (<div className="w-[250px] flex flex-col items-center h-full border-r border-[#C1C1C1] bg-[#F6F6F6]">
    {/* Top Icon */}
    <div className="w-full">
      <div className="ml-auto w-max rounded-tl rounded-bl">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          color="#831AD31A"
          className="bg-[#831AD31A]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 17L6 12L11 7M18 17L13 12L18 7"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    <div className="w-[100%] flex flex-col gap-1 mt-7 pl-4 rounded-md overflow-y-scroll">
      {/* Dashboard (default active when route is /dashboard) */}
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H9C9.55228 9 10 8.55228 10 8V4C10 3.44772 9.55228 3 9 3Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 3H15C14.4477 3 14 3.44772 14 4V10C14 10.5523 14.4477 11 15 11H20C20.5523 11 21 10.5523 21 10V4C21 3.44772 20.5523 3 20 3Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 15H15C14.4477 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V16C21 15.4477 20.5523 15 20 15Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13H4C3.44772 13 3 13.4477 3 14V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V14C10 13.4477 9.55228 13 9 13Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Dashboard</span>
          </>
        )}
      </NavLink>

      {/* Customers */}
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.025 3.30078C17.4777 3.90028 18.5001 5.33068 18.5001 6.99987C18.5001 8.68196 17.4618 10.1215 15.9912 10.7127"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Customers</span>
          </>
        )}
      </NavLink>

      {/* Loan Application */}
      <NavLink
        to="/loan"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12H8M12 16H8M16 8H8M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Loan</span>
          </>
        )}
      </NavLink>
      <NavLink
        to="/loan/application"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            
            
            <svg width="16" className="my-auto" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H15" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span>Loan Application</span>
          </>
        )}
      </NavLink>
      <NavLink
        to="/loan/repayment"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg width="16" className="my-auto" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H15" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Loan Repayment</span>
          </>
        )}
      </NavLink>

      {/* Inventory */}
      <NavLink
        to="/inventory"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.002 8V5C14.002 2.79086 12.2102 1 10 1C7.78976 1 5.998 2.79086 5.998 5V8M4.00216 21H15.9978C17.8403 21 19.2478 19.3563 18.9634 17.5369L17.4001 7.53687C17.1718 6.07654 15.9133 5 14.4346 5H5.56544C4.08666 5 2.82821 6.07654 2.59992 7.53687L1.03664 17.5369C0.752217 19.3563 2.15974 21 4.00216 21Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Inventory</span>
          </>
        )}
      </NavLink>

      {/* Payments */}
      <NavLink
        to="/payments"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9V7C18 5.89543 17.1046 5 16 5H4C2.89543 5 2 5.89543 2 7V13C2 14.1046 2.89543 15 4 15H6M8 19H20C21.1046 19 22 18.1046 22 17V11C22 9.89543 21.1046 9 20 9H8C6.89543 9 6 9.89543 6 11V17C6 18.1046 6.89543 19 8 19ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Payments</span>
          </>
        )}
      </NavLink>

      {/* Suppliers */}
      <NavLink
        to="/suppliers"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19V14M1 19H21M2 19V3C2 1.89543 2.89543 1 4 1H14C15.1046 1 16 1.89543 16 3V7.5M10 19V10L15 7L20 10V19M6 5H6.01M6 9H6.01M6 13H6.01"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Suppliers</span>
          </>
        )}
      </NavLink>

      {/* Communication */}
      <NavLink
        to="/communication"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 22L1.0149 21.828C0.958852 22.149 1.06274 22.4772 1.29331 22.7075C1.52387 22.9378 1.85219 23.0413 2.17315 22.9849L2 22ZM2.98825 16.3399L3.97335 16.5119C4.00957 16.3044 3.97937 16.0908 3.88707 15.9015L2.98825 16.3399ZM7.64977 21.0067L8.09226 20.11C7.90163 20.0159 7.68599 19.985 7.47662 20.0218L7.64977 21.0067ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13V11ZM12.01 13C12.5623 13 13.01 12.5523 13.01 12C13.01 11.4477 12.5623 11 12.01 11V13ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13V11ZM16.01 13C16.5623 13 17.01 12.5523 17.01 12C17.01 11.4477 16.5623 11 16.01 11V13ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13V11ZM8.01 13C8.56228 13 9.01 12.5523 9.01 12C9.01 11.4477 8.56228 11 8.01 11V13ZM21 12C21 16.9706 16.9706 21 12 21V23C18.0751 23 23 18.0751 23 12H21ZM3 12C3 7.02944 7.02944 3 12 3V1C5.92487 1 1 5.92487 1 12H3ZM12 3C16.9706 3 21 7.02944 21 12H23C23 5.92487 18.0751 1 12 1V3ZM2.9851 22.172L3.97335 16.5119L2.00315 16.1679L1.0149 21.828L2.9851 22.172ZM2.17315 22.9849L7.82292 21.9916L7.47662 20.0218L1.82685 21.0151L2.17315 22.9849ZM3.88707 15.9015C3.3093 14.7168 3 13.419 3 12H1C1 13.7209 1.37767 15.3186 2.08943 16.7782L3.88707 15.9015ZM12 21C10.5626 21 9.28323 20.6976 8.09226 20.11L7.20728 21.9035C8.68139 22.6309 10.2646 23 12 23V21ZM12 13H12.01V11H12V13ZM16 13H16.01V11H16V13ZM8 13H8.01V11H8V13Z"
                fill={isActive ? "#7217B8" : "#565656"}
              />
            </svg>
            <span>Communication</span>
          </>
        )}
      </NavLink>
      <NavLink
        to="/communication/ticketing"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            
            
            <svg width="16" className="my-auto" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H15" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span>Ticketing</span>
          </>
        )}
      </NavLink>
      <NavLink
        to="/communication/sms"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg width="16" className="my-auto" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H15" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>SMS</span>
          </>
        )}
      </NavLink>
      {/* User Management */}
      <NavLink
        to="/user-management"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.025 3.30078C17.4777 3.90028 18.5001 5.33068 18.5001 6.99987C18.5001 8.68196 17.4618 10.1215 15.9912 10.7127"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 18H22M19 15V21"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>User Management</span>
          </>
        )}
      </NavLink>
      <NavLink
        to="/user-management/users"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            
            
            <svg width="16" className="my-auto" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H15" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span>Users</span>
          </>
        )}
      </NavLink>
      {/* Reports */}
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.32 12C20.92 12 22 11 21.04 7.72C20.39 5.51 18.49 3.61 16.28 2.96C13 2 12 3.08 12 5.68V8.56C12 11 13 12 15 12H18.32Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 14.7C19.07 19.33 14.63 22.69 9.58 21.87C5.79 21.26 2.74 18.21 2.12 14.42C1.31 9.39001 4.65 4.95001 9.26 4.01001"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Reports</span>
          </>
        )}
      </NavLink>

      {/* Fraud Detection */}
      <NavLink
        to="/fraud-detection"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V13M12 17H12.01M10.2908 3.86002L1.82075 18C1.64612 18.3024 1.55372 18.6453 1.55274 18.9945C1.55176 19.3438 1.64224 19.6872 1.81518 19.9905C1.98812 20.2939 2.23748 20.5468 2.53846 20.7239C2.83944 20.901 3.18155 20.9962 3.53075 21H20.4708C20.82 20.9962 21.1621 20.901 21.463 20.7239C21.764 20.5468 22.0134 20.2939 22.1863 19.9905C22.3593 19.6872 22.4497 19.3438 22.4488 18.9945C22.4478 18.6453 22.3554 18.3024 22.1808 18L13.7108 3.86002C13.5325 3.56613 13.2815 3.32314 12.9819 3.15451C12.6824 2.98587 12.3445 2.89728 12.0008 2.89728C11.657 2.89728 11.3191 2.98587 11.0196 3.15451C10.72 3.32314 10.469 3.56613 10.2908 3.86002Z"
                stroke={isActive ? "#7217B8" : "#565656"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Fraud Detection</span>
          </>
        )}
      </NavLink>

      {/* Settings */}
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            isActive
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
      >
        {({ isActive }) => (
          <>
          
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.13889 2.46333C9.61222 0.512222 12.3878 0.512222 12.8611 2.46333C12.9321 2.75644 13.0714 3.02864 13.2675 3.25778C13.4636 3.48691 13.711 3.66651 13.9896 3.78194C14.2682 3.89738 14.5702 3.94539 14.8709 3.92208C15.1716 3.89876 15.4625 3.80478 15.72 3.64778C17.4344 2.60333 19.3978 4.56556 18.3533 6.28111C18.1966 6.53851 18.1027 6.82926 18.0795 7.12975C18.0562 7.43023 18.1042 7.73197 18.2195 8.01042C18.3348 8.28888 18.5142 8.5362 18.743 8.73228C18.9719 8.92836 19.2438 9.06767 19.5367 9.13889C21.4878 9.61222 21.4878 12.3878 19.5367 12.8611C19.2436 12.9321 18.9714 13.0714 18.7422 13.2675C18.5131 13.4636 18.3335 13.711 18.2181 13.9896C18.1026 14.2682 18.0546 14.5702 18.0779 14.8709C18.1012 15.1716 18.1952 15.4625 18.3522 15.72C19.3967 17.4344 17.4344 19.3978 15.7189 18.3533C15.4615 18.1966 15.1707 18.1027 14.8703 18.0795C14.5698 18.0562 14.268 18.1042 13.9896 18.2195C13.7111 18.3348 13.4638 18.5142 13.2677 18.743C13.0716 18.9719 12.9323 19.2438 12.8611 19.5367C12.3878 21.4878 9.61222 21.4878 9.13889 19.5367C9.06787 19.2436 8.92864 18.9714 8.73254 18.7422C8.53644 18.5131 8.28901 18.3335 8.01039 18.2181C7.73176 18.1026 7.42982 18.0546 7.12913 18.0779C6.82844 18.1012 6.5375 18.1952 6.28 18.3522C4.56556 19.3967 2.60222 17.4344 3.64667 15.7189C3.80345 15.4615 3.89728 15.1707 3.92054 14.8703C3.9438 14.5698 3.89583 14.268 3.78052 13.9896C3.66522 13.7111 3.48584 13.4638 3.25697 13.2677C3.02809 13.0716 2.75618 12.9323 2.46333 12.8611C0.512222 12.3878 0.512222 9.61222 2.46333 9.13889C2.75644 9.06787 3.02864 8.92864 3.25778 8.73254C3.48691 8.53644 3.66651 8.28901 3.78194 8.01039C3.89738 7.73176 3.94539 7.42982 3.92208 7.12913C3.89876 6.82844 3.80478 6.5375 3.64778 6.28C2.60333 4.56556 4.56556 2.60222 6.28111 3.64667C7.39222 4.32222 8.83222 3.72444 9.13889 2.46333Z" stroke={isActive ? "#7217B8" : "#565656"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          
            <span>Settings</span>
          </>
        )}
      </NavLink>
    </div>
  </div>);
}
 
export default Sidebar;
