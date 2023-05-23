import React, { useContext, useEffect } from 'react';
import AuthContext from "../components/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (path === '/admin' || path === '/login') {
            if (user && path !== '/admin') {
                navigate('/admin');
            }
            if (!user && path !== '/login') {
                navigate('/login');
            }
        }
    }, [navigate, path, user]);

    return (
        <>
            {children}
        </>
    );

};