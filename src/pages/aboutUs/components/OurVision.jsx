import React from 'react';

const OurVision = () => {
  return (
    <section className="bg-white py-16 md:py-24 text-gray-900 font-sans border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block">
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Shaping the Future of Global Maritime Services
          </h2>
        </div>

        {/* Vessel Deck Banner Image matching Figma */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl h-72 sm:h-96 md:h-[450px] w-full mb-12">
          <img 
            src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1600" 
            alt="SIMA PETROL Maritime Vision" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Two Paragraph Columns below image matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
          <p>
            Our vision is to become a globally recognized leader in marine fuel and lubricant solutions, known for excellence, innovation, and trusted partnerships. We aim to support the evolving needs of the maritime industry while maintaining the highest standards of service and operational performance.
          </p>
          <p>
            Looking ahead, we strive to expand our global footprint while embracing innovation and operational excellence. Through strong partnerships and a forward-thinking approach, we aim to shape a more connected, efficient, and sustainable future for the maritime industry.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurVision;
