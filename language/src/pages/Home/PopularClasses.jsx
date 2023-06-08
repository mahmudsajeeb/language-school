
import React, { useEffect, useState } from 'react'

function PopularClasses() {
  const [popularClass,setPopularClass] = useState([])

  useEffect(()=>{
    fetch('classes.json')
    .then(res =>res.json())
    .then(data =>{
      const popularClass= data.filter(inst => inst.category ==='popular')
      setPopularClass(popularInstructors)
    })
  },[])
  return (
    <div>
    
    </div>
  )
}

export default PopularClasses