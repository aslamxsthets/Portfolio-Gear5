import React, { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { PROFILE_IMAGE_SOURCES, handleImageFallback } from '../../utils/profileImage';

interface Gear5PortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  showUploadButton?: boolean;
  interactive?: boolean;
}

export const Gear5Portrait: React.FC<Gear5PortraitProps> = ({
  className = '',
  size = 'lg',
  interactive = true
}) => {
  const [filterMode, setFilterMode] = useState<'manga' | 'vibrant'>('manga');

  const sizeClasses = {
    sm: 'w-24 h-32',
    md: 'w-44 h-56 sm:w-52 sm:h-64',
    lg: 'w-64 h-84 sm:w-72 sm:h-96 md:w-80 md:h-[420px]',
    full: 'w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[480px]'
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Outer Ethereal Gear 5 Aura Container */}
      <div className={`relative ${sizeClasses[size]} rounded-3xl p-1 flex items-center justify-center`}>
        {/* Swirling White Cloud Aura Behind Portrait */}
        <div className="absolute -inset-4 sm:-inset-6 rounded-[36px] bg-gradient-to-t from-red-600/30 via-white/40 to-white/60 blur-xl opacity-90 animate-gear5-hair pointer-events-none" />
        <div className="absolute -inset-2 rounded-3xl border-2 border-white/80 dark:border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.8)] pointer-events-none" />

        {/* Orbiting Celestial Hagoromo Smoke Ribbons */}
        <div className="absolute -inset-6 pointer-events-none overflow-visible">
          <svg className="w-full h-full animate-gear5-orbit opacity-90" viewBox="0 0 400 500" fill="none">
            <path
              d="M 50 150 C 20 220, 40 340, 100 400 C 180 480, 280 460, 340 380 C 390 310, 380 200, 320 120 C 260 40, 140 50, 80 120 Z"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="30 20"
              filter="drop-shadow(0 0 10px rgba(255,255,255,0.9))"
            />
          </svg>
        </div>

        {/* Crackling Red Conqueror's Lightning */}
        <div className="absolute -inset-4 pointer-events-none animate-gear5-lightning">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <path d="M 10 20 L 25 35 L 20 45 L 35 60" stroke="#dc2626" strokeWidth="2" filter="drop-shadow(0 0 6px #dc2626)" />
            <path d="M 90 25 L 75 40 L 82 50 L 70 70" stroke="#dc2626" strokeWidth="2.5" filter="drop-shadow(0 0 6px #dc2626)" />
            <path d="M 40 5 L 45 18 L 38 25 L 50 35" stroke="#ef4444" strokeWidth="1.5" filter="drop-shadow(0 0 4px #ef4444)" />
          </svg>
        </div>

        {/* The Portrait Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-950 border-4 border-neutral-900 dark:border-white shadow-2xl animate-drums-beat">
          {/* Flame Hair Crown at top of photo */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/90 via-white/40 to-transparent z-20 pointer-events-none mix-blend-screen flex justify-center">
            <div className="w-48 h-16 rounded-full bg-white blur-md animate-pulse" />
          </div>

          <img
            src={PROFILE_IMAGE_SOURCES[0]}
            alt="Aslam Javeed M - Suit Portrait"
            referrerPolicy="no-referrer"
            onError={handleImageFallback}
            className={`w-full h-full object-cover object-top transition-all duration-300 ${
              filterMode === 'manga'
                ? 'contrast-125 brightness-105 saturate-95 dark:contrast-135'
                : 'contrast-110 saturate-110'
            }`}
          />

          {/* Manga Halftone Overlay Grid */}
          <div className="absolute inset-0 bg-manga-halftone opacity-15 pointer-events-none" />

          {/* Bottom Title Plaque on the Photo */}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider block">
                WARRIOR OF LIBERATION
              </span>
              <h3 className="text-sm font-heading font-black text-white tracking-wide uppercase">
                ASLAM JAVEED M
              </h3>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/90 text-white text-[10px] font-mono font-bold">
              <Zap className="w-3 h-3 animate-pulse" />
              <span>GEAR 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Style Toggle (without any upload prompts) */}
      {interactive && (
        <div className="flex items-center gap-2 mt-3 z-30">
          <button
            onClick={() => setFilterMode(m => (m === 'manga' ? 'vibrant' : 'manga'))}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-mono text-xs shadow-xs transition-all cursor-pointer"
            title="Toggle Manga filter style"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="capitalize">{filterMode} Style</span>
          </button>
        </div>
      )}
    </div>
  );
};
