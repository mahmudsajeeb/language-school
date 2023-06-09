 
import { useForm } from 'react-hook-form'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'; 
 
import { Helmet, HelmetProvider } from 'react-helmet-async';

 
 
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    const { email, password } = data;
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
    })
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  return (
    <>
     <Helmet>
    <title>Login</title>
    </Helmet>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="text-gray-700">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long'
              }
            })}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-[#5BD9B3] rounded hover:bg-indigo-600"
      >
        Login
      </button>
      <p>Create an Account<Link className='ml-3 underline hover:bg-text-500' to="/signin"> Sign</Link></p>
    </form>
   
    </>
  );
};

export default Login;
