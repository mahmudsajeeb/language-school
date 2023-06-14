import React, { useEffect, useState } from 'react'
 
import { Helmet } from 'react-helmet-async'
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
 
import useAuth from '../../../hook/useAuth';
 

function MyClasses() {
  const {user} = useAuth()
  const [claases,setClasses] = useState([])

 
  useEffect(()=>{
    fetch('https://school-server-two.vercel.app/classes')
    .then(res =>res.json())
    .then(data => {
     
      const filterClass = data.filter(fc => fc.email === user?.email)
      setClasses(filterClass)
      console.log("filterclasss by email",filterClass)
    })
  },[])
 


 
 
  return (
    <div className='  w-full  '>
       <Helmet>
    <title>My  Class</title>
    </Helmet>
    <div >
    
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>class Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Price</th>
        <th> Available seats</th>
        <th> pending</th>
        <th> approved</th>
       
        <th> denied</th>
      </tr>
    </thead>
    <tbody>
      {/* item 1 */}
      {
        claases.map((item) => {
          
          return(
            <tr>
        <td>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} />
              </div>
            </div>
        </td>
        <td>
              
              <div className="font-bold">
                {item.name}  
              </div>
             
        </td>
        <td>
        <div>
              <div className="font-bold">{item.instructor}</div>
               
            </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{item.email}</div>
               
            </div>
        </td>
        <td>
        <div>
              <div className="font-bold">${item.price}</div>
               
            </div>
        </td>
        <td>{item?.seats}</td>
        <td>
          <button  className="btn btn-ghost bg-green-600 mr-2 text-white btn-xs">Approve</button>
          <button  className="btn btn-ghost bg-red-600 text-white btn-xs">Deny </button>
          <button  className="btn btn-ghost bg-yellow-600 ml-2 text-white btn-xs">feedback</button>
           
        </td>
      </tr>
          )
          })
      }
       
 
    </tbody>
    {/* foot */}
    
  </table>
</div>
</div>
    
    </div>
  )
}

export default MyClasses