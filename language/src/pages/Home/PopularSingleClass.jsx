import React from 'react'

function PopularSingleClass({popularclass}) {
  const {name,image,availableSeats,instructor,price} =popularclass
  return (
    <div>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="px-4 py-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">Instructor: {instructor}</p>
        <p className="text-sm text-gray-500">Available Seats: {availableSeats}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">${price}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          Enroll Now
        </button>
      </div>
    </div>
    </div>
  )
}

export default PopularSingleClass