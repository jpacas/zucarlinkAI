import React from 'react'
import NavBar from '../components/NavBar'
import CTA from '../components/CTA'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <CTA />
      <Benefits />
      <Footer />
    </>
  )
}

export default Home
