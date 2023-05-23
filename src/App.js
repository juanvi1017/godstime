import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css";
import Home from './Page/Home';
import RelojesMen from './Page/RelojesMen';
import RelojesWomen from './Page/RelojesWomen';
import ProductPage from './Page/ProductPage';
import Administration from './Page/Administration';
import Error404 from './components/Error404';
import Login from './components/Login';
import { AuthContextProvider } from "./components/AuthContext";
import { PrivateRouter } from './components/PrivateRouter';
import Layout from './components/Layout';
import RelojesSale from './Page/RelojesSale';
import AllStore from './Page/AllStore';

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
              <Route exact path="/relojes/men" element={<RelojesMen />} />
              <Route exact path="/relojes/women" element={<RelojesWomen />} />
              <Route exact path="/relojes/sale" element={<RelojesSale />} />
              <Route exact path="/relojes/store" element={<AllStore />} />
              <Route path="/products/:breadcrumbPage/:productId" element={<ProductPage />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </PrivateRouter>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App