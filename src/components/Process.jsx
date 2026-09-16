import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/constructionData.js';
import { CheckCircle2, ChevronRight, Ruler } from 'lucide-react';

export const Process = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-px bg-amber-400" />
            <span>Workflow Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our 5-Stage Construction Process
          </h2>
          <p className="mt-3 text-stone-300 text-base sm:text-lg">
            A linear, milestone-driven protocol designed to eliminate schedule drift, structural clashes, and unexpected expenditure.
          </p>
        </div>

        {/* Linear Stepper Bar */}
        <div className="relative mb-12">
          {/* Progress track line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-stone-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.number}
                  id={`process-step-btn-${step.number}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-lg scale-105'
                      : isPast
                      ? 'bg-stone-900 border-stone-700 text-stone-300 hover:border-stone-600'
                      : 'bg-stone-900/40 border-stone-800 text-stone-500 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                    <span>{step.number}</span>
                    <span className="text-[10px] opacity-75">{step.tapeMeasurement}</span>
                  </div>
                  <div className="font-bold text-base">{step.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Deep-Dive Card */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-stone-800 border border-stone-700 text-amber-400 text-xs font-mono">
                <Ruler className="w-3.5 h-3.5" />
                <span>BENCHMARK MEASUREMENT: {activeStep.tapeMeasurement}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Stage {activeStep.number}: {activeStep.title} Phase
              </h3>

              <p className="text-stone-300 text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Required Milestone Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                {activeStepIndex > 0 && (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev - 1)}
                    className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono font-bold uppercase"
                  >
                    Previous Step
                  </button>
                )}
                {activeStepIndex < PROCESS_STEPS.length - 1 && (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="inline-flex items-center space-x-2 px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    <span>Next: {PROCESS_STEPS[activeStepIndex + 1].title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Visual Blueprint / Site Diagram Representation */}
            <div className="lg:col-span-5 bg-stone-950 p-6 rounded-xl border border-stone-800 text-stone-400 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-stone-300 font-bold">
                <span>SITE LOGBOOK: {activeStep.title.toUpperCase()}</span>
                <span className="text-amber-400">STAGE {activeStep.number}/05</span>
              </div>
              <div className="space-y-2 text-[11px] leading-relaxed">
                <div className="text-stone-300">
                  &gt; Critical Path Milestone: <span className="text-emerald-400">Active Verification</span>
                </div>
                <div>&gt; Tolerance Threshold: ± 1.5mm Laser Checked</div>
                <div>&gt; Site Safety Officer: Sign-off Mandatory</div>
                <div>&gt; Client Dashboard: Live camera & daily report feed synced</div>
              </div>
              <div className="p-3 bg-stone-900 rounded border border-stone-800 text-stone-300 text-[11px]">
                "Every phase concludes with physical signatures from the lead structural engineer, site superintendent, and client representative before moving forward."
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
