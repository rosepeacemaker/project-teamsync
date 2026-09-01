import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLAyout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import Register from "../../features/auth/ui/pages/Register";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import { useDispatch } from "react-redux";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";

const AppRoutes = () =>{
    let dispatch = useDispatch();

useEffect(()=>{
    (()=> {
dispatch(currentLoggedEmployee());
    })();
},[])


    let router = createBrowserRouter([
        {
            path:"/",
            element: <PublicRoute />,
            children: [
                {
                    path:"",
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
                }
            ]
         
        },
        {
           path:"/home",
           element: <ProtectedRoute />,
           children: [
            {

                path: "",
                  element: <DashboardLayout />,
           children:[
            {
                path:"",
                element:<Home />
            }
           ]
            }
           ]
         
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes;