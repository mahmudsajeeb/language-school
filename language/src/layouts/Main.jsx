import React from 'react'
 
import { Outlet } from 'react-router-dom'
 
import Navbar from '../shared/Navbar' 
import Footer from '../shared/Footer'
import { Helmet } from 'react-helmet-async'
 

export default function Main() {
 
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
     
      {/* <div className='max-w-7xl mx-auto'> */}
      <Navbar />
      <Outlet />
     <Footer />
    
    </>
  )
}
