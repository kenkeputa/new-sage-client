//import React from 'react'
import Dashboard from './dashboard/dashboard'
import Header from './dashboard/header'
import Sidebar from './dashboard/sidebar'
import Customer from './customer/customer'
import Inventory from './inventory/inventory'
import Addcustomer from './customer/addcustomer'
import Communication from './communication/index'
import Repayment from './loan/repayment/index'
import Application from './loan/application/index'
import Payment from './payment/index'
import Supplier from './supplier/index'
import Login from './auth/index'
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react'
export const Auth = React.createContext();
function App(){
 let [isLogin, setLogin] = useState(false);

    return (<div className='h-[100vh] w-full'>
    <Auth.Provider value={{isLogin, setLogin}}>

    <Header />
    <div className='w-full h-[100vh] flex'>
    {isLogin ? <>
    <Sidebar />
    </> : ""}
    <Routes>
         <Route path="/" element={isLogin ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />} />
         <Route path="/loan-application" element={!isLogin ? <Navigate to="/auth" /> : <Navigate to="/loan-application/repayment"  />} />
      <Route exact path="/dashboard" element={!isLogin ? <Navigate to="/auth" /> : <Dashboard />} />    
      <Route exact path="/auth" element={<Login />} />    
      <Route exact path="/customers" element={!isLogin ? <Navigate to="/auth" /> :<Customer />} />     
      <Route exact path="/inventory" element={!isLogin ? <Navigate to="/auth" /> :<Inventory />} />      
      <Route exact path="/customers/new" element={!isLogin ? <Navigate to="/auth" /> :<Addcustomer />} />      
      <Route exact path="/communication" element={!isLogin ? <Navigate to="/auth" /> : <Navigate to="/communication/ticketing" />} />      
      <Route exact path="/communication/ticketing" element={!isLogin ? <Navigate to="/auth" /> :<Communication />} />      
      <Route exact path="/loan" element={!isLogin ? <Navigate to="/auth" /> :<Navigate to="/loan/application" />} />      
      <Route exact path="/loan/repayment" element={!isLogin ? <Navigate to="/auth" /> :<Repayment />} />      
      <Route exact path="/loan/application" element={!isLogin ? <Navigate to="/auth" /> :<Application />} />      
      <Route exact path="/payments" element={!isLogin ? <Navigate to="/auth" /> :<Payment />} />      
      <Route exact path="/suppliers" element={!isLogin ? <Navigate to="/auth" /> :<Supplier />} />      
      {/* <Route path="*" element={<NotFound />} />       */}
    </Routes>
    
    </div>
    </Auth.Provider>
    </div>)
}
export default App;
