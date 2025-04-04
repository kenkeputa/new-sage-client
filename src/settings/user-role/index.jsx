
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export default function UserRolesPermissions() {
  const [activeTab, setActiveTab] = useState("can-access")
  const [selectedRole, setSelectedRole] = useState("Super Admin")

  const roles = ["Super Admin", "Product Manager", "Order Manager", "Finance Admin", "Support Agent"]
   
  const [permissions, setper] = useState([])
let super_admin = [
  "Access all features and data",
  "Add, edit, and remove admins/users",
  "Modify roles and permissions",
  "View and manage financial transactions and reports",
  "Approve/decline refunds and chargebacks",
  "Oversee fraud detection alerts",
  "Manage all settings, including platform configuration",
  "Monitor product inventory and supplier details",
];

let product_manager = [
  "Add, edit, and remove products",
  "Manage product descriptions and categories",
  "View and update stock levels",
  "Monitor product performance and sales trends",
  "View supplier stock lists and details",
  "Set product availability (in stock, out of stock)"
]


let order_manager = [
  "View and track all customer orders",
  "Update order statuses (Processing, Out for Delivery, Delivered, Canceled)",
  "Process order cancellations and refunds (if permitted)",
  "Manage shipping and delivery information",
  "Communicate order updates with customers"
]


useEffect(()=>{
  if(selectedRole === "Super Admin"){
    setper(super_admin)
  }
  if(selectedRole === "Product Manager"){
    // alert(1)
    setper(product_manager)
  }
  if(selectedRole === "Order Manager"){
    setper(order_manager)
  }
},[selectedRole])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">User Roles & Permissions</h1>
        <button className="bg-[#7217b8] text-white px-4 py-2 rounded-md hover:bg-[#5f13a0] transition-colors">
          Create New Role
        </button>
      </div>

      <div className="flex gap-6">
        {/* Roles sidebar */}
        <div className="w-72 bg-[#F6F6F6] rounded-lg border border-[#E4E4E4] shadow-[0px_16px_30px_0px_#585C5F29] overflow-hidden">
        <div className="w-[100%] flex flex-col gap-1 mt-7 px-4 pl-4 rounded-md ">
            {roles.map((role) => (
              <button
                key={role}
                className={
          `w-full flex gap-2 py-2 px-3 rounded cursor-pointer ${
            selectedRole === role 
              ? "border-l-2 border-l-[#7217B8] bg-[#EEDCFB] text-[#7217B8]"
              : "text-[#565656]"
          }`
        }
                
                onClick={() => setSelectedRole(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Basic Information */}
          <div className="bg-[#F6F6F6] rounded-lg border border-[#E4E4E4] shadow-[0px_16px_30px_0px_#585C5F29] p-6 flex gap-[6rem]">
          <div className="whitespace-nowrap">
            <h2 className="text-lg font-medium text-gray-800 mb-4"><b>Basic Information</b></h2>
              <label className="block text-sm text-gray-600 mb-1">Name of the Role</label>
              </div>
            <div className="w-[60%]">
              
              <label className="block text-sm text-gray-600 mb-1">Name of the Role</label>
              <input type="text" value="Admin" className="w-full shadow-[0px_1px_2px_0px_#121A2B0D] p-2 border border-[#E4E4E4] bg-[#FFFFFF] rounded-md" />
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                className={`py-2 px-4 font-medium text-sm border-b-2 ${
                  activeTab === "can-access"
                    ? "border-[#7217b8] text-[#7217b8]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("can-access")}
              >
                What they can access
              </button>
              <button
                className={`py-2 px-4 font-medium text-sm border-b-2 ${
                  activeTab === "cant-access"
                    ? "border-[#7217b8] text-[#7217b8]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("cant-access")}
              >
                What they can't access
              </button>
            </div>
          </div>

          {/* Features and Permissions */}
          <div className="bg-[#F6F6F6] rounded-lg border border-[#E4E4E4] shadow-[0px_16px_30px_0px_#585C5F29] p-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2"><b>Features</b></h2>
                <p className="text-sm text-gray-500 mb-4">What they can do...</p>
              </div>

              {/* Permissions */}
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-6"><b>Permissions</b></h2> 
                <div className="space-y-4">
                  {permissions.map((permission, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded bg-[#7217b8] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{permission}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

