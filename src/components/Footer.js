import React from 'react'
import whiteLogo from "../images/white-logo.png"
import "../styles/footer.css"
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='row col-12 p-0 m-0'>
                <div className='col-md-6'>
                    <Link to ="/" className='d-flex align-items-center footer-link'>
                        <img className='footer-logo' src={whiteLogo} alt=''/>
                        <h3 className='text-uppercase font-weight-bold m-0 text-color'>God's Time.</h3>
                    </Link>
                    <p className='text-uppercase footer-text'>ESTAMOS AQUÍ PARA AYUDARLE A ENCONTRAR SU PRÓXIMO ACCESORIO. DISFRUTA Y PÁSATELO BIEN</p>
                </div>
                <div className='col-md-3 social-media'>
                    <ul>
                        <li className="footer-title">social media</li>
                        <li><a href="/#" className="footer-link">facebook</a></li>
                        <li><a href="/#" className="footer-link">instagram</a></li>
                        <li><a href="/#" className="footer-link">tiktok</a></li>
                    </ul>
                </div>
                <div className='col-md-3 help-center'>
                    <ul>
                        <li className="footer-title">about god's time</li>
                        <li><a href="/#" className="footer-link">faq</a></li>
                        <li><Link to={"/addresses"} className="footer-link">addresses</Link></li>
                        <li><a href="/#" className="footer-link">term of service</a></li>
                        <li><a href="/#" className="footer-link">policy service</a></li>
                    </ul>
                </div>
            </div>
            <p className='text-color text-uppercase text-center p-4'>copyright © 2023 - 2028 all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer