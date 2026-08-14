import React from 'react';
import Navbar from '../../components/common/Navbar';
import MarketHero from './components/MarketHero';
import TickerTape from './components/TickerTape';
import MarketCards from './components/MarketCards';
import MarketTrends from './components/MarketTrends';
import BunkerPricesFX from './components/BunkerPricesFX';
import LatestUpdates from './components/LatestUpdates';
import TrustedPartnerCTA from '../productAndServices/components/TrustedPartnerCTA';
import ContactUs from '../home/components/ContactUs';

const Market = () => {
  return (
    <div className="min-h-screen bg-[#070D1B] text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <MarketHero />
        <TickerTape />
        <MarketCards />
        <MarketTrends />
        <BunkerPricesFX />
        <LatestUpdates />
        <TrustedPartnerCTA />
        <ContactUs />
      </main>
    </div>
  );
};

export default Market;
