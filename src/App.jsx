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

import { Routes, Route, Navigate } from 'react-router-dom';

function App(){


    return (<div className='h-[100vh] w-full'>
    <Header />
    <div className='w-full h-[100vh] flex'>

    <Sidebar />
    <Routes>
         <Route path="/" element={<Navigate to="/dashboard" />} />
         <Route path="/loan-application" element={<Navigate to="/loan-application/repayment"  />} />
      <Route exact path="/dashboard" element={<Dashboard />} />    
      <Route exact path="/customers" element={<Customer />} />     
      <Route exact path="/inventory" element={<Inventory />} />      
      <Route exact path="/customers/new" element={<Addcustomer />} />      
      <Route exact path="/communication" element={<Navigate to="/communication/ticketing" />} />      
      <Route exact path="/communication/ticketing" element={<Communication />} />      
      <Route exact path="/loan" element={<Navigate to="/loan/application" />} />      
      <Route exact path="/loan/repayment" element={<Repayment />} />      
      <Route exact path="/loan/application" element={<Application />} />      
      <Route exact path="/payments" element={<Payment />} />      
      {/* <Route path="*" element={<NotFound />} />       */}
    </Routes>
    
    </div>
    </div>)
}
export default App;
