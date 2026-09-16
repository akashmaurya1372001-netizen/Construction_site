import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../data/constructionData.js';

export const ContactQuote = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: preselectedService || 'Commercial Construction',
    projectScope: 'new-build', // new-build, renovation, addition
    approxSquareFootage: 2500,
    estimatedTimeline: '6-12-months',
    location: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  // Rough estimation logic based on project types & square footage
  const calculateEstimatedBudget = () => {
    let ratePerSqFt = 240; // baseline
    if (formData.serviceType.toLowerCase().includes('residential')) ratePerSqFt = 280;
    if (formData.serviceType.toLowerCase().includes('commercial')) ratePerSqFt = 260;
    if (formData.serviceType.toLowerCase().includes('industrial')) ratePerSqFt = 190;
    if (formData.serviceType.toLowerCase().includes('renovation')) ratePerSqFt = 160;
    if (formData.serviceType.toLowerCase().includes('architecture')) ratePerSqFt = 45;

    const sqft = Number(formData.approxSquareFootage) || 1000;
    const base = sqft * ratePerSqFt;
    const low = Math.round(base * 0.9);
    const high = Math.round(base * 1.2);

    return {
      low: low.toLocaleString('en-US'),
      high: high.toLocaleString('en-US'),
      rate: ratePerSqFt
    };
  };

  const budgetRange = calculateEstimatedBudget();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous local processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>Project Estimation & Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Request an Estimate or Consult an Engineer
          </h2>
          <p className="mt-3 text-stone-300 text-base sm:text-lg">
            Receive a transparent budget bracket and preliminary feasibility review within 24 business hours from our certified estimating team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Estimation Calculator + Form */}
          <div className="lg:col-span-8 bg-stone-950 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl">
            {submitted ? (
              <div id="quote-submission-success" className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Proposal Request Received</h3>
                <p className="text-stone-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <span className="text-amber-400 font-bold">{formData.name || 'Client'}</span>. Your preliminary specs for <span className="text-stone-100 font-semibold">{formData.serviceType}</span> have been routed to our Lead Estimator.
                </p>
                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 max-w-sm mx-auto font-mono text-xs text-stone-400">
                  <div>TICKET ID: #BC-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div className="text-emerald-400 mt-1">EXPECTED RESPONSE: WITHIN 24 HOURS</div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-mono font-bold uppercase text-stone-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form id="quote-calculator-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Real-time Budget Estimation Banner */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                        Preliminary Feasibility Estimate
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white font-mono">
                        ${budgetRange.low} – ${budgetRange.high}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs text-stone-400">
                    <div>Based on {formData.approxSquareFootage.toLocaleString()} sq ft</div>
                    <div className="text-stone-500 text-[11px]">Avg. ${budgetRange.rate}/sq ft turnkey benchmark</div>
                  </div>
                </div>

                {/* Scope Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2 font-bold">
                      Construction Service
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectScope" className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2 font-bold">
                      Scope Type
                    </label>
                    <select
                      id="projectScope"
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="new-build">New Construction (Ground-Up)</option>
                      <option value="renovation">Comprehensive Renovation</option>
                      <option value="addition">Structural Expansion / Addition</option>
                      <option value="tenant-fitout">Tenant Improvement / Fitout</option>
                    </select>
                  </div>
                </div>

                {/* Square Footage Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="approxSquareFootage" className="text-xs font-mono uppercase tracking-wider text-stone-300 font-bold">
                      Approximate Area (Sq Ft)
                    </label>
                    <span className="font-mono text-amber-400 font-bold text-sm bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                      {Number(formData.approxSquareFootage).toLocaleString()} sq ft
                    </span>
                  </div>
                  <input
                    type="range"
                    id="approxSquareFootage"
                    name="approxSquareFootage"
                    min="500"
                    max="100000"
                    step="500"
                    value={formData.approxSquareFootage}
                    onChange={handleChange}
                    className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-stone-500 mt-1">
                    <span>500 sq ft</span>
                    <span>25,000 sq ft</span>
                    <span>100,000+ sq ft</span>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                      Your Name / Org *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Sterling"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 019-2831"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Project Location & Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                      Project Location (City / State)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g. Austin, TX or Los Angeles, CA"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="estimatedTimeline" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                      Target Start Timeline
                    </label>
                    <select
                      id="estimatedTimeline"
                      name="estimatedTimeline"
                      value={formData.estimatedTimeline}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="immediate">Immediate (&lt; 30 days)</option>
                      <option value="1-3-months">1 – 3 Months</option>
                      <option value="6-12-months">6 – 12 Months</option>
                      <option value="planning">Preliminary Feasibility Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-1.5">
                    Architectural Notes or Structural Specifications
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    placeholder="Briefly describe architectural drawings ready, zoning permits, or specific requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-400 font-mono flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>NDAs signed on request. All proprietary blueprints protected.</span>
                  </div>

                  <button
                    type="submit"
                    id="submit-quote-request-btn"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-black px-8 py-3.5 rounded-xl uppercase tracking-wider text-sm transition-all shadow-lg"
                  >
                    <span>{submitting ? 'Calculating...' : 'Request Formal Estimate'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Contacts & Jobsite Office */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-wider font-mono">
                Direct Headquarters
              </h3>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Main Engineering HQ</div>
                    <div className="text-xs text-stone-400 mt-0.5">
                      450 Builders Parkway, Suite 800<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Direct Dispatch & Estimating</div>
                    <div className="text-xs text-stone-400 mt-0.5">
                      +1 (800) 555-BUILD (2845)<br />
                      +1 (415) 555-0182 (Direct Line)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Bid Documents & Plans</div>
                    <div className="text-xs text-stone-400 mt-0.5 font-mono">
                      estimating@buildcraft-hq.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Jobsite Supervision Hours</div>
                    <div className="text-xs text-stone-400 mt-0.5">
                      Mon – Fri: 06:30 – 17:30 PST<br />
                      Sat: 07:00 – 14:00 (On Active Pours)
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 text-xs text-stone-400 font-mono space-y-1">
                <div className="font-bold text-amber-400">EMERGENCY ON-CALL:</div>
                <div>24/7 Structural Response Team for active commercial projects.</div>
              </div>
            </div>

            {/* Licensing & Registration Card */}
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 text-xs font-mono text-stone-400 space-y-2">
              <div className="font-bold text-stone-200 uppercase tracking-wider">Credentials</div>
              <div>• CA CSLB Contractor License #948210</div>
              <div>• TX General Contractor #TX-88219</div>
              <div>• OSHA 30 Certified Supervisors</div>
              <div>• EPA Lead-Safe & Asbestos Certified</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactQuote;
