import React from 'react'
 
import { Outlet } from 'react-router-dom'
 
import Navbar from '../shared/Navbar'
 

export default function Main() {
 
  return (
    <div>
     
      {/* <div className='max-w-7xl mx-auto'> */}
      <Navbar />
      {/* </div> */}
      {/* <Header /> */}
       
      <Outlet />
    
    
    </div>
  )
}
