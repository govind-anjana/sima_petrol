import React from 'react';
import our1 from '../../../assets/images/our1.png';
import our2 from '../../../assets/images/our2.png';
import our3 from '../../../assets/images/our3.png';
import our4 from '../../../assets/images/our4.png';
import our5 from '../../../assets/images/our5.png';
import our6 from '../../../assets/images/our6.png';

const ServicesSection = () => {
  const services = [
    {
      category: 'MARINE FUEL SUPPLY',
      title: 'Reliable Bunker Supply',
      description: 'We provide dependable back-to-back bunker supply worldwide, delivering ULSFO, VLSFO, HSFO, LSMGO and MGO through our trusted network of suppliers. Our team ensures timely deliveries, competitive pricing, and seamless coordination at major ports across the globe.',
      image: our1,
      imagePosition: 'left',
    },
    {
      category: 'MARINE LUBRICANTS',
      title: 'Premium Marine Lubricants',
      description: "We supply high-quality marine lubricants from leading manufacturers to support the performance and longevity of your vessel's machinery. With flexible sourcing and reliable logistics, we help keep your operations running efficiently.",
      image: our2,
      imagePosition: 'right',
    },
    {
      category: 'GLOBAL BUNKER TRADING',
      title: 'Worldwide Trading Solutions',
      description: 'Our global trading network enables us to source and deliver marine fuels efficiently across key international ports. By working with trusted suppliers, we offer competitive pricing, dependable service, and flexible solutions wherever your vessels operate.',
      image: our3,
      imagePosition: 'left',
    },
    {
      category: 'MARKET INTELLIGENCE',
      title: 'Bunker Market Advisory',
      description: 'Make informed procurement decisions with timely market insights and expert guidance. Our team monitors global fuel markets, pricing trends, and regulatory developments to help you optimize bunker purchasing strategies and manage market volatility.',
      image: our4,
      imagePosition: 'right',
    },
    {
      category: 'CREDIT FACILITIES',
      title: 'Flexible Financial Solutions',
      description: "We understand the importance of liquidity in today's shipping industry. Our tailored credit solutions provide greater financial flexibility, allowing clients to manage cash flow while ensuring uninterrupted fuel procurement.",
      image: our5,
      imagePosition: 'left',
    },
    {
      category: 'TECHNICAL SUPPORT',
      title: 'Engineered Operational Support',
      description: 'Our experienced team offers technical guidance on fuel specs, engine compatibility, compliance, and operational best practices. We work closely with our clients to ensure safe, efficient, and trouble-free operations from inquiry to delivery.',
      image: our6,
      imagePosition: 'right',
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 text-gray-900 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#020617] leading-tight tracking-tight">
            Services Built Around Your Voyage
          </h2>
        </div>

        {/* Alternating Service Cards List matching Figma layout */}
        <div className="space-y-8 md:space-y-10">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-gray-200/70 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch hover:shadow-md transition-all duration-300"
            >
              {/* Image Column */}
              <div 
                className={`lg:col-span-6 h-52 sm:h-60 lg:h-auto self-stretch min-h-[220px] relative overflow-hidden ${
                  item.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content Column */}
              <div 
                className={`lg:col-span-6 p-6 sm:p-8 lg:p-8 flex flex-col justify-center ${
                  item.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[#C2903A] text-sm md:text-lg font-semibold tracking-widest uppercase">
                    {item.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed pt-1 max-w-xl">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8">
                  <button className="px-5 py-2.5 text-xs font-semibold text-[#0F172A] bg-white hover:bg-gray-50 border border-[#0F172A] hover:border-gray-400 rounded-sm transition-all duration-200 cursor-pointer shadow-sm">
                    Get a quote
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
