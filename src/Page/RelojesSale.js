import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/products-store.css";
import "../styles/popup.css";
import { productsData } from '../data/productsData';
import { formatoMoneda } from '../util/javascript';


// IMAGES
// import shoppingBagIcon from "../images/icons/shopping-bag.png";
// import addedToBag from "../images/icons/added-to-bag.png";
// import heartIcon from "../images/icons/heart.png";
// import faved from "../images/icons/faved.png";
import saleTag from "../images/icons/sale-tag.png";


function RelojesSale() {

    const [priceMax, setPriceMax] = useState(5000000);

    const changePrice = (event) => {
        setPriceMax(event.target.value);
    };

    return (
        <div className="container-products">
            <div className="row">
                <div className="col-md-12 product-breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Ofertas</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-12 title-product-store">
                    <p className='title-product'>Relojes en ofertas</p>
                    <p>Aprovecha nuestros precios en relojería y no pierdas la oportunidad de tener tu reloj favorito.</p>
                </div>
                <div className="col-md-2 products-store">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle col-md-12 text-filter-product" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Genero
                                    </button>
                                    <ul className="dropdown-menu col-md-12" aria-labelledby="dropdownMenuButton1">
                                        <li className="dropdown-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="hombre" />
                                                <label className="form-check-label">
                                                    Hombre
                                                </label>
                                            </div>
                                        </li>
                                        <li className="dropdown-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="mujer" />
                                                <label className="form-check-label">
                                                    Mujer
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle col-md-12 text-filter-product" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Material
                                    </button>
                                    <ul className="dropdown-menu col-md-12" aria-labelledby="dropdownMenuButton1">
                                        <li className="dropdown-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="metalico" />
                                                <label className="form-check-label">
                                                    Metalico
                                                </label>
                                            </div>
                                        </li>
                                        <li className="dropdown-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="silicona" />
                                                <label className="form-check-label">
                                                    Silicona
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle col-md-12 text-filter-product" type="button" id="dropdownMenuPrecio" data-bs-toggle="dropdown" aria-expanded="false">
                                        Precio
                                    </button>
                                    <ul className="dropdown-menu col-md-12" aria-labelledby="dropdownMenuPrecio">
                                        <li className="dropdown-item">
                                            <input
                                                type='range'
                                                onChange={changePrice}
                                                min={300000}
                                                max={5000000}
                                                step={20000}
                                                value={priceMax}
                                                className='custom-slider'
                                            ></input>
                                            <p>Max {formatoMoneda(priceMax)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 products-store">
                    <div className="d-none text-center">no matching search, try something else...</div>
                    {
                        <div className='row'>
                            {
                                productsData.map((product) => {
                                    return (
                                        <div className='product-item col-md-3' key={product.id}>
                                            {product.salePrice ? <img className='sale-tag' src={saleTag} alt='' /> : ""}
                                            <Link to={`/products/Ofertas/${product.id}`}>
                                                {/* <div className='product-buttons'>
                                                    <img className='product-icon add-to-cart-icon' src={product.carted ? addedToBag : shoppingBagIcon} alt="add to cart" />
                                                    <img className='product-icon add-to-favs-icon' src={product.faved ? faved : heartIcon} alt="add to favorites" />
                                                </div> */}
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
                    }
                </div>
            </div>
        </div>
    )
}

export default RelojesSale;