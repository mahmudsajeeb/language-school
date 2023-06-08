import React from 'react'
import Slider from './Slider'
import Learn from '../Learn/Learn'

function Home() {
  return (
    <>
    <Slider />
    <div className='mt-16 max-w-7xl mx-auto'>
    <Learn />
    </div>
    </>
  )
}

export default Home