import React from 'react';
import Navbar from '../../components/common/Navbar';
import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import OurMission from './components/OurMission';
import OurVision from './components/OurVision';
import OurJourney from './components/OurJourney';
import GlobalCoverageMap from './components/GlobalCoverageMap';
import WhyUsSection from '../productAndServices/components/WhyUsSection';
import TrustedPartnerCTA from '../productAndServices/components/TrustedPartnerCTA';
import ContactUs from '../home/components/ContactUs';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#070D1B] text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurVision />
        <OurJourney />
        <GlobalCoverageMap />
        {/* <WhyUsSection /> */}
        <TrustedPartnerCTA />
        <ContactUs />
      </main>
    </div>
  );
};

export default AboutUs;
