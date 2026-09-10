import React, { useEffect, useState } from 'react';

interface AwakeningLoaderProps {
  onLoaded: () => void;
}

export const AwakeningLoader: React.FC<AwakeningLoaderProps> = ({ onLoaded }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // 0: Tiny cloud & initial ink (0 - 300ms)
    // 1: Ink stroke expands & particles appear (300ms - 700ms)
    // 2: "ASLAM JAVEED" text draws & clouds expand (700ms - 1100ms)
    // 3: Red energy ring & awakening flash (1100ms - 1500ms)
    // 4: Complete & fade out (1500ms - 1700ms)
    const t1 = setTimeout(() => setPhase(1), 250);
    const t2 = setTimeout(() => setPhase(2), 650);
    const t3 = setTimeout(() => setPhase(3), 1100);
    const t4 = setTimeout(() => {
      setPhase(4);
      setTimeout(onLoaded, 350);
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onLoaded]);

  return (
    <div
      onClick={onLoaded}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf9f6] dark:bg-[#121212] transition-opacity duration-350 select-none cursor-pointer ${
        phase === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-8">
        {/* Expanding Red Energy Ring (Phase 3) */}
        {phase >= 3 && (
          <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-red-600/60 animate-ping pointer-events-none" />
        )}

        {/* Central Cloud Silhouette with Ink outline */}
        <div
          className={`relative transition-all duration-500 ease-out flex items-center justify-center ${
            phase === 0 ? 'scale-75 opacity-70' : phase >= 2 ? 'scale-110 opacity-100' : 'scale-90 opacity-90'
          }`}
        >
          <svg
            className="w-24 h-24 md:w-32 md:h-32 text-neutral-900 dark:text-neutral-100 transition-transform duration-500"
            viewBox="0 0 100 100"
            fill="none"
          >
            {/* Cloud Puffs */}
            <path
              d="M25 65 A 18 18 0 0 1 35 32 A 22 22 0 0 1 70 34 A 18 18 0 0 1 82 65 Z"
              fill={phase >= 2 ? '#ffffff' : '#f5f5f5'}
              stroke="#dc2626"
              strokeWidth="2.5"
              strokeDasharray={phase === 0 ? '120' : 'none'}
              className="drop-shadow-md transition-all duration-300"
            />
            {/* Ink swirl core */}
            <circle cx="50" cy="50" r="10" fill="#dc2626" opacity={phase >= 1 ? 0.9 : 0.4} />
          </svg>
        </div>

        {/* Drawing Ink Stroke Line */}
        <div className="w-48 md:w-64 h-1 bg-neutral-200 dark:bg-neutral-800 my-4 overflow-hidden rounded-full">
          <div
            className="h-full bg-red-600 transition-all duration-500 ease-out rounded-full"
            style={{
              width: phase === 0 ? '20%' : phase === 1 ? '55%' : phase === 2 ? '85%' : '100%'
            }}
          />
        </div>

        {/* Title Appearing */}
        <div className="text-center overflow-hidden">
          <h1
            className={`font-heading font-black text-2xl md:text-4xl tracking-widest text-neutral-900 dark:text-white transition-all duration-500 ${
              phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            ASLAM JAVEED M
          </h1>
          <p
            className={`font-mono text-xs md:text-sm tracking-wider text-red-600 dark:text-red-400 mt-1 transition-all duration-500 delay-100 ${
              phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            DIGITAL FORENSICS & INCIDENT RESPONSE
          </p>
        </div>

        {/* Skip hint */}
        <span className="text-[10px] font-mono text-neutral-400 mt-8 opacity-60">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
};
