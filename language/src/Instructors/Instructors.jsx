import React, { useEffect, useState } from 'react'
import SingleInstructor from './SingleInstructor'

function Instructors() {
  const [instructor,setInstructor] = useState([])

  useEffect(()=>{
    fetch('instructor.json')
    .then(res =>res.json())
    .then(data =>{
      const popularInstructors= data.filter(inst => inst.category ==='popular')
      setInstructor(popularInstructors)
    })
  },[])
  return (
    <div >
    <h1 className='text-center text-5xl font-semibold mb-10'>Popular Instructor's</h1>
    <div className='m-4 rounded-md mx-auto w-1/2 border-2  border-[#5BD9B3]'></div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
      {
        instructor.map(singleInstrucotr => <SingleInstructor singleInstrucotr={singleInstrucotr} key={singleInstrucotr._id} />)
      }
      </div>
    </div>
  )
}

export default Instructors