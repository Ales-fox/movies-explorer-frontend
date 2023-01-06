import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ loggedIn }) => {
    // Хук для того чтобы впоследствии можно было организовать функцию вернуться на страницу назад
    // const location = useLocation();

    return (loggedIn? <Outlet/> : <Navigate to='/' /*state={{from: location}}*//>)
}

export default ProtectedRoute;
