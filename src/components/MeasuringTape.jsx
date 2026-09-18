
import React from 'react';


export const MeasuringTape = ({
  label = 'ENGINEERING GRADE ACCURACY',
  className = '',
}) => {
  // Generate enough ticks for the tape
  const ticks = Array.from({ length: 32 }, (_, i) => i);

  const renderTicks = (start, end, side) => (
    <div
      className="
        flex items-end h-full
        gap-4px
        sm:gap-6px
        md:gap-8px
        lg:gap-10px
        flex-1
      "
    >
      {ticks.slice(start, end).map((tick) => {
        const isMajor = tick % 4 === 0;
        const isHalf = tick % 2 === 0;

        const heightClass = isMajor
          ? 'h-4 sm:h-5 md:h-6 w-[2px] bg-stone-900'
          : isHalf
            ? 'h-3 sm:h-4 w-px bg-stone-800'
            : 'h-2 sm:h-3 w-px bg-stone-700/60';

        return (
          <div
            key={`${side}-${tick}`}
            className="flex flex-col items-center justify-end h-full flex-1 min-w-0"
          >
            {isMajor && (
              <span
                className="
                  text-[7px]
                  sm:text-[8px]
                  md:text-[9px]
                  font-bold
                  leading-none
                  mb-0.5
                "
              >
                {side === 'left' ? `${tick / 4}"` : `${(tick / 4) + 4}"`}
              </span>
            )}

            <div className={heightClass} />
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      id="measuring-tape-divider"
      className={`
        w-full
        overflow-hidden
        bg-amber-400
        select-none
        border-y
        border-amber-500
        shadow-inner
        ${className}
      `}
      aria-hidden="true"
    >
      <div
        className="
          flex
          items-center
          w-full
          min-h-8
          h-8
          sm:h-9
          md:h-10
          px-2
          sm:px-3
          font-mono
          text-stone-900
        "
      >
        {/* Left ticks */}
        {renderTicks(0, 16, 'left')}

        {/* Center Label */}
        <div
          className="
            flex
            items-center
            justify-center
            shrink-0
            mx-1
            sm:mx-2
            md:mx-3
            px-1.5
            sm:px-2
            md:px-3
            py-0.5
            bg-stone-900/10
            rounded
            max-w-[45%]
          "
        >
          <span
            className="
              w-1
              h-1
              sm:w-1.5
              sm:h-1.5
              rounded-full
              bg-stone-950
              shrink-0
            "
          />

          <span
            className="
              mx-1
              sm:mx-1.5
              md:mx-2
              text-[7px]
              sm:text-[9px]
              md:text-xs
              font-black
              uppercase
              tracking-[0.08em]
              sm:tracking-[0.12em]
              md:tracking-widest
              text-stone-950
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
            "
          >
            {label}
          </span>

          <span
            className="
              w-1
              h-1
              sm:w-1.5
              sm:h-1.5
              rounded-full
              bg-stone-950
              shrink-0
            "
          />
        </div>

        {/* Right ticks */}
        {renderTicks(16, 32, 'right')}
      </div>
    </div>
  );
};

export default MeasuringTape;

