import React, { useEffect } from 'react'
import "../styles/home.css"
import Hero from '../components/Hero'
import LookingGodsTime from '../components/LookingGodsTime'
import OurProducts from '../components/OurProducts'
import Hot from '../components/Hot'
import Why from '../components/Why'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <LookingGodsTime />
      <OurProducts />
      <Hot />
      <Why />
    </div>
  )
}

export default Home