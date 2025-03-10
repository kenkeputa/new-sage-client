
//import React from 'react'
import Dashboard from "./dashboard/dashboard"
import Header from "./dashboard/header"
import Sidebar from "./dashboard/sidebar"
import Customer from "./customer/customer"
import Inventory from "./inventory/inventory"
import Addcustomer from "./customer/addcustomer"
import Communication from "./communication/index"
import Repayment from "./loan/repayment/index"
import Application from "./loan/application/index"
import Payment from "./payment/index"
import Supplier from "./supplier/index"
import User from "./users_management/index"
import Settings from "./settings/index"
import SettingLoan from "./settings/loan/index"
import SettingAddLoan from "./settings/loan/addloan"
import SettingEditLoan from "./settings/loan/editloan"
import SettingRole from "./settings/user-role/index"
import Login from "./auth/index"
import Loader from "./Loader" 
import { Routes, Route, Navigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
export const Auth = React.createContext()

function App() {
  const [isLogin, setLogin] = useState(false)
  const [isLoading, setLoader] = useState(true)
 
  // Check localStorage when the component mounts
  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("user")
    if (userData) {
      // User data exists, set isLogin to true
      setLogin(true)
      console.log("User found in localStorage, auto-login successful")
    } else {
      // No user data, ensure isLogin is false
      setLogin(false)
      console.log("No user found in localStorage, login required")
    }
  }, []) // Empty dependency array means this runs once when component mounts

  return (
    <div className="h-[100vh] w-full">
      <Auth.Provider value={{ isLogin, setLogin, isLoading, setLoader  }}>
        <Header />
        <div className="w-full h-[100vh] flex">
          {isLogin ? <Sidebar /> : ""}
          <Routes>
            <Route path="/" element={isLogin ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
            <Route
              path="/loan-application"
              element={!isLogin ? <Navigate to="/auth" /> : <Navigate to="/loan-application/repayment" />}
            />
            <Route exact path="/dashboard" element={!isLogin ? <Navigate to="/auth" /> : <Dashboard />} />
            <Route exact path="/auth" element={<Login />} />
            <Route exact path="/customers" element={!isLogin ? <Navigate to="/auth" /> : <Customer />} />
            <Route exact path="/inventory" element={!isLogin ? <Navigate to="/auth" /> : <Inventory />} />
            <Route exact path="/customers/new" element={!isLogin ? <Navigate to="/auth" /> : <Addcustomer />} />
            <Route
              exact
              path="/communication"
              element={!isLogin ? <Navigate to="/auth" /> : <Navigate to="/communication/ticketing" />}
            />
            <Route
              exact
              path="/communication/ticketing"
              element={!isLogin ? <Navigate to="/auth" /> : <Communication />}
            />
            <Route
              exact
              path="/loan"
              element={!isLogin ? <Navigate to="/auth" /> : <Navigate to="/loan/application" />}
            />
            <Route exact path="/loan/repayment" element={!isLogin ? <Navigate to="/auth" /> : <Repayment />} />
            <Route exact path="/loan/application" element={!isLogin ? <Navigate to="/auth" /> : <Application />} />
            <Route exact path="/payments" element={!isLogin ? <Navigate to="/auth" /> : <Payment />} />
            <Route exact path="/suppliers" element={!isLogin ? <Navigate to="/auth" /> : <Supplier />} />
            <Route exact path="/user-management" element={!isLogin ? <Navigate to="/auth" />  : <Navigate to="/user-management/users" /> } />
            <Route exact path="/user-management/users" element={!isLogin ?<Navigate to="/auth" />  : <User /> } />
            <Route exact path="/settings" element={!isLogin ?<Navigate to="/auth" />  : <Settings /> } />
            <Route exact path="/settings/loan" element={!isLogin ?<Navigate to="/auth" />  : <SettingLoan /> } />
            <Route exact path="/settings/role" element={!isLogin ?<Navigate to="/auth" />  : <SettingRole /> } />
            <Route exact path="/settings/loan/add" element={!isLogin ?<Navigate to="/auth" />  : <SettingAddLoan /> } />
            <Route exact path="/settings/loan/edit" element={!isLogin ?<Navigate to="/auth" />  : <SettingEditLoan /> } />
            {/* <Route path="*" element={<NotFound />} />       */}
          </Routes>
        </div>
        {isLoading ?
        <Loader />: ""
        
      }
      </Auth.Provider>
    </div>
  )
}

export default App

