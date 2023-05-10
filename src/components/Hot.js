import React from 'react'
import "../styles/hot.css"
import newCollection from "../images/hot/new-collection.jpg"
import confort from "../images/hot/confort.jpg"
import elegancia from "../images/hot/elegancia.jpg"

function Hot() {
  return (
    <div className='hot-section'>
        <div className='container'>
            <div className='col-12 row m-0 p-0 d-flex'>
                <div className='hot-item col-md-4'>
                    <img className='w-100 hot-img' src={elegancia} alt=''/>
                    <button className='hot-btn'>Elegancia</button>
                </div>
                <div className='hot-item col-md-4'>
                    <img className='w-100 hot-img' src={newCollection} alt=''/>
                    <button className='hot-btn'>Exclusividad</button>
                </div>
                <div className='hot-item col-md-4'>
                    <img className='w-100 hot-img' src={confort} alt=''/>
                    <button className='hot-btn'>confort</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hot