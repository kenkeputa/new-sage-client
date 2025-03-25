import {useState, useContext, } from 'react'
import { Auth } from "./App.jsx"
function Notification(){
const { setclosenotify, closenotify } = useContext(Auth)
const [notifications, setNotifications] = useState([
    {
      id: "1",
      type: "Loan Application",
      message: "Steven Abomisa just applied for a loan",
      timestamp: "15 mins ago",
      timeAgo: "15 mins ago",
      read: false,
    },
    {
      id: "2",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "15 mins ago",
      timeAgo: "15 mins ago",
      read: false,
    },
    {
      id: "3",
      type: "New Order",
      message: "CUST468 placed an order",
      timestamp: "1 hour ago",
      timeAgo: "1 hour ago",
      read: false,
    },
    {
      id: "4",
      type: "Due Payment",
      message: "Payment is due for CUST354",
      timestamp: "24 Dec 2024 12:30 PM",
      timeAgo: "24 Dec 2024",
      read: false,
    },
    {
      id: "5",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "16 Dec 2024 02:30 AM",
      timeAgo: "16 Dec 2024",
      read: true,
    },
    {
      id: "6",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "14 Dec 2024 04:15 PM",
      timeAgo: "14 Dec 2024",
      read: true,
    },
    {
      id: "7",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "10 Dec 2024 11:45 AM",
      timeAgo: "10 Dec 2024",
      read: true,
    },
    {
      id: "8",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "29 Nov 2024 06:33 PM",
      timeAgo: "29 Nov 2024",
      read: true,
    },
    {
      id: "9",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "29 Nov 2024 06:33 PM",
      timeAgo: "29 Nov 2024",
      read: true,
    },
    {
      id: "10",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "29 Nov 2024 06:33 PM",
      timeAgo: "29 Nov 2024",
      read: true,
    },
    {
      id: "11",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "29 Nov 2024 06:33 PM",
      timeAgo: "29 Nov 2024",
      read: true,
    },
    {
      id: "12",
      type: "New Customer",
      message: "Tomiwa Richards just registered",
      timestamp: "29 Nov 2024 06:33 PM",
      timeAgo: "29 Nov 2024",
      read: true,
    },
  ])

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }


return (<div className="w-full h-[1163px]  flex  fixed top-0 left-0 bg-[#3333334D] backdrop-blur-[16px]">
   
        <div className="bg-[#F6F6F6] rounded-lg shadow-lg w-full max-w-md ml-auto h-full">
            <div className="flex items-center justify-between p-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button className="p-1 rounded-full hover:bg-gray-100" onClick={()=> closenotify ?  setclosenotify(false) : setclosenotify(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close</span>
                </button>
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="relative">
                <button
                    className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span className="text-sm">Sort By</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="absolute left-0 mt-1 w-40 bg-white border rounded-md shadow-lg z-10">
                    <ul className="py-1">
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">Newest First</li>
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">Oldest First</li>
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">Unread First</li>
                    </ul>
                    </div>
                )}
                </div>

                <button
                className="flex items-center gap-2 px-3 py-2 border border-[#7217B8] text-[#7217B8] rounded-md hover:bg-purple-50"
                onClick={markAllAsRead}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-sm">Mark All As Read</span>
                </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
                {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`flex items-start p-4 border-b border-b-[#E4E4E4] ${!notification.read ? "bg-[#DCBAF633]" : "bg-[#F6F6F6]"}`}
                >
                    <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="bg-[#FFFFFF] rounded-full p-2">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 13V11.6667C11.3333 10.9594 11.0523 10.2811 10.5522 9.78105C10.0521 9.28095 9.37383 9 8.66659 9H3.99992C3.29267 9 2.6144 9.28095 2.1143 9.78105C1.6142 10.2811 1.33325 10.9594 1.33325 11.6667V13M10.6832 1.20052C11.6517 1.60019 12.3333 2.55379 12.3333 3.66658C12.3333 4.78797 11.6411 5.7477 10.6607 6.1418M14.6666 12.9999V11.6666C14.6661 11.0757 14.4695 10.5018 14.1075 10.0348C13.7455 9.56783 13.2387 9.2343 12.6666 9.08659M8.99992 3.66667C8.99992 5.13943 7.80601 6.33333 6.33325 6.33333C4.86049 6.33333 3.66659 5.13943 3.66659 3.66667C3.66659 2.19391 4.86049 1 6.33325 1C7.80601 1 8.99992 2.19391 8.99992 3.66667Z" stroke="#565656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    </div>

                    <div className="flex-grow">
                    <div className="flex items-center">
                        {!notification.read && <div className="h-2 w-2 bg-[#7217B8] rounded-full mr-2"></div>}
                        <span className="font-medium text-[#7217B8]">{notification.type}</span>
                    </div>
                    <p className="text-gray-700 mt-1">{notification.message}</p>
                    </div>

                    <div className="flex-shrink-0 ml-2 text-right">
                    <span className="text-sm text-gray-500">{notification.timeAgo}</span>
                    {notification.timeAgo !== notification.timestamp && (
                        <div className="text-xs text-gray-400 mt-1">
                        {notification.timestamp.split(" ").slice(-2).join(" ")}
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>

</div>
)
}
export default Notification