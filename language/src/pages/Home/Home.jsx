import React, { useState } from 'react';
import Slider from './Slider';
import Learn from '../Learn/Learn';
import Offer from '../Offer/Offer';
import Instructors from '../../Instructors/Instructors';
import PopularClasses from './PopularClasses';
import { Helmet } from 'react-helmet-async';

function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={`bg-${isDarkTheme ? 'black' : 'white'}`}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='fixed top-4 right-60'>
        <button
          className='bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-gray-700 dark:text-gray-300'
          onClick={toggleTheme}
        >
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
      <Slider />

      <div className={`mt-16 max-w-7xl mx-auto ${isDarkTheme ? 'text-white' : 'text-black'}`}>
        <Learn />

        {/* popular instructors */}
        <div>
          <h1 className={`text-center text-5xl font-semibold mb-10 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            Popular Instructors
          </h1>
          <div className='m-4 rounded-md mx-auto w-1/2 border-2 border-[#5BD9B3]'></div>
          <Instructors />
        </div>

        <PopularClasses />
      </div>
      <div className={`max-w-7xl mx-auto ${isDarkTheme ? 'text-white' : 'text-black'}`}>
        <Offer />
      </div>
    </div>
  );
}

export default Home;
