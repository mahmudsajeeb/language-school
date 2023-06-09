import React from 'react'
import Slider from './Slider'
import Learn from '../Learn/Learn' 
import Offer from '../Offer/Offer'
import Instructors from '../../Instructors/Instructors'
import PopularClasses from './PopularClasses'
import { Helmet    } from 'react-helmet-async';


function Home() {
  return (
    <>
    <Helmet>
    <title>Home</title>
    </Helmet>
    <Slider />
  
    <div className='mt-16  max-w-7xl mx-auto'>
    <Learn />
    
    {/* popular instructors */}
    <div>
    <h1 className='text-center text-5xl font-semibold mb-10'>Popular Instructor's</h1>
    <div className='m-4 rounded-md mx-auto w-1/2 border-2  border-[#5BD9B3]'></div>
    <Instructors />

    </div>
    <PopularClasses />
    
    </div>
    <div className='  max-w-7xl mx-auto'>
    <Offer />
    
    </div>
    
    </>
  )
}

export default Home