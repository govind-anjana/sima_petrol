import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      category: 'MARINE FUEL SUPPLY',
      title: 'Reliable Bunker Supply',
      description: 'We provide dependable back-to-back bunker supply worldwide, delivering VLSFO, ULSFO, HSFO, LSMGO and MGO through our trusted network of suppliers. Our team ensures timely deliveries, competitive pricing, and seamless coordination at major ports across the globe.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'left',
    },
    {
      category: 'MARINE LUBRICANTS',
      title: 'Premium Marine Lubricants',
      description: "We supply high-quality marine lubricants from leading manufacturers to support the performance and longevity of your vessel's machinery. With flexible sourcing and reliable logistics, we help keep your operations running efficiently.",
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'right',
    },
    {
      category: 'GLOBAL BUNKER TRADING',
      title: 'Worldwide Trading Solutions',
      description: 'Our global trading network enables us to source and deliver marine fuels efficiently across key international ports. By working with trusted suppliers and strategic partners, we provide competitive pricing, dependable service, and consistent supply wherever your vessels operate.',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'left',
    },
    {
      category: 'MARKET INTELLIGENCE',
      title: 'Bunker Market Advisory',
      description: 'Make informed procurement decisions with timely market insights and expert guidance. Our team monitors global fuel markets, pricing trends, and regulatory developments to help you optimize bunker purchasing strategies and manage market volatility.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'right',
    },
    {
      category: 'CREDIT FACILITIES',
      title: 'Flexible Financial Solutions',
      description: "We understand the importance of liquidity in today's shipping industry. Our tailored credit solutions provide greater financial flexibility, allowing clients to manage cash flow while ensuring uninterrupted fuel procurement.",
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'left',
    },
    {
      category: 'TECHNICAL SUPPORT',
      title: 'Engineered Operational Support',
      description: 'Our experienced team offers technical guidance on fuel specs, engine compatibility, compliance, and operational best practices. We work closely with our clients to ensure safe, efficient, and trouble-free operations from inquiry to delivery.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
      imagePosition: 'right',
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24 text-gray-900 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">
            -Our Services-
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Services Built Around Your Voyage
          </h2>
        </div>

        {/* 6 Alternating Service Cards List */}
        <div className="space-y-10 md:space-y-12">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Column */}
              <div 
                className={`lg:col-span-6 h-64 sm:h-80 lg:h-full min-h-[280px] relative overflow-hidden ${
                  item.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content Column */}
              <div 
                className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${
                  item.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                    {item.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8">
                  <button className="px-6 py-2.5 text-xs font-semibold text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white border border-gray-300 hover:border-gray-900 rounded-md transition-all cursor-pointer shadow-sm">
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
