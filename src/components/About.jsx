import React from 'react';
import { Target, Users, HardHat, Compass, FileCheck, Building } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-5xl mx-auto font-black sm:text-5xl  tracking-tight m-auto mb-9'>Construction contractor varanasi </div>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>Company Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Pioneering Precision & Structural Integrity Since 2011
          </h2>
          <p className="mt-4 text-stone-300 text-lg leading-relaxed">
            Founded by veteran structural engineers and master builders, BuildCraft has transformed urban skylines and crafted custom architectural estates with uncompromising quality standards and full digital transparency.
          </p>
        </div>

        {/* Story & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-4">
              <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Our Core Philosophy
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                Construction is not merely assembling concrete and steel; it is the discipline of coordinating hundreds of skilled trades, adhering to mathematical tolerances, and respecting client capital with absolute fiduciary transparency.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800/80 text-xs font-mono">
                <div>
                  <div className="text-stone-400">FOUNDED</div>
                  <div className="text-base font-bold text-white">2011 (California)</div>
                </div>
                <div>
                  <div className="text-stone-400">SAFETY RECORD</div>
                  <div className="text-base font-bold text-emerald-400">0.72 EMR Index</div>
                </div>
                <div>
                  <div className="text-stone-400">LICENSES HELD</div>
                  <div className="text-base font-bold text-white">Class A & Class B</div>
                </div>
                <div>
                  <div className="text-stone-400">TOTAL SQ FT BUILT</div>
                  <div className="text-base font-bold text-amber-400">2.4M+ Sq Ft</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-stone-800/40 border border-stone-700/60">
                <Users className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-base">In-House Engineering</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Structural engineers, MEP designers, and project supervisors coordinate directly without costly outsourcing delay.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-stone-800/40 border border-stone-700/60">
                <FileCheck className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-base">Transparent Budgeting</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Guaranteed Maximum Price (GMP) contracts with open-book itemization. No hidden fees or surprise change orders.
                </p>
              </div>
            </div>
          </div>

          {/* Right Imagery */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                alt="Engineers reviewing blueprints on jobsite"
                className="rounded-2xl border-2 border-stone-700 shadow-xl w-full h-440px object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-stone-950 p-5 rounded-xl shadow-xl font-mono hidden sm:block border-2 border-amber-400">
                <div className="text-2xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider">Certified Code Compliance</div>
                <div className="text-[11px] text-stone-900 mt-0.5">Across all 50 US States</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
