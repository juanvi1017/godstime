import React from 'react'
import "../styles/why.css"
import worldwide from '../images/illustrations/worldwide.svg'
import fashionTrends from '../images/illustrations/fashion-trends.svg'
import discount from '../images/illustrations/discount.svg'

function Why() {
  return (
    <div className='why-us-section'>
        <p className='section-title'>why Colombia?</p>
        <div className="container">
            <div className='col-12 row p-0 m-0 align-items-center justify-content-center'>
                <div className='why-us-card col-md-4 col-12 justify-content-center'>
                    <img className='w-100' src={fashionTrends} alt=''/>
                    <h5 className='font-weight-bold text-uppercase text-center mt-2'>fashion trends</h5>
                    <p className='text-center'>moda</p>
                </div>
                <div className='why-us-card col-md-4 col-12 justify-content-center'>
                    <img className='w-100' src={worldwide} alt=''/>
                    <h5 className='font-weight-bold text-uppercase text-center mt-2'>Envío a toda colombia</h5>
                    <p className='text-center'>te atraparemos estés donde estés </p>
                </div>
                <div className='why-us-card col-md-4 col-12 justify-content-center'>
                    <img className='w-100' src={discount} alt=''/>
                    <h5 className='font-weight-bold text-uppercase text-center mt-2'>nuestros descuentos</h5>
                    <p className='text-center'>tu bolsillo está en buenas manos</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why