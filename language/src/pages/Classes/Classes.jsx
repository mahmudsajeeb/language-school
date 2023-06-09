import React from 'react'
import PopularClasses from '../Home/PopularClasses'
import { Helmet } from 'react-helmet-async'

function Classes() {
  return (

    <div>
     <Helmet>
    <title>Classes</title>
    </Helmet>
    <PopularClasses />
    </div>
  )
}

export default Classes