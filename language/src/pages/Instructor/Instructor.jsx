import React, { useEffect, useState } from 'react'
import SingleInstructor from './SingleInstructor'
import { Helmet } from 'react-helmet-async'
import SingleInstructors from './SingleInstructors'

function Instructors() {
  const [instructor,setInstructor] = useState([])

  useEffect(()=>{
    fetch('https://school-server-two.vercel.app/instructor')
    .then(res =>res.json())
    .then(data =>{       
      setInstructor(data)
    })
  },[])
  return (
    <div >
     <Helmet>
    <title>Instructors</title>
    </Helmet>
   
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
      {
        instructor.map(singleInt =>  <SingleInstructors singleInt={singleInt} key={singleInt._id} />)
      }
      </div>
    </div>
  )
}

export default Instructors