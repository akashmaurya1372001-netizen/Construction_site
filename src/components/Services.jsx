import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Factory, 
  Compass, 
  Hammer, 
  Wrench, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/constructionData.js';

const iconMap = {
  Home,
  Building2,
  Factory,
  Compass,
  Hammer,
  Wrench
};

export const Services = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);

  return (
    <section id="services" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-mono  uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-amber-400" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
               Varanasi Construction Services
            </h2>
            <p className="mt-4 text-stone-300 text-base sm:text-lg">
              Comprehensive general contracting capabilities
            </p>
          </div>

          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Building2;
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-amber-400 group-hover:bg-stone-700'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-stone-400 text-sm leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-stone-800/80 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-500">Key Deliverables</div>
                    <ul className="space-y-1.5 text-xs text-stone-300">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    id={`quote-service-btn-${service.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceForQuote(service.title);
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 text-xs font-bold font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire For This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
