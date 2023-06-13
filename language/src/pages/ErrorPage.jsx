import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
    <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" alt="" />
 
      <p className='text-center'>
            <Link
                  to='/'
                  className='px-8 py-3 font-semibold rounded bg-orange-600 text-white-900'
                >
                  Back to homepage
                </Link>

                
      </p>
    </div>
  )
}

export default ErrorPage