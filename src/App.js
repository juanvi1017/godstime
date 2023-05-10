import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./styles/app.css";
import Home from './components/Home';
import Relojes from './components/Relojes';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage'
import { chatWhatsApp } from './util/javascript'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/relojes' element={<Relojes />} />
        <Route path="/products/:productId" element={<ProductPage/>} />
      </Routes>
      <img class="btn-whatsapp" src="https://clientes.dongee.com/whatsapp.png" width="64" height="64" alt="Whatsapp"
        onClick={() => chatWhatsApp('')}>
      </img>
      <Footer />
    </BrowserRouter>
  )
}

export default App