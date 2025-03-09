
import { Check } from "lucide-react"
import { useState } from "react"

export default function UserRolesPermissions() {
  const [activeTab, setActiveTab] = useState("can-access")
  const [selectedRole, setSelectedRole] = useState("Super Admin")

  const roles = ["Super Admin", "Product Manager", "Order Manager", "Finance Admin", "Support Agent"]

  const permissions = [
    "Access all features and data",
    "Add, edit, and remove admins/users",
    "Modify roles and permissions",
    "View and manage financial transactions and reports",
    "Approve/decline refunds and chargebacks",
    "Oversee fraud detection alerts",
    "Manage all settings, including platform configuration",
    "Monitor product inventory and supplier details",
  ]

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
        <div className="w-72 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
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
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex gap-[6rem]">
          <div className="whitespace-nowrap">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Basic Information</h2>
              <label className="block text-sm text-gray-600 mb-1">Name of the Role</label>
              </div>
            <div className="w-[60%]">
              
              <label className="block text-sm text-gray-600 mb-1">Name of the Role</label>
              <input type="text" value="Admin" className="w-full p-2 border border-gray-300 rounded-md" />
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
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Features</h2>
                <p className="text-sm text-gray-500 mb-4">What they can do...</p>
              </div>

              {/* Permissions */}
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-6">Permissions</h2>
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

