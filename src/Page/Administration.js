import React from 'react';
import "../styles/admin.css";
import { productsData } from '../data/productsData';
import searchIcon from "../images/icons/search.png";
import Navbar from '../components/Navbar';


function Administration() {

    return (
        <><Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-md-3 col-sm-12 products-store-filter">
                        <div className="container filter">
                            {/* //fdfsdfs */}
                        </div>
                        <div className="filter-phone"> {/* Para smartphone */}
                            <div className="btn-group d-grid gap-2 col-12 mx-auto" role="group" aria-label="Basic example">
                                {/* <button type="button" className="btn button-color-filter text-white">Hombre</button>
                            <button type="button" className="btn button-color-filter text-white">Mujer</button> */}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 filter-price">
                                    {/* <label className="form-label">Precio Maximo</label>
                                <input
                                    type='range'
                                    onChange={changePrice}
                                    min={300000}
                                    max={5000000}
                                    step={20000}
                                    value={priceMax}
                                    className='custom-slider'
                                ></input>
                                <p>{formatoMoneda(priceMax)}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 filter-price">
                                    <button type="button" className="btn button-color btn-block button-color-filter-hover text-white">Filtrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md products-store">
                        <span className='section-title'>Bodega</span>
                        <div className='filter-tools row col-12 justify-content-between align-items-center section-container my-2 mx-auto' >
                            <div className='col-xl-3 col-md-6 col-sm-6 mt-2 p-0'>
                                <div className='filter-option search-input-container d-flex align-items-center justify-content-start'>
                                    <input className='search-input' placeholder='Search...' type="text" />
                                    <img className='search-icon' src={searchIcon} alt="search icon" onClick={() => alert('hola')} />
                                </div>
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
        </>
    )
}

export default Administration;