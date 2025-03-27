import { useState, useEffect, useContext } from 'react';
import { Auth } from "./App.jsx";

function Notification() {
  const { setclosenotify, closenotify } = useContext(Auth);
  const [notifications, setNotifications] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sage-admin-backend.vercel.app/notification")
      .then(response => response.json())
      .then(data => {
        const formatTime = (timestamp) => {
          const now = new Date();
          const time = new Date(timestamp);
          const diffMs = now - time;
          const diffSecs = Math.floor(diffMs / 1000);
          const diffMins = Math.floor(diffSecs / 60);
          const diffHours = Math.floor(diffMins / 60);
          const diffDays = Math.floor(diffHours / 24);
          const diffWeeks = Math.floor(diffDays / 7);
          const diffMonths = Math.floor(diffDays / 30);
          const diffYears = Math.floor(diffDays / 365);
      
          if (diffSecs < 60) return "Just now";
          if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
          if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
          if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
          if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
          if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
          if (diffYears >= 1) return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
      
          return time.toLocaleDateString('en-GB', {
              day: '2-digit', 
              month: 'short', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
          });
      };
      
        console.log(data);
        const newUsers = data.newUsers?.map(user => ({
          id: user.id,
          type: "New Customer",
          message: `${user.first_name} ${user.last_name} just registered`,
          timestamp: formatTime(user.registration_date || new Date().toISOString()),
          time: user.registration_date,
          timeAgo: formatTime(user.registration_date || new Date().toISOString()),
          read: false,
        }))  || [];

        const newLoans = data.newLoans?.map(loan => ({
          id: `loan-${loan.id}`,
          type: "Loan Application",
          message: `User ID ${loan.user_id} applied for a loan of ₦${loan.amount}`,
          timestamp: formatTime(loan.next_payment),
          timeAgo: formatTime(loan.next_payment),
          time: loan.next_payment,
          read: false,
        }))  || [];

        // const sortedNotifications = [...newUsers, ...newLoans].sort((a, b) => {
        //   const order = { "Just now": 0, "mins ago": 1, "hours ago": 2, "days ago": 3 };
        //   const aCategory = a.timeAgo.includes("mins") ? 1 : a.timeAgo.includes("hours") ? 2 : a.timeAgo.includes("ago") ? 3 : 4;
        //   const bCategory = b.timeAgo.includes("mins") ? 1 : b.timeAgo.includes("hours") ? 2 : b.timeAgo.includes("ago") ? 3 : 4;
          
        //   return aCategory - bCategory || new Date(b.timestamp) - new Date(a.timestamp);
        // });
        const prev = data.previousActivities
        const sortedNotifications = [...newUsers, ...newLoans, ...prev].sort((a, b) => 
          new Date(b.time) - new Date(a.time)
        );

        setNotifications(sortedNotifications);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching notifications:", error)
        setLoading(false);
      });
  }, []);


  const markAllAsRead = () => {
    // Mark all notifications as read locally
    const updatedNotifications = notifications.map(notification => ({ ...notification, read: true }));
    setNotifications(updatedNotifications);
  
    // Fetch from /markread
    fetch("https://sage-admin-backend.vercel.app/markread")
      .then(response => response.json()) // Even if response isn't useful, we still process it
      .then(() => {
        // Send updated notifications to /add-prev-notification
        fetch("https://sage-admin-backend.vercel.app/add-prev-notification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({prevNotification: updatedNotifications}),
        })
          .then(res => res.json())
          .then(() => console.log("Updated notifications sent successfully"))
          .catch(error => console.error("Error sending notifications:", error));
      })
      .catch(error => console.error("Error fetching markread:", error));
  };
  

  return (
    <div className="w-full h-[1163px]  flex  fixed top-0 left-0 bg-[#3333334D] backdrop-blur-[16px]">
   
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

            <div className="max-h-[70vh] overflow-y-scroll">
                {loading ? (
                  <div className='w-full h-[7rem] flex justify-center items-center'>

            <svg width="38" height="40" className="animate-spin" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.9661 12.4081C37.1237 11.8576 37.6269 10.4639 36.9461 9.37788C34.9619 6.21221 32.1209 3.65147 28.7319 2.00681C24.6437 0.0228955 20.0019 -0.509725 15.5706 0.496656C11.1393 1.50304 7.1829 3.98842 4.35274 7.54355C1.52257 11.0987 -0.012575 15.5116 7.7529e-05 20.0557C0.0127301 24.5998 1.57243 29.0041 4.42235 32.5434C7.27226 36.0827 11.2425 38.546 15.6793 39.5277C20.1161 40.5094 24.7549 39.9509 28.8319 37.9443C32.2117 36.2808 35.0384 33.7043 37.005 30.5276C37.6797 29.4378 37.1687 28.0469 36.0081 27.5029C34.8475 26.9589 33.4795 27.4717 32.767 28.5372C31.2747 30.7689 29.2151 32.5823 26.7822 33.7798C23.6514 35.3207 20.0891 35.7496 16.682 34.9957C13.2749 34.2419 10.2261 32.3502 8.03761 29.6323C5.8491 26.9144 4.65137 23.5323 4.64166 20.0428C4.63194 16.5533 5.81081 13.1645 7.98415 10.4344C10.1575 7.70438 13.1957 5.79581 16.5986 5.02299C20.0014 4.25017 23.566 4.65918 26.7054 6.18267C29.1449 7.36653 31.2146 9.16852 32.7193 11.3918C33.4377 12.4533 34.8086 12.9585 35.9661 12.4081Z" fill="#7217B8"/>
            </svg>
            </div>

          ) : notifications.length === 0 ? (
            <p className="text-center text-gray-500">There are no notifications</p>
          ) : (
          notifications.map((notification) => (
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
                )) 
                )}
            </div>
        </div>

</div>
  );
}

export default Notification;
