import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import GlobalCoverage from './components/GlobalCoverage'
import MarketExpertise from './components/MarketExpertise'
import MarketDataPreview from './components/MarketDataPreview'
import ContactUs from './components/ContactUs'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#070D1B] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <GlobalCoverage />
        <MarketExpertise />
        <MarketDataPreview />
        <ContactUs />
      </main>
    </div>
  )
}

export default Home
