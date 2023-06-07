import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructor/Instructors";

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
        element:<Instructors />
      },
      {
        path:"classes",
        element:<Classes />
      },
    ]
  }
])