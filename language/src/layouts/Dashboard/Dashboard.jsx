 import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'
import { BsBookHalf } from 'react-icons/bs';
import { FaHome,FaWallet } from 'react-icons/fa';

 function Dashboard() {
  
   return (
     <div>
     <Helmet>
    <title>Dashboard</title>
    </Helmet>
     <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet />
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-green-500 text-base-content">
      {/* Sidebar content here */}
      <li><NavLink><FaHome></FaHome> User Home</NavLink></li>
      <li><NavLink><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink to="/dashboard/mybook"> <BsBookHalf ></BsBookHalf> MyBook</NavLink></li>
       
       <div className="divider"></div>
       <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
    </ul>

  </div>
</div>
     
     </div>
   )
 }
 
 export default Dashboard