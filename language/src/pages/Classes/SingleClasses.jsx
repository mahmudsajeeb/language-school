import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useBook from '../../hook/UseBook'

function SingleClasses({classes}) {
  console.log("classes",classes)
  const {_id,name,image,availableSeats,instructor,price} =classes
  const {user} = useContext(AuthContext) 
  const [,refetch] = useBook()
  const navigate = useNavigate() 
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"


  const handleBook = async (book) => {
    if (user && user.email) {
      const bookItem = {
        bookItemId:_id,
        name,
        image,
        availableSeats,
        instructor,
        price,
        email:user.email
      };
  
      try {
        const response = await fetch('http://localhost:1000/books', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookItem),
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.insertedId) {
            refetch()
            Swal.fire({
              title: 'Success!',
              text: 'Book is added',
              icon: 'success',
              confirmButtonText: 'OK',
            });
          }
        } else {
          throw new Error('Failed to add book');
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Bood Is already added',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } else {
      Swal.fire({
        title: 'Please Login Before Booking',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  
   
  return (
    <div>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="px-4 py-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">Instructor: {instructor}</p>
        <p className="text-sm text-gray-500">Available Seats: {availableSeats}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">${price}</p>
        <button onClick={()=>handleBook(classes)} className="mt-4 px-4 py-2 bg-[#5BD9B3] hover:bg-blue-600 text-white rounded-md">
          Select Class
        </button>
      </div>
    </div>
    </div>
  )
}

export default SingleClasses