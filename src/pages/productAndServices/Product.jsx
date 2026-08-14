import React from 'react';
import Navbar from '../../components/common/Navbar';
import Hero from './components/Hero';
import BunkerTrading from './components/BunkerTrading';
import SupplySolutions from './components/SupplySolutions';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import MaritimeBanner from './components/MaritimeBanner';
import LubricantTrading from './components/LubricantTrading';
import TrustedPartnerCTA from './components/TrustedPartnerCTA';
import ContactUs from '../home/components/ContactUs';

const Product = () => {
  return (
    <div className="min-h-screen bg-[#070D1B] text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <BunkerTrading />
        <SupplySolutions />
        <WhyUsSection />
        <ServicesSection />
        <MaritimeBanner />
        <LubricantTrading />
        <TrustedPartnerCTA />
        <ContactUs />
      </main>
    </div>
  );
};

export default Product;
