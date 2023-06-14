import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'
import { BsBookHalf } from 'react-icons/bs';
import { FaHome,FaUsers,FaWallet } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai" 
import { GiClassicalKnowledge } from "react-icons/gi" 

import useBook from '../../hook/UseBook';
import useAdmin from '../../hook/useAdmin';
import useInstructor from '../../hook/useInstructor';

 function Dashboard() {
  const [book] = useBook()

  // todo : load data from the database 
  const isAdmin =useAdmin();
  const isInstructor = useInstructor()
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

    {
      isAdmin ?
         
        (
          <>
          <li><NavLink><FaHome></FaHome> Admin Home</NavLink></li>
           <li><NavLink>Manage Classes</NavLink></li>
       
          <li><NavLink to='/dashboard/manageusers'><FaUsers></FaUsers>Manage Users</NavLink></li>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
          </>
        ):  isInstructor ?(
            <>
            <div className="divider"></div>
      
      <li><NavLink to="/dashboard/addaclass"><GiClassicalKnowledge></GiClassicalKnowledge> Add a Classes </NavLink></li>
      <li><NavLink><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink to="/dashboard/mybook"> <BsBookHalf ></BsBookHalf> My Selected Classes  <AiOutlineShoppingCart />
          <span className="badge -mt-30 badge-secondary">+ {book?.length || 0}</span></NavLink></li>
       
         
      
            </>
        ):(
          <>

            <li><NavLink to="myclass">My Classes</NavLink></li>
            <li><NavLink> Total Enrolled Students</NavLink></li>

            
            <li><NavLink to="/">Feedback</NavLink></li>
            </>
        )
        
    }
      {/* Sidebar content here */}

      
    </ul>

  </div>
</div>
     
     </div>
   )
 }
 
 export default Dashboard