import React from 'react';
import "../styles/admin.css";
import { productsData } from '../data/productsData';
import searchIcon from "../images/icons/search.png";
import NavbarAdmin from '../components/NavbarAdmin';
import AddProduct from './ModalProduct';


function Administration() {

    return (
        <><NavbarAdmin />
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-md-3 col-sm-12 products-store-filter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 filter-price">
                                    <button type="button" className="btn button-color btn-block button-color-filter-hover text-white">Filtrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md products-store-admin">
                        <span className='section-title'>Bodega</span>
                        <div className='filter-tools row col-12 justify-content-between align-items-center section-container my-2 mx-auto' >
                            <div className='col-xl-3 col-md-6 col-sm-6 mt-2 p-0'>
                                <div className='filter-option search-input-container d-flex align-items-center justify-content-start'>
                                    <input className='search-input' placeholder='Search...' type="text" />
                                    <img className='search-icon' src={searchIcon} alt="search icon" onClick={() => alert('hola')} />
                                </div>
                            </div>
                            {/* Button trigger modal */}
                            <div className='col-xl-3 col-md-6 col-sm-6 mt-2 p-0'>
                                <button type="button" className="search-icon btn btn-success" data-bs-toggle="modal" data-bs-target="#addproduct">
                                    Agregar producto
                                </button>
                            </div>
                        </div>
                        <div className="d-none text-center">no matching search, try something else...</div>
                        {
                            <div className='table-responsive-sm'>
                                <table className="table table-body">
                                    <thead className='button-color-filter'>
                                        <tr>
                                            <th scope="col" className='text-white'>Nombre</th>
                                            <th scope="col" className='text-white'>Precio</th>
                                            <th scope="col" className='text-white'>Sales Price</th>
                                            <th scope="col" className='text-white'>Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productsData.map((product, index) => {
                                                return (

                                                    <tr key={index}>
                                                        <td>{product.title}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.salePrice}</td>
                                                        <td> </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        <div className="btn-toolbar paginator" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" className="btn btn-primary">{"<<"}</button>
                                <button type="button" className="btn btn-primary">{"<"}</button>
                                <button type="button" className="btn btn-primary">{">"}</button>
                                <button type="button" className="btn btn-primary">{">>"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AddProduct
                title='Agregar producto'
            />
        </>
    )
}

export default Administration;