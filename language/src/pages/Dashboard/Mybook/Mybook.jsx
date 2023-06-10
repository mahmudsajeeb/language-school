import React from 'react'
import useBook from '../../../hook/UseBook'
import { Helmet } from 'react-helmet-async'

function Mybook() {
  const [book,refetch] = useBook()
  const total = book.reduce((sum,item) => item.price + sum , 0)
  return (
    <div>
       <Helmet>
    <title>My Book</title>
    </Helmet>
    <div className='  w-full  '>
    <div className='font-semibold h-10 items-center flex justify-between  uppercase '>
      <h1>Total Order: {book.name}</h1>
      <p>Total Price: ${total}</p>
      <button className='btn btn-warning btn-sm'>Pay</button>
    </div>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class</th>
        <th>Instructor Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        book.map((row,index) => {
          
          return(
            <tr>
        <td>
           {index + 1}
        </td>
        <td>
              
              <div className="font-bold">
                {row.name}  
              </div>
             
        </td>
        <td>
        <div>
              <div className="font-bold">{row.instructor}</div>
               
            </div>
        </td>
        <td>${row.price}</td>
        <td>
          {/* <button onClick={()=>handleDelete(row)} className="btn btn-ghost bg-red-600 text-white btn-xs">x</button> */}
          Delete
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

export default Mybook