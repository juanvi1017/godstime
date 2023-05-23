import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/product-page.css"
import { productsData } from '../data/productsData';
import { chatWhatsApp, getRandomIntInclusive, chatWhatsAppHelp } from '../util/javascript';

// Images
import whiteShoppingBagIcon from "../images/icons/white-shopping-bag.png";
import addedToBag from "../images/icons/added-to-bag.png";
import heartIcon from "../images/icons/heart.png";
import faved from "../images/icons/faved.png";

const access = [
    { 'label': 'Relojes Hombre', 'link': '/relojes/men' },
    { 'label': 'Relojes Mujer', 'link': '/relojes/women' },
    { 'label': 'Ofertas', 'link': '/relojes/sale' },
    { 'label': 'Tienda', 'link': '/relojes/store' }
]

const ProductPage = () => {

    const { productId, breadcrumbPage } = useParams();

    const [myProduct, setMyProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState(false);
    const [detalle, setDetalle] = useState(true);
    const [help, setHelp] = useState(false);
    const [numberOnline, setNumberOnline] = useState(4);
    const [link, setLink] = useState('');

    const changeCollapse = (num) => {
        if (num === 0) {
            if (!description) {
                setDescription(true);
                setDetalle(false);
                setHelp(false);
            }
        } else if (num === 1) {
            if (!detalle) {
                setDescription(false);
                setDetalle(true);
                setHelp(false);
            }
        } else if (num === 2) {
            if (!help) {
                setDescription(false);
                setDetalle(false);
                setHelp(true);
            }
        }
    }

    const getLink = useCallback(async (value) => {
        let data = await access.find((element) =>
            element.label.toString().toLowerCase().includes(value.toString().toLowerCase())
        );
        setLink(data.link);
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        getLink(breadcrumbPage);
    }, [getLink, breadcrumbPage]);

    useEffect(() => {
        const targetedProduct = productsData.find((product) => product.id === productId);
        setMyProduct(targetedProduct);
        setLoading(false);
    }, [productId]);

    useEffect(() => {
        const interval = setInterval(() => {
            const number = getRandomIntInclusive(4, 10);
            setNumberOnline(number);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='product-page-section section'>
            {loading && (
                <h2>Cargando...</h2>
            )}
            {!loading && (
                <div className='container'>
                    <div className="col-md-12 product-page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li className="breadcrumb-item"><a href={link}>{breadcrumbPage}</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Reloj</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='col-12 row m-0 p-0 align-items-center'>
                        <div className='col-md-6 pt-4'>
                            <img className='product-page-img w-100 zoom' src={myProduct.img} alt='' />
                        </div>
                        <div className='col-md-6 py-4'>
                            <h2 className='text-uppercase font-weight-bold'>{myProduct.title}</h2>
                            <p className={myProduct.salePrice ? 'price-on-sale mb-0 mt-2' : "font-weight-bold product-price mt-2"}>COP {myProduct.price}</p>
                            {myProduct.salePrice ? <p className='product-price-sale'>COP {myProduct.salePrice}</p> : ""}
                            <p className='font-weight-light'>{myProduct.description}</p>
                            <div className='product-buttons d-flex align-items-center'>
                                <button onClick={() => chatWhatsApp(myProduct.title)} className='add-to-bag-btn text-uppercase d-flex align-items-center justify-content-center mt-4'><img className='shopping-bag mr-1' src={myProduct.carted ? addedToBag : whiteShoppingBagIcon} alt='' />Comprar</button>
                                <button className='add-to-favs-btn text-uppercase d-flex align-items-center mt-4'><img className='fav-heart' src={myProduct.faved ? faved : heartIcon} alt='' /></button>
                                <div className='random-user add-to-bag-btn text-uppercase d-flex align-items-center justify-content-center mt-4'>
                                    {numberOnline} en linea
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='collapse-section'>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className={description ? "btn btn-success active" : "btn btn-success"} onClick={() => changeCollapse(0)}>Descripción</button>
                            <button type="button" className={detalle ? "btn btn-success active" : "btn btn-success"} onClick={() => changeCollapse(1)}> Detalle</button>
                            <button type="button" className={help ? "btn btn-success active" : "btn btn-success"} onClick={() => changeCollapse(2)}>Necesitas Ayuda</button>
                        </div>
                    </div>
                    {description && (
                        <div>
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    )}
                    {detalle && (
                        <div>
                            <div className="card card-body">
                                placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    )}
                    {help && (
                        <div>
                            <div className="card card-body">
                                Comunícate con nuestros equipo de servicio al cliente dando clic <span className='span-red' onClick={() => chatWhatsAppHelp()}>aquí</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductPage;
