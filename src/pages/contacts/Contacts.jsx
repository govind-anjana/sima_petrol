import React from 'react';
import Navbar from '../../components/common/Navbar';
import ContactUs from '../home/components/ContactUs';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-[#070D1B] text-white selection:bg-amber-500 selection:text-black">
      <Navbar />
      
      {/* Contact Hero Header matching Figma */}
      <section className="relative pt-16 pb-8 md:pt-24 md:pb-12 text-center bg-[#070D1B] font-sans overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-3">
          <span className="text-[#C2903A] text-sm md:text-lg font-bold tracking-[0.25em] uppercase block">
            Contact us
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            We'd love to hear from you
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We have offices and teams all around the world.
          </p>
        </div>
      </section>

      {/* Contact Card & Form Section */}
      <main className="pb-16 md:pb-24">
        <ContactUs />
      </main>
    </div>
  );
};

export default Contacts;
