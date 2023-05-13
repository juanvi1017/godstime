import React, { useContext, useState, useEffect } from 'react';
import AuthContext from "../components/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from './Layout';

export const PublicRouter = ({ children }) => {
  const { user } = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const [componente, setComponente] = useState(true);

  useEffect(() => {
    if (path === '/admin' || path === '/login') {
      if (user && path !== '/admin') {
        navigate('/admin');
      } else {
        navigate('/login');
      }
    } else {
      setComponente(false)
    }
  }, []);

  return (
    !componente && (
      <Layout>
        {children}
      </Layout>
    )
  );

};