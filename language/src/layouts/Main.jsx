import React from 'react'
 
import { Outlet } from 'react-router-dom'
 
import Navbar from '../shared/Navbar' 
import Footer from '../shared/Footer'
 

export default function Main() {
 
  return (
    <>
     
      {/* <div className='max-w-7xl mx-auto'> */}
      <Navbar />
      <Outlet />
     <Footer />
    
    </>
  )
}
