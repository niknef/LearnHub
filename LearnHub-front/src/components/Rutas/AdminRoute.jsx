import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


const AdminRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem("token");

    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.role === "profesor") {
            return children;
        }
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
