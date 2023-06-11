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
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
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
    element:<Dashboard />,
    children:[
      {
        path:'mybook',
        element:<Mybook></Mybook>
      },
      {
        path:'manageusers',
        element:<ManageUsers />
      }
    ]
  }
])