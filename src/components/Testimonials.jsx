/*import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/constructionData.js';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === TESTIMONIALS_DATA.length - 1 ? 0 : curr + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header *}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-amber-400" />
              <span>Reputation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Client & Architect Endorsements
            </h2>
            <p className="mt-3 text-stone-300 text-base sm:text-lg">
              Hear directly from real estate developers, managing partners, and renowned architects who trust us with their high-stakes builds.
            </p>
          </div>

          {/* Carousel Controls *}
          <div className="flex items-center space-x-3">
            <button
              id="testimonial-prev-btn"
              onClick={prev}
              className="p-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors"
              aria-label="Previous endorsement"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-stone-400 px-2">
              {currentIndex + 1} / {TESTIMONIALS_DATA.length}
            </div>
            <button
              id="testimonial-next-btn"
              onClick={next}
              className="p-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white transition-colors"
              aria-label="Next endorsement"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card *}
        <div className="relative bg-stone-900 rounded-3xl border border-stone-800 p-8 sm:p-12 overflow-hidden">
          <Quote className="absolute -top-4 -right-4 w-40 h-40 text-stone-800/40 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* 5 Stars /}
            <div className="flex items-center space-x-1 text-amber-400">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="text-xl sm:text-2xl text-stone-100 font-normal leading-relaxed italic">
              "{current.content}"
            </p>

            <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-amber-400 font-mono">
                    {current.role} • {current.company}
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-stone-950 border border-stone-800 text-xs font-mono text-stone-400 self-start sm:self-auto">
                Delivered: <span className="text-stone-200 font-semibold">{current.projectType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Preview of all 3 /}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer p-5 rounded-xl border transition-all ${
                currentIndex === idx
                  ? 'bg-stone-900 border-amber-500/80 shadow-md'
                  : 'bg-stone-900/40 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div className="text-xs font-bold text-white truncate">{t.company}</div>
              <div className="text-[11px] text-amber-400 font-mono mt-0.5">{t.projectType}</div>
              <p className="text-xs text-stone-400 mt-2 line-clamp-2">"{t.content}"</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;*/
