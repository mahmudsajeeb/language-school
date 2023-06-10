import { useContext } from "react"; 
import { useForm } from "react-hook-form";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";
const SignIn = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register,watch , handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    // Handle form submission
    createUser(data.email,data.password)
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
         updateUserProfile(data.name, data.photoURL)
         .then(()=>{
          const saveUser = {name: data.name,email:data.email}
          fetch('http://localhost:1000/users',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data =>{
              if(data.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate("/")
                // ...
              }
          })
        }).catch(error => console.log(error))
    })
  };

  const password = watch('password');

  return (
    <>
    <Helmet>
      <title>SignIn</title>
    </Helmet>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && <span className="text-red-500">Email is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(),.?":{}|<>]).{6,}$/,
              message: 'Password must contain at least one capital letter and one special character',
            },
          })}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === password || 'Passwords do not match',
          })}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="photoUrl" className="block text-gray-700">
          Photo URL:
        </label>
        <input
          type="text"
          id="photoUrl"
          {...register('photoUrl', {
            required: true,
            minLength: {
              value: 6,
              message: 'Photo URL must be at least 6 characters long',
            },
          })}
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.photoUrl && (
          <span className="text-red-500">{errors.photoUrl.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-[#5BD9B3] rounded hover:bg-indigo-600"
      >
        Sign In
      </button>
      <p>Create an Account<Link className='ml-3 underline hover:bg-text-500' to="/login"> Login</Link></p>
      
    </form>
    </>
  );
};

export default SignIn;