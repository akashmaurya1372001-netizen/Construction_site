import React from 'react';
import { HardHat, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-black">
                <HardHat className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                BuildCraft <span className="text-amber-400 font-mono text-sm">HQ</span>
              </span>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed">
              Precision general contractors delivering premier commercial, residential, and industrial construction projects on time and on budget with certified engineering excellence.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed, Insured & Fully Bonded</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              {['About', 'Services', 'Projects', 'Process', 'Why Choose Us', 'Testimonials'].map((name) => {
                const idMap = {
                  'About': 'about',
                  'Services': 'services',
                  'Projects': 'projects',
                  'Process': 'process',
                  'Why Choose Us': 'why-us',
                  'Testimonials': 'testimonials'
                };
                return (
                  <li key={name}>
                    <button
                      onClick={() => onNavigate(idMap[name])}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Core Divisions
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Commercial High-Rise & Retail</li>
              <li>Custom Residential Estates</li>
              <li>Industrial Warehousing & Cold Storage</li>
              <li>BIM Architectural Drafting & Zoning</li>
              <li>Seismic & Structural Renovation</li>
              <li>Turnkey Interior Fit-Outs</li>
            </ul>
          </div>

          {/* Contact Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Estimating Office
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>450 Builders Pkwy, San Francisco CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (800) 555-BUILD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>bids@buildcraft-hq.com</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-3 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono transition-colors border border-stone-800"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} BuildCraft General Contractors Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-stone-400 cursor-pointer">Safety Protocols</span>
            <span className="hover:text-stone-400 cursor-pointer">Subcontractor Portal</span>
            <span className="hover:text-stone-400 cursor-pointer">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
