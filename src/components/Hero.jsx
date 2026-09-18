import React from 'react';
import { ArrowRight, ShieldCheck, Award, Ruler, CheckCircle2,IndianRupee } from 'lucide-react';
import { COMPANY_STATS } from '../data/constructionData.js';

export const Hero = ({ onExploreServices, onRequestQuote }) => {
  return (
    <section id="hero" className="relative bg-stone-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-stone-800">
      {/* Blueprint Grid Background Effect */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
           
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-100 leading-[1.1]">
               Neev — Hamara <span className="text-amber-400 underline decoration-amber-500/40 decoration-wavy decoration-2"> Ghar Aapka</span>
            </h1>

           
            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero-tolerance safety compliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-time & fixed-budget guarantees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>LEED & Passive House certified experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10-year  Experiance</span>
              </div>
            </div>

            

            {/* Trust Badges */}
            <div className="pt-5 border-stone-800/80 flex flex-wrap items-center gap-16 text-stone-400  font-mono gap-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className=" text-emerald-400" />
                <span>Trusted </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Quality construction </span>
              </div>
              <div className="flex items-center space-x-2">
                <IndianRupee className="w-4 h-4 text-sky-400" />
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>
</div>

{/* CTAs */}
            <div className="pt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-request-quote-btn"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-black px-7 py-4 rounded-xl shadow-lg shadow-amber-500/20 text-base uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact us</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 px-6 py-4 rounded-xl font-semibold text-base transition-colors"
              >
                <span>Explore Services</span>
              </button>
            </div>


        {/* Highlight Stats Bar */}
        <div id="company-stats-strip" className="mt-16 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-stone-900/50 rounded-xl p-5 border border-stone-800/70 hover:border-amber-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-bold text-stone-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
