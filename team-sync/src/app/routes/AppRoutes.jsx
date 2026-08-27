import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLAyout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import Register from "../../features/auth/ui/pages/Register";

const AppRoutes = () =>{
    let router = createBrowserRouter([
        {
            path:"/",
            element:< AuthLAyout />,
            children:[
                {
                    path:"",
                    element:<Login />
                },
                {
                    path:"register",
                    element: <Register />
                }
            ]
        },
        {
           path:"/home",
           element: <DashboardLayout />,
           children:[
            {
                path:"",
                element:<Home />
            }
           ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes;