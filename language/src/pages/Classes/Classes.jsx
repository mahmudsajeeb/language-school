import React, { useEffect, useState } from 'react'
 
import { Helmet } from 'react-helmet-async'
import SingleClasses from './SingleClasses'

function Classes() {
 const [classes,setClass] = useState([])

  useEffect(()=>{
    fetch('https://school-server-two.vercel.app/classes')
    .then(res =>res.json())
    .then(data =>
      {
         
        setClass(data)
      }
      )
  },[])
  return (

    <div className='max-w-7xl mx-auto'>
     <Helmet>
    <title>Classes</title>
    </Helmet>
    
    <div className='mt-10 mb-10'>
     <h1 className='text-center text-5xl font-semibold mb-10'>All Class's</h1>
    <div className='m-4 rounded-md mx-auto w-1/2 border-2  border-[#5BD9B3]'></div>

    <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
      {
        classes.map(classes => <SingleClasses classes={classes} key={classes._id} />)
      }
      </div>
     
     </div>

    </div>
  )
}

export default Classes