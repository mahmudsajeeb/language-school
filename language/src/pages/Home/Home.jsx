import React from 'react'
import Slider from './Slider'
import Learn from '../Learn/Learn'
import Offers from '../Offer/Offers'
import Offer from '../Offer/Offer'

function Home() {
  return (
    <>
    <Slider />
  
    <div className='mt-16  max-w-7xl mx-auto'>
    <Learn />
    {/* <Offers /> */}
    <Offer />
    </div>
    </>
  )
}

export default Home