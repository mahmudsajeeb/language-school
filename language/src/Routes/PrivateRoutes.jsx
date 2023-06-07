import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

function PrivateRoutes({children}) {
  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <span className="loading loading-dots loading-md"></span>
  }
  if(user){
    return children
  }

  return <Navigate></Navigate>
}

export default PrivateRoutes