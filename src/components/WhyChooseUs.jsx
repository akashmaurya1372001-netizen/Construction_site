import React, { useState } from 'react';
import { WHY_CHOOSE_US } from '../data/constructionData.js';
import { Award, ShieldAlert, Clock, Briefcase, Check, ChevronDown } from 'lucide-react';

const iconMap = {
  quality: Award,
  safety: ShieldAlert,
  experience: Briefcase,
  'on-time': Clock
};

export const WhyChooseUs = () => {
  const [expandedId, setExpandedId] = useState('quality');

  return (
    <section id="why-us" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text- uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Choose BCC
          </h2>
          <p className="mt-3 text-stone-300 text-base sm:text-lg">
            Our construction standards exceed international building codes. Here are four foundational pillars that define every build.
          </p>
        </div>

        {/* 4 Pillars Grid / Interactive Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.id] || Award;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                id={`why-card-${item.id}`}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-stone-950 border-amber-500 shadow-xl'
                    : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-stone-500">
                      PILLAR
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-stone-300 text-sm font-medium mb-3">
                    {item.summary}
                  </p>

                </div>

                
              </div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
};

export default WhyChooseUs;
