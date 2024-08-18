import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Sections/Home/Home";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signin",
            element: <Signin></Signin>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        }
      ]
    },
  ]);