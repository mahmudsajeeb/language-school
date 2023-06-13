import React, { useEffect, useState } from 'react'

function MyClasses() {
  const [classes,setClass] = useState([])

  useEffect(()=>{
    fetch('http://localhost:1000/classes')
    .then(res =>res.json())
    .then(data =>
      {
         
         const myData = data.filter(d => d.role ==="instructor")
         console.log(myData)
      }
      )
  },[])
  return (
    <div>
    <h1 className='text-7xl'>{ classes.length}</h1>
    </div>
  )
}

export default MyClasses