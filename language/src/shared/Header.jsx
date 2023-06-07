import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
 

function Header() {
  // const {user,logOut} = useContext(AuthContext)
  // const handleLogOut =() =>{
  //   logOut()
  //   .then()
  //   .catch(error =>console.log(error.message))
  // }
  return (
    <div>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>  
            <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-600"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/alltoys'
              aria-label='alltoys'
              title='alltoys'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              All Toys
            </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              Blog
            </NavLink>
            </li>
          
          

      </ul>
  
    </div>
    <Link to="/" ><img className='w-40' src="https://i.ibb.co/jZQsXNK/Screenshot-5-removebg-preview.png" alt="" /> </Link>
    
     
  </div>
 

  <div className="navbar-center   lg:flex">
          <ul className=" m-6 font-semibold flex px-1">
            <li>  
            <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-orange-600"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/alltoys'
              aria-label='alltoys'
              title='alltoys'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              All Toys
            </NavLink>
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/blog'
              aria-label='blog'
              title='blog'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              Blog
            </NavLink>
            </li>
          
            

          </ul>
        </div>
  {/* <div className="navbar-end "> 
     
    {
      user?.email ? <>
      <p className='mr-2 hidden md:inline-block text-xl   '>
            <NavLink
              to='/mytoys'
              aria-label='mytoys'
              title='mytoys'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              My Toys
            </NavLink>
            </p>
          <p className='hidden md:inline-block mr-2 text-xl  '>
            <NavLink
              to='/addtoy'
              aria-label='addtoy'
              title='addtoy'
              className={({ isActive }) => (isActive ? 'text-orange-600' : 'default')}
            >
              Add a Toy
            </NavLink>
            </p>
          
      <Link onClick={handleLogOut} className='btn'  to="/">LogOut</Link>
      </> :  <Link className='btn'  to="/login">Login</Link>
    }
  </div> */}
   
</div>
    
    </div>
  )
}

export default Header