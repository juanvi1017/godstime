import React,{useEffect} from 'react'
import "../styles/hero.css"

// Images
import womenSlide from "../images/hero-slides/invicta-women-angel-40300.jpg"
import proDiver40021 from "../images/hero-slides/invicta-pro-diver-40021.jpg"
import menSlide from "../images/hero-slides/invicta-men-pro-diver-24765.jpg"

function Hero() {
  useEffect(() => {
    const nextButton = document.querySelector('.carousel-control-next-icon');
    nextButton.click();
  }, [])
  return (
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='hero-carousel-img-container'>
            <img src={proDiver40021} className="hero-carousel-img d-block w-100" alt="..."/>
        </div>
        <div className='carousel-form'>
          <span className='carousel-title'>GOD'S TIME</span>
          <p className='carousel-desc'>we are in the industry since 2021.</p>
          <button className='btn carousel-btn-shop'>shop now</button>
        </div>
      </div>
      <div className="carousel-item">
        <div className='hero-carousel-img-container'>
          <img src={womenSlide} className="hero-carousel-img d-block w-100" alt="..."/>
        </div>
        <div className='carousel-form'>
        <span className='carousel-title'>GOD'S TIME</span>
        <p className='carousel-desc'>we are in the industry since 2021.</p>
        <button className='btn carousel-btn-shop'>shop now</button>
      </div>
      </div>
      <div className="carousel-item">
        <div className='hero-carousel-img-container'>
          <img src={menSlide} className="hero-carousel-img d-block w-100" alt="..."/>
        </div>
        <div className='carousel-form'>
        <span className='carousel-title'>GOD'S TIME</span>
        <p className='carousel-desc'>we are in the industry since 2021.</p>
        <button className='btn carousel-btn-shop'>shop now</button>
      </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Siguiente</span>
    </button>
  </div>
  )
}

export default Hero