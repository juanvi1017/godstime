import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/app.css";
import Home from './Page/Home';
import RelojesMen from './Page/RelojesMen';
import RelojesWomen from './Page/RelojesWomen';
import ProductPage from './Page/ProductPage';
import Error404 from './components/Error404';
import Layout from './components/Layout';
import RelojesSale from './Page/RelojesSale';
import AllStore from './Page/AllStore';

function App() {

  return (
    <BrowserRouter>
          <Routes>
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
    </BrowserRouter>
  )
}

export default App