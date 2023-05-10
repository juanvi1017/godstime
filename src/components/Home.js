import React, { useEffect } from 'react'
import "../styles/home.css"
import Hero from './Hero'
import LookingGodsTime from './LookingGodsTime'
import OurProducts from './OurProducts'
import Hot from './Hot'
import Why from './Why'

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