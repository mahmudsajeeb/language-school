import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes"; 
import Login from "../Login/Login";
import SignIn from "../Login/SignIn/SignIn";
import Instructors from "../Instructors/Instructors";
import Dashboard from "../layouts/Dashboard/Dashboard"
import Mybook from "../pages/Dashboard/Mybook/Mybook"
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AdminRoute from "../Routes/AdminRoute";
import AddaClass from "../pages/Dashboard/Instructors/AddaClass";
import InstrutorRoute from "../Routes/InstructorRoute";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"instructors",
        element: <Instructors />
      },
      {
        path:"classes",
        element:<Classes />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"signin",
        element:<SignIn />
      },
    ],
    
  },
  {
    path:'dashboard',
    element:<PrivateRoutes><Dashboard /></PrivateRoutes>,
    children:[
      {
        path:'mybook',
        element:<Mybook></Mybook>
      },
      {
        path:'manageusers',
        element:<AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path:'myclass',
        element:<MyClasses />
      },
      {
        path:'addaclass',
        element:<InstrutorRoute><AddaClass /></InstrutorRoute>,
      }
    ]
  }
])