import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ ...props }) => {
    // Хук для того чтобы впоследствии можно было организовать функцию вернуться на страницу назад
    const location = useLocation();

    return props.loggedIn? <Outlet/> : <Navigate to='/signin' state={{from: location}}/>
}

export default ProtectedRoute;
