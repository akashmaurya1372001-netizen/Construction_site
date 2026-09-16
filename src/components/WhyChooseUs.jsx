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
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Why Top Developers Choose BuildCraft
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

                  <p className="text-stone-400 text-xs leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-amber-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Metric
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout */}
        <div className="mt-12 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-white">Need custom architectural engineering or specialized heavy foundation?</div>
            <div className="text-xs text-stone-400">Our structural engineering team is available for preliminary site evaluations and feasibility audits.</div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold font-mono uppercase tracking-wider transition-colors shadow-md"
          >
            Consult Our Chief Engineer
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
