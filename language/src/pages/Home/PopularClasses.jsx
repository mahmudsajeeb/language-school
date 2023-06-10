 import React, { useEffect, useState } from 'react'
import PopularSingleClass from './PopularSingleClass'
 
 function PopularClasses() {
  const [popularClass,setPopularClass] = useState([])

  useEffect(()=>{
    fetch('https://school-server-two.vercel.app/classes')
    .then(res =>res.json())
    .then(data =>
      {
        const popularClasses = data.filter(pclass =>pclass.category ==='popular')
        setPopularClass(popularClasses)
      }
      )
  },[])
   return (
     <div className='mt-10 mb-10'>
     <h1 className='text-center text-5xl font-semibold mb-10'>Popular Class's</h1>
    <div className='m-4 rounded-md mx-auto w-1/2 border-2  border-[#5BD9B3]'></div>

    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
      {
        popularClass.map(popularclass => <PopularSingleClass popularclass={popularclass} key={popularclass.id} />)
      }
      </div>
     
     </div>
   )
 }
 
 export default PopularClasses