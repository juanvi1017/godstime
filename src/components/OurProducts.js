import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/our-products.css";
import "../styles/popup.css"
import { productsData } from '../data/productsData';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";

// IMAGES
import shoppingBagIcon from "../images/icons/shopping-bag.png"
import addedToBag from "../images/icons/added-to-bag.png"
// import searchIcon from "../images/icons/search.png"
import menuIcon from "../images/icons/menu.png"
import slideIcon from "../images/icons/slide.png"
import saleTag from "../images/icons/sale-tag.png"

import { get } from "../apirest";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);


function OurProducts() {

  const swiperProductsRef = useRef(null);
  const navigate = useNavigate();

  const [isWide, setIsWide] = useState(false);
  const [data, setData] = useState(productsData);

  // const getSales = useCallback(async () => {
  //   const response = await get("product/list")
  //   if (response.status === 200) {
  //     setData(response.data.data)
  //   }
  //   else {
  //     return response;
  //   };
  // }, [])

  useEffect(() => {
    // getSales();
    function handleWidth() {
      if (window.innerWidth >= 767) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    }
    handleWidth()
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);
  // }, [getSales]);


  const [showMenu, setShowMenu] = useState(false)
  const [showSwiper, setShowSwiper] = useState(true)

  const handleShowMenu = () => {
    if (!showMenu) {
      setShowSwiper(false)
      setShowMenu(true)
    }
  }
  const handleShowSwiper = () => {
    if (!showSwiper) {
      setShowSwiper(true)
      setShowMenu(false)
    }
  }

  return (
    <section>
      <div className='our-products-section section'>
        <span className='section-title'>Productos</span>
        <div className='filter-tools row col-12 justify-content-between align-items-center section-container my-2 mx-auto' >
          <div className='col-xl-3 col-md-6 col-sm-6 mt-2 p-0'>
            {/* <div className='filter-option search-input-container d-flex align-items-center justify-content-start'>
              <input className='search-input' placeholder='Search...' type="text" />
              <img className='search-icon' src={searchIcon} alt="search icon" />
            </div> */}
          </div>
          <div className='filter-option filter-show p-0 mt-2 col-xl-3 col-md-6 col-sm-6 justify-content-center show-option d-flex align-items-center'>
            <span className='text-capitalize font-weight-bold mr-1'>show:</span>
            <button onClick={handleShowMenu} className='show-btn d-flex justify-content-center align-items-center mr-2'>
              <img src={menuIcon} className={showMenu ? "active-show-btn" : ""} alt="menu" />
            </button>
            <button onClick={handleShowSwiper} className='show-btn d-flex justify-content-center align-items-center'>
              <img src={slideIcon} className={showSwiper ? "active-show-btn" : ""} alt="slide" />
            </button>
          </div>
        </div>
        <div className="d-none text-center">no matching search, try something else...</div>
        {
          showSwiper
            ?
            <Swiper className='products-container d-flex col-12 justify-content-between'
              ref={swiperProductsRef}
              navigation
              slidesPerView={isWide ? 3 : 1}
            >
              <div className='section-container'>
                {
                  data.map((product) => {
                    return (
                      <SwiperSlide className='product-item col-md-4 justify-content-center' key={product.id}>
                        {product.salePrice ? <img className='sale-tag' src={saleTag} alt='' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Oferta" /> : ""}
                        <Link to={`/products/${product.id}`}>
                          <div className='product-buttons'>
                            <img className='product-icon add-to-cart-icon' src={product.carted ? addedToBag : shoppingBagIcon} alt="add to cart" />
                          </div>
                          <div className='product-img-container'>
                            <img className="product-img zoomProduct" src={product.img} alt={product.title} />
                          </div>
                          <div className='product-info'>
                            <span className='product-title'>{product.name}</span>
                            <p className={product.salePrice ? 'price-on-sale mb-0' : "product-price"}>COP {product.price}</p>
                            {product.salePrice ? <p className='product-price-sale'>COP {product.salePrice}</p> : ""}
                          </div>
                        </Link>
                      </SwiperSlide>
                    )
                  })
                }
              </div>
            </Swiper>
            :
            <div className='section-container'>
              <div className='d-flex row m-0 p-0'>
                {
                  data.map((product) => {
                    return (
                      <div className='product-item col-md-4 col-sm-6 justify-content-center' key={product.id}>
                        {product.salePrice ? <img className='sale-tag' src={saleTag} alt='' /> : ""}
                        <Link to={`/products/${product.id}`}>
                          <div className='product-buttons'>
                            <img className='product-icon add-to-cart-icon' src={product.carted ? addedToBag : shoppingBagIcon} alt="add to cart" />
                          </div>
                          <div className='product-img-container'>
                            <img className="product-img zoomProduct" src={product.img} alt={product.title} />
                          </div>
                          <div className='product-info'>
                            <span className='product-title'>{product.name}</span>
                            <p className={product.salePrice ? 'price-on-sale mb-0' : "product-price"}>COP {product.price}</p>
                            {product.salePrice ? <p className='product-price-sale'>COP {product.salePrice}</p> : ""}
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        }
        <div className='d-flex justify-content-center'>
          <button className='sell-btn' onClick={() => navigate('/relojes/store')}>
            Ver todo
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProducts;


