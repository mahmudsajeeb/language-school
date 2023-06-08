import React, { useState } from 'react';

const Offer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getCardClassNames = (index) => {
    if (hoveredIndex === index) {
      return 'relative w-64 h-64 overflow-hidden bg-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105';
    }
    return 'relative w-64 h-64 overflow-hidden bg-white rounded-lg shadow-md';
  };

  const cards = [
    {
      imageSrc: 'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/image-7.jpg',
      heading: "General Courses",
      text: 'Our language centre offers group or personal lessons, various modern languages for all ages and levels of knowledge.',
    },
    {
      imageSrc: 'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/image-8.jpg',
      heading: "Any Age Courses",
      text: 'Our teaching staff knows a unique way learning children. Our face-to-face courses have been designed with this in mind.',
    },
    {
      imageSrc: 'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/course-1.jpg',
      heading: "Language for Business",
      text: 'You will be introduced to conversational vocabulary and dialogues to help you learn a language and get experience.',
    },
    {
      imageSrc: 'https://language-center.ancorathemes.com/wp-content/uploads/2016/10/image-9.jpg',
      heading: "Online Learning",
      text: 'Learn languages with us and take a unique chance to improve practical language skills and increase the level of knowledge.',
    },
  ];

  return (
    <>
      <h1 className='text-center text-slate-700 text-5xl font-semibold mb-4'>What We Offer</h1>
      <p className='text-center text-cyan-400 mb-7'>New Programs</p>
      <div className="flex mb-10 justify-center items-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={getCardClassNames(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-full">
                <img
                  src={card.imageSrc}
                  alt="Card Image"
                  className="w-full h-full object-cover"
                />
                {hoveredIndex === index && (
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 text-white text-center">
                    <p className="text-2xl">{card.heading}</p>
                    <p className="mt-2">{card.text}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
