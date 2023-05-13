import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css";
import Home from './Page/Home';
import Relojes from './Page/Relojes';
import ProductPage from './Page/ProductPage';
import Administration from './Page/Administration';
import Error404 from './components/Error404';
import Login from './components/Login';
import { AuthContextProvider } from "./components/AuthContext";
import { PrivateRouter } from './components/PrivateRouter';
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <PrivateRouter>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/admin" element={<Administration />} />

            <Route path="/" element={<Layout />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/relojes" element={<Relojes />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </PrivateRouter>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App