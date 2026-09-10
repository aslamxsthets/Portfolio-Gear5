import React from 'react';

interface SecretCloudProps {
  isVisible: boolean;
  onCatch?: () => void;
}

export const SecretCloud: React.FC<SecretCloudProps> = ({ isVisible, onCatch }) => {
  if (!isVisible) return null;

  return (
    <div
      onClick={onCatch}
      className="fixed top-24 left-0 z-40 cursor-pointer pointer-events-auto transition-transform hover:scale-110"
      style={{
        animation: 'cloud-drift 10s linear forwards'
      }}
      title="A wandering Gear 5 cloud! Click to awaken!"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onCatch?.();
        }
      }}
    >
      <div className="relative flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-neutral-800/95 border-2 border-red-500 rounded-full shadow-lg backdrop-blur-xs">
        <svg className="w-6 h-6 text-red-600 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        <span className="text-xs font-mono font-bold text-neutral-800 dark:text-white">
          ✦ GEAR 5 SPIRIT ✦
        </span>
      </div>
    </div>
  );
};
