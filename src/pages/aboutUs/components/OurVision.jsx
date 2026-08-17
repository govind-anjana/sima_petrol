import React from 'react';
import useInView from '../../../hooks/useInView';
import maritimeBanner from '../../../assets/images/maritime-banner.jpg';

const OurVision = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [imageRef, imageInView] = useInView({ threshold: 0.1 });
  const [textRef, textInView] = useInView({ threshold: 0.1 });

  return (
    <section className="bg-white py-16 md:py-24 text-gray-900 font-sans border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 space-y-3 transition-all duration-700 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-[0.2em] uppercase block">
            Our Vision
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Shaping the Future of Global Maritime Services
          </h2>
        </div>

        {/* Vessel Deck Banner Image matching Figma */}
        <div
          ref={imageRef}
          className={`rounded-2xl overflow-hidden border border-gray-200 shadow-2xl h-72 sm:h-96 md:h-[450px] w-full mb-12 transition-all duration-700 ease-out delay-150 ${
            imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
          }`}
        >
          <img 
            src={maritimeBanner} 
            alt="SIMA PETROL Maritime Vision" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Two Paragraph Columns below image matching Figma */}
        <div
          ref={textRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-700 ease-out delay-200 ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
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
