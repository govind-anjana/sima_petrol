import React from 'react';
import { ShieldCheck, Cog, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const LubricantSolutions = () => {
  const lubricants = [
    {
      title: 'Cylinder Oil',
      subtitle: 'BN 40 to BN 140 Formulations',
      description: 'High-performance lubricants engineered for modern 2-stroke crosshead engines, providing optimal neutralization against high-sulphur and low-sulphur fuel combustion residues.',
      features: ['IMO 2020 Compliant', 'Deposit Control', 'Cat Fines Protection'],
    },
    {
      title: 'System Oil',
      subtitle: 'Crankcase & Bearing Lubrication',
      description: 'Advanced anti-wear and thermal stability formulations to protect main engine crankcases, shaft bearings, and crosshead guides from moisture and oxidation.',
      features: ['Superior Water Separation', 'Corrosion Prevention', 'Extended Drain Intervals'],
    },
    {
      title: 'Trunk Piston Engine Oil (TPEO)',
      subtitle: 'Medium-Speed 4-Stroke Engines',
      description: 'Specifically engineered for auxiliary engines and medium-speed propulsion units operating on residual, distillate, or biofuel blends.',
      features: ['BN 12 - BN 55 Range', 'Thermal Oxidation Stability', 'Piston Cleanliness'],
    },
  ];

  return (
    <section className="relative bg-[#060B18] py-16 sm:py-20 text-white font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
              <span className="w-5 h-[2px] bg-amber-400" />
              <span>MARINE LUBRICANTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Premium Lubricant Solutions
            </h2>
          </div>
          <p className="text-gray-300 text-sm max-w-md">
            Partnered with global major oil brands (Shell, Mobil, Castrol, TotalEnergies) and approved independent blenders to ensure seamless supply at major ports.
          </p>
        </div>

        {/* Lubricant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lubricants.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0A1124] border border-white/10 hover:border-amber-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 text-amber-400">
                  <Cog className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className="text-xs font-medium text-amber-400 mb-3">{item.subtitle}</div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LubricantSolutions;
