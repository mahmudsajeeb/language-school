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
    
   
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
      {
        instructor.map(singleInstrucotr => <SingleInstructor singleInstrucotr={singleInstrucotr} key={singleInstrucotr._id} />)
      }
      </div>
    </div>
  )
}

export default Instructors