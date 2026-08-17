import React from 'react';
import { Zap, FileText, Globe } from 'lucide-react';

const SupplySolutions = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#C2903A] text-sm md:text-lg font-bold tracking-widest uppercase">
            SUPPLY SOLUTIONS
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ">
            Flexible Procurement Options Worldwide
          </h2>

          <p className="text-[#64748B] font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Ensuring seamless fuel procurement and delivery across major maritime hubs and global trade routes.
          </p>
        </div>

        {/* 3 Cards Grid matching Figma exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
          {/* Card 1: Spot Supply (White Card) */}
          <div className="bg-white rounded-sm p-6 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FDF8EE] flex items-center justify-center text-[#C2903A] mb-6">
                <Zap className="w-6 h-6 stroke-[1.75]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Spot Supply
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed">
                Providing fast and flexible fuel procurement solutions for urgent vessel requirements. Ensuring timely delivery and dependable service across key maritime locations.
              </p>
            </div>

            <div className="pt-8 flex justify-end">
              <button className="py-2.5 px-6 text-xs font-medium text-white bg-[#060D1A] hover:bg-[#0F172A] rounded transition-all duration-200 cursor-pointer shadow-sm">
                Get a quote
              </button>
            </div>
          </div>

          {/* Card 2: Contract Supply (Featured Dark Navy Card) */}
          <div className="bg-[#060D1A] text-white rounded-sm p-6 border border-[#060D1A] shadow-xl flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#132238] flex items-center justify-center text-[#38BDF8] mb-6">
                <FileText className="w-6 h-6 stroke-[1.75]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Contract Supply
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Secure long-term fuel supply agreements tailored to your operational needs. Ensuring consistent availability, competitive pricing, and dependable support. Helping vessels operate with confidence through reliable fuel supply.
              </p>
            </div>

            <div className="pt-8 flex justify-end">
              <button className="py-2.5 px-6 text-xs font-semibold text-[#060D1A] bg-[#C2903A] hover:bg-[#d8a346] rounded transition-all duration-200 cursor-pointer shadow-md">
                Get a quote
              </button>
            </div>
          </div>

          {/* Card 3: Worldwide Coverage (White Card) */}
          <div className="bg-white rounded-sm p-6 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FDF8EE] flex items-center justify-center text-[#C2903A] mb-6">
                <Globe className="w-6 h-6 stroke-[1.75]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Worldwide Coverage
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed">
                With a strong global network and presence across major maritime hubs, we ensure reliable fuel supply and seamless support wherever your vessels operate, we deliver uninterrupted supply solutions backed by trusted partnerships and operational excellence.
              </p>
            </div>

            <div className="pt-8 flex justify-end">
              <button className="py-2.5 px-6 text-xs font-medium text-white bg-[#060D1A] hover:bg-[#0F172A] rounded transition-all duration-200 cursor-pointer shadow-sm">
                Get a quote
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SupplySolutions;
