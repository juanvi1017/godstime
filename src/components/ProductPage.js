import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/product-page.css"
import { productsData } from './../data/productsData';
import { chatWhatsApp } from '../util/javascript';

// Images
import whiteShoppingBagIcon from "../images/icons/white-shopping-bag.png";
import addedToBag from "../images/icons/added-to-bag.png";
import heartIcon from "../images/icons/heart.png";
import faved from "../images/icons/faved.png";

const ProductPage = () => {

    const { productId } = useParams();

    const [myProduct, setMyProduct] = useState(null)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const targetedProduct = productsData.find((product) => product.id === productId);
        setMyProduct(targetedProduct);
        setLoading(false);
    }, []);

    return (
        <div className='product-page-section section'>
            {loading && (
                <h2>Cargando...</h2>
            )}
            {!loading && (
                <div className='container'>
                    <div className='col-12 row m-0 p-0 align-items-center'>
                        <div className='col-md-6 pt-4'>
                            <img className='product-page-img w-100 zoom' src={myProduct.img} />
                        </div>
                        <div className='col-md-6 py-4'>
                            <h2 className='text-uppercase font-weight-bold'>{myProduct.title}</h2>
                            <p className={myProduct.salePrice ? 'price-on-sale mb-0 mt-2' : "font-weight-bold product-price mt-2"}>COP {myProduct.price}</p>
                            {myProduct.salePrice ? <p className='product-price-sale'>COP {myProduct.salePrice}</p> : ""}
                            <p className='font-weight-light'>{myProduct.description}</p>
                            <div className='product-buttons d-flex align-items-center'>
                                <button onClick={() => chatWhatsApp(myProduct.title)} className='add-to-bag-btn text-uppercase d-flex align-items-center justify-content-center mt-4'><img className='shopping-bag mr-1' src={myProduct.carted ? addedToBag : whiteShoppingBagIcon} />Comprar</button>
                                <button className='add-to-favs-btn text-uppercase d-flex align-items-center mt-4'><img className='fav-heart' src={myProduct.faved ? faved : heartIcon} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductPage;
