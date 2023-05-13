import Navbar from './Navbar';
import Footer from './Footer';
import { chatWhatsApp } from '../util/javascript';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <img className="btn-whatsapp" src="https://clientes.dongee.com/whatsapp.png" width="64" height="64" alt="Whatsapp"
        onClick={() => chatWhatsApp('')}>
      </img>
      <Footer/>
    </>
  );
};
export default Layout;