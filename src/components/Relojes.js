import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/products-store.css";
import "../styles/popup.css";
import { productsData } from '../data/productsData';


// IMAGES
import shoppingBagIcon from "../images/icons/shopping-bag.png";
import addedToBag from "../images/icons/added-to-bag.png";
import heartIcon from "../images/icons/heart.png";
import faved from "../images/icons/faved.png";
import searchIcon from "../images/icons/search.png";
import saleTag from "../images/icons/sale-tag.png";


function Relojes() {

    const [priceMax, setPriceMax] = useState(5000000);

    const changePrice = (event) => {
    setPriceMax(event.target.value);
  };

    return (
        <div className='container bodyStore'>
            <div class="row">
                <section className='col-xl-2 col-md-3 col-sm-12'>
                    <div className='products-store filter'>
                        <div class="option-filter">
                            Hombre
                        </div>
                        <div class="option-filter">
                            Mujer
                        </div>
                        <label class="form-label">Precio Maximo</label>
                        <input
                            type='range'
                            onChange={changePrice}
                            min={300000}
                            max={5000000}
                            step={1}
                            value={priceMax}
                            className='custom-slider'
                        ></input>
                        <h4>{priceMax}</h4>
                    </div>
                </section>
                <section className='col-xl-10 col-md-7 col-sm-12'>
                    <div className='products-store'>
                        <span className='section-title'>Articulos</span>
                        <div className='filter-tools row col-12 justify-content-between align-items-center section-container my-2 mx-auto' >
                            <div className='col-xl-3 col-md-6 col-sm-6 mt-2 p-0'>
                                <div className='filter-option search-input-container d-flex align-items-center justify-content-start'>
                                    <input className='search-input' placeholder='Search...' type="text" />
                                    <img className='search-icon' src={searchIcon} alt="search icon" />
                                </div>
                            </div>
                        </div>
                        <div className="d-none text-center">no matching search, try something else...</div>
                        {
                            <div className='section-container'>
                                <div className='d-flex row m-0 p-0'>
                                    {
                                        productsData.map((product) => {
                                            return (
                                                <div className='product-item col-md-6 col-sm-12 justify-content-center' key={product.id}>
                                                    {product.salePrice ? <img className='sale-tag' src={saleTag} alt='' /> : ""}
                                                    <Link to={`/products/${product.id}`}>
                                                        <div className='product-buttons'>
                                                            <img className='product-icon add-to-cart-icon' src={product.carted ? addedToBag : shoppingBagIcon} alt="add to cart" />
                                                            <img className='product-icon add-to-favs-icon' src={product.faved ? faved : heartIcon} alt="add to favorites" />
                                                        </div>
                                                        <div className='product-img-container'>
                                                            <img className="product-img zoomProductStore" src={product.img} alt={product.title} />
                                                        </div>
                                                        <div className='product-info'>
                                                            <span className='product-title'>{product.title}</span>
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Relojes;