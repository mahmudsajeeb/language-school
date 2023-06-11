import React from 'react'
import {
  useQuery
} from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async';
function ManageUsers() {
  const { refetch, data: users = [] } = useQuery(['users'], async () => {
    const response = await fetch("http://localhost:1000/users");
    console.log('manage users', response);
    return response.json();
   
  });
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       
    {
      users.map((user,index) =><tr key={user._id} className="hover">
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {/* <td>{user.role ==='admin' ?'admin':<button onClick={()=>handleAdmin(user)} className="btn btn-ghost bg-red-600 text-white btn-xs"><FaUserShield></FaUserShield></button>}</td> */}
        <td>  <button className="btn btn-ghost bg-green-600 text-white btn-xs">Admin</button></td>
        <td>  <button className="btn btn-ghost bg-gray-600 text-white btn-xs">Instructor</button></td>
        <td>  <button className="btn btn-ghost bg-blue-600 text-white btn-xs">Students</button></td>
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