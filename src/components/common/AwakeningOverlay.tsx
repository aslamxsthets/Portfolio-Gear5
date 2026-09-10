import React, { useEffect, useState } from 'react';
import { Gear5Portrait } from './Gear5Portrait';
import { soundEngine } from '../../utils/sound';
import { Sparkles, Shield, Zap, Terminal } from 'lucide-react';

interface AwakeningOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

export const AwakeningOverlay: React.FC<AwakeningOverlayProps> = ({ isActive, onComplete }) => {
  const [particles, setParticles] = useState<{ id: number; angle: number; dist: number; size: number; color: string }[]>([]);

  // Previous timing: 1.2 seconds (1200ms)
  const DURATION_MS = 1200;

  useEffect(() => {
    if (!isActive) return;

    // Generate dynamic burst particles
    const p = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      angle: (i / 40) * Math.PI * 2 + (Math.random() * 0.2 - 0.1),
      dist: Math.random() * 260 + 120,
      size: Math.random() * 14 + 5,
      color: i % 3 === 0 ? '#dc2626' : i % 2 === 0 ? '#ffffff' : '#171717'
    }));
    setParticles(p);

    const timer = setTimeout(() => {
      onComplete();
    }, DURATION_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md select-none animate-fadeIn"
      role="dialog"
      aria-label="Gear 5 Awakening Burst"
    >
      {/* Radiating Manga Speed Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <radialGradient id="nikaGlowBurst" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#dc2626" stopOpacity="0.3" />
            <stop offset="80%" stopColor="#171717" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.98" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1000" height="1000" fill="url(#nikaGlowBurst)" />

        {/* Dynamic Speed Lines */}
        {Array.from({ length: 56 }).map((_, i) => {
          const angle = (i / 56) * Math.PI * 2;
          const x1 = 500 + Math.cos(angle) * 750;
          const y1 = 500 + Math.sin(angle) * 750;
          const x2 = 500 + Math.cos(angle) * (180 + (i % 4) * 25);
          const y2 = 500 + Math.sin(angle) * (180 + (i % 4) * 25);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? '#dc2626' : i % 2 === 0 ? '#ffffff' : '#525252'}
              strokeWidth={i % 3 === 0 ? '4' : '2'}
              strokeLinecap="round"
              opacity={0.45 + (i % 3) * 0.25}
            />
          );
        })}
      </svg>

      {/* Floating Spark Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => {
          const x = Math.cos(p.angle) * p.dist;
          const y = Math.sin(p.angle) * p.dist;
          return (
            <div
              key={p.id}
              className="absolute left-1/2 top-1/2 rounded-full transition-transform duration-700 ease-out"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                boxShadow: p.color === '#dc2626' ? '0 0 16px #dc2626' : '0 0 12px #ffffff',
                opacity: 0.9
              }}
            />
          );
        })}
      </div>

      {/* Pulsing Conqueror's Haki Shockwaves */}
      <div className="absolute w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full border-4 border-red-600/50 animate-ping pointer-events-none" />
      <div className="absolute w-[400px] sm:w-[620px] h-[400px] sm:h-[620px] rounded-full border-2 border-white/40 animate-pulse pointer-events-none" />

      {/* Central Awakening Content */}
      <div className="relative z-30 max-w-lg w-full flex flex-col items-center justify-center text-center animate-gear5-hair">
        {/* Onomatopoeia Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white font-mono text-xs font-black tracking-widest uppercase mb-3 shadow-lg shadow-red-600/50 animate-bounce">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>✦ GEAR 5 AWAKENING ✦</span>
        </div>

        {/* Portrait of Aslam in Suit with Gear 5 Spirit Aura */}
        <div className="my-2 scale-90 sm:scale-100">
          <Gear5Portrait size="md" showUploadButton={false} interactive={false} />
        </div>

        {/* Hero Title and Sound Cadence */}
        <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-2">
          ASLAM JAVEED M
        </h2>
        
        <p className="text-sm font-mono text-red-400 font-bold tracking-widest uppercase mt-1">
          🥁 DOOM DUTTA DA! • WARRIOR OF LIBERATION
        </p>

        <div className="flex items-center gap-3 mt-4 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-1 text-white">
            <Zap className="w-3.5 h-3.5 text-red-500" />
            HAKI UNLEASHED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-white">
            <Terminal className="w-3.5 h-3.5 text-neutral-300" />
            DFIR AWAKENED
          </span>
        </div>
      </div>
    </div>
  );
};
