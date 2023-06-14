import React from 'react'
import {
  useQuery
} from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
function ManageUsers() {
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: users = [] } = useQuery(['users'], async () => {
    const response = await axiosSecure("/users");
 
    return response.data;
   
  });

  const handleMakeAdmin = user =>{
    fetch(`https://school-server-two.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
  const handleMakeInstructor = user =>{
    fetch(`https://school-server-two.vercel.app/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
  return (
    <div  className='w-full'>
    <Helmet>
      <title>Manage User</title>
    </Helmet>
    <div>
       

       <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
   
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        
      </tr>
    </thead>
    <tbody>
       
    {
      users.map((user,index) =><tr key={user._id} className="hover">
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role ==='admin' ?'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-green-600 text-white btn-xs">Admin</button>}</td>
        <td>{user.role ==='instructor' ?'instructor':<button onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost bg-black text-white btn-xs">Instructor</button>}</td>
  
         
       
      </tr> )
    }
      
    
    </tbody>
  </table>
</div>
    </div>
    </div>
  )
}

export default ManageUsers