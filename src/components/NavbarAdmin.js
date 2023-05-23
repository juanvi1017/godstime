import React, { useState, useEffect } from 'react';
import "../styles/navbar.css";
import { useLocation, Link } from 'react-router-dom'

// Images
import whiteLogo from "../images/white-logo.png"
import sidebar from "../images/icons/sidebar.png"
import whiteSidebar from "../images/icons/white-sidebar.png"
import whiteUserIcon from "../images/icons/white-user.png"


function NavbarAdmin() {
  const [locationHome, setLocationHome] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;
  useEffect(() => {
    if (currentLocation === '/') {
      setLocationHome(true);
    } else {
      setLocationHome(false);
    }

  }, [currentLocation]);

  // Check Window Scroll To Change Navbar Color from transparent to white
  const [isNotTop, setNotTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!locationHome) {
        setNotTop(true);
      } else {
        if (window.scrollY > 10) {
          setNotTop(true);
        } else {
          setNotTop(false);
        }
      }
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll)
  }, [locationHome])

  return (
    <div className='navbar-section background-nav'>
      <div className='section-container'>
        <nav className='d-flex align-items-center navbar navbar-expand-lg d-flex justify-content-between align-items-center row col-12 p-0 m-0'>
          <Link to="/" className='nav-brand col-2 justify-content-start align-items-center p-0'>
            <img className='nav-logo' src={whiteLogo} alt="logo" />
          </Link>

          <div className='collapse navbar-collapse justify-content-center width' id="collapseWidthExample">
            <button className='close-sidebar' data-toggle="collapse" data-target="#collapseWidthExample" aria-controls="collapseWidthExample" aria-expanded="false" aria-label="Toggle navigation">X</button>

            <div className='nav-sidebar-logo d-none justify-content-center p-0'>
              <img className='nav-logo' src={whiteLogo} alt="logo"/>
            </div>
            <ul className="navbar-nav d-flex mt-4">
              <li className='nav-item' data-toggle="collapse" data-target="#collapseWidthExample" aria-controls="collapseWidthExample" role="menuitem" aria-label="Toggle navigation">
                <Link to="/admin" className='nav-link text-color'>Bodega</Link>
              </li>
              <li className='nav-item' data-toggle="collapse" data-target="#collapseWidthExample" aria-controls="collapseWidthExample" role="menuitem" aria-label="Toggle navigation">
                <Link to="/pagos" className='nav-link text-color'>Pagos</Link>
              </li>
            </ul>
          </div>
          <div className='d-flex justify-content-end align-items-center nav-icons col-4'>

            <div className="dropdown">
              <button className="nav-btn p-0" type="button" data-toggle="dropdown" aria-expanded="false">
                <img className='nav-user-icon nav-icon' src={whiteUserIcon} alt="logo" />
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">Hello</Link>
              </div>
            </div>

          </div>
          <div className='nav-sidebar navbar-toggler col-2' data-toggle="collapse" data-target="#collapseWidthExample" aria-controls="collapseWidthExample" aria-expanded="false" aria-label="Toggle navigation">
            <img className='nav-sidebar-icon nav-icon navbar-toggler-icon p-1' src={isNotTop ? sidebar : whiteSidebar} alt="logo" />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavbarAdmin