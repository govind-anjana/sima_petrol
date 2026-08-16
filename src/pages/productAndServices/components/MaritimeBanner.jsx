import React from 'react';
import maritimeBannerImg from '../../../assets/images/maritime-banner.jpg';

const MaritimeBanner = () => {
  return (
    <section className="relative w-full h-[380px] sm:h-[430px] md:h-[480px] flex items-center justify-start bg-slate-100 overflow-hidden font-sans">
      {/* Offshore Support Vessel Background Image matching Figma */}
      <div 
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${maritimeBannerImg})` 
        }}
      />

      {/* Overlaid Headline matching Figma */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full mt-10 md:-mt-60">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#020617] max-w-xl leading-[1.15] tracking-tight">
          Powering Maritime Operations Across the Globe
        </h2>
      </div>
    </section>
  );
};

export default MaritimeBanner;
