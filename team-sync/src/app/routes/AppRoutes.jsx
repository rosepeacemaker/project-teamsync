import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLAyout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import Register from "../../features/auth/ui/pages/Register";
import Welcome from  "../../features/dashboard/ui/pages/Welcome";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import { useDispatch } from "react-redux";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import AuthLayout from "../../components/authSharedcompo/AuthLayout";

const AppRoutes = () =>{
    let dispatch = useDispatch();

useEffect(()=>{
    (()=> {
dispatch(currentLoggedEmployee());
    })();
},[])


   const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },

  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: < AuthLayout />,
        children: [
          {
            path: "",
            element: <Login />,
          },
        ],
      },
      {
        path: "/register",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Register />,
          },
        ],
      },
    ],
  },

  {
    path: "/home",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

    return <RouterProvider router={router} />
}

export default AppRoutes;