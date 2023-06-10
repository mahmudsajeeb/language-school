import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes"; 
import Login from "../Login/Login";
import SignIn from "../Login/SignIn/SignIn";
import Instructors from "../Instructors/Instructors";

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
    ]
  }
])