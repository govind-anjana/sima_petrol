import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import our1 from '../../../assets/images/our1.png';
import our2 from '../../../assets/images/our2.png';
import our3 from '../../../assets/images/our3.png';
import our4 from '../../../assets/images/our4.png';
import our5 from '../../../assets/images/our5.png';
import our6 from '../../../assets/images/our6.png';

const Services = () => {
  const servicesList = [
    {
      image: our1,
      category: 'MARINE FUEL SUPPLY',
      title: 'Reliable Bunker Supply',
      description:
        'We provide dependable back-to-back bunker supply worldwide, delivering VLSFO, ULSFO, HSFO, LSMGO and MGO.',
    },
    {
      image: our2,
      category: 'MARINE LUBRICANTS',
      title: 'Premium Marine Lubricants',
      description:
        "We supply high-quality marine lubricants from leading manufacturers to support the performance and longevity of your vessel's.",
    },
    {
      image: our3,
      category: 'GLOBAL BUNKER TRADING',
      title: 'Worldwide Trading Solutions',
      description:
        'Our global trading network enables us to source and deliver marine fuels efficiently across key international ports.',
    },
    {
      image: our4,
      category: 'MARKET INTELLIGENCE',
      title: 'Bunker Market Advisory',
      description:
        'Make informed procurement decisions with timely market insights and expert guidance. Our team monitors global',
    },
    {
      image: our5,
      category: 'CREDIT FACILITIES',
      title: 'Flexible Financial Solutions',
      description:
        "We understand the importance of liquidity in today's shipping industry. Our tailored credit solutions provide greater",
    },
    {
      image: our6,
      category: 'TECHNICAL SUPPORT',
      title: 'Engineered Operational Support',
      description:
        'Our experienced team offers technical assistance on fuel specifications, compatibility, compliance, and operational best practices.',
    },
  ];

  return (
    <section id="products" className="bg-[#F8FAFC] text-gray-900 py-20 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold tracking-wider text-[#C2903A]  ">
            <span>-Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Services Built Around Your Voyage
          </h2>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/80 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Card Content */}
              <div>
                {/* Service Image */}
                <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  {/* Category */}
                  <span className="text-[11px] font-bold tracking-wider text-[#C69A42] uppercase block">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C69A42] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {service.description}{' '}
                    <a href="#" className="font-medium text-gray-900 hover:text-[#C69A42] underline">
                      Read more
                    </a>
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-8 h-8 rounded-full border border-gray-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center text-gray-700 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
