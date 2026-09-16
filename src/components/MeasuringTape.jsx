import React from 'react';

/**
 * MeasuringTape Component
 * Construction tape measure motif with millimeter tick lines and inch markers
 */
export const MeasuringTape = ({ label = 'ENGINEERING GRADE ACCURACY', className = '' }) => {
  const ticks = Array.from({ length: 48 }, (_, i) => i);

  return (
    <div
      id="measuring-tape-divider"
      className={`w-full overflow-hidden bg-amber-400 select-none border-y border-amber-500 shadow-inner ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between h-9 px-3 font-mono text-stone-900 tracking-wider">
        <div className="flex items-end h-full space-x-1 sm:space-x-2">
          {ticks.slice(0, 16).map((tick) => {
            const isMajor = tick % 4 === 0;
            const isHalf = tick % 2 === 0;
            const heightClass = isMajor ? 'h-5 w-0.5 bg-stone-900' : isHalf ? 'h-3 w-px bg-stone-800' : 'h-2 w-px bg-stone-700/60';
            return (
              <div key={`tick-left-${tick}`} className="flex flex-col items-center justify-end h-full">
                {isMajor && <span className="text-[9px] font-bold leading-none mb-0.5">{tick / 4}"</span>}
                <div className={heightClass} />
              </div>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 px-3 py-0.5 bg-stone-900/10 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
          <span className="text-xs font-black uppercase tracking-widest text-stone-950 whitespace-nowrap">
            {label}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />
        </div>

        <div className="flex items-end h-full space-x-1 sm:space-x-2">
          {ticks.slice(16, 32).map((tick) => {
            const isMajor = tick % 4 === 0;
            const isHalf = tick % 2 === 0;
            const heightClass = isMajor ? 'h-5 w-0.5 bg-stone-900' : isHalf ? 'h-3 w-px bg-stone-800' : 'h-2 w-px bg-stone-700/60';
            return (
              <div key={`tick-right-${tick}`} className="flex flex-col items-center justify-end h-full">
                {isMajor && <span className="text-[9px] font-bold leading-none mb-0.5">{(tick / 4) + 4}"</span>}
                <div className={heightClass} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeasuringTape;
