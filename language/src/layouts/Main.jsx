import React from 'react'
 
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
// import Header from '../shared/Header'
// import Footer from '../shared/Footer'

export default function Main() {
  // const location = useLocation()
  // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signin')
  return (
    <div>
      {/* {noHeaderFooter || <Header />} */}
      <Header />
      <Outlet />
      {/* {noHeaderFooter || <Footer />} */}
    
    </div>
  )
}
