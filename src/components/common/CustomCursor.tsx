import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'card' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const counterRef = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);

      // Add trail cloud puff periodically
      counterRef.current += 1;
      if (counterRef.current % 3 === 0) {
        setTrail(prev => [
          ...prev.slice(-6),
          { x: newPos.x, y: newPos.y, id: Date.now() + Math.random() }
        ]);
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('button') || target.closest('a') || target.closest('[role="button"]')) {
        setCursorState('pointer');
      } else if (target.closest('.project-card') || target.closest('.research-card') || target.closest('.bounty-card')) {
        setCursorState('card');
      } else if (target.closest('input') || target.closest('textarea')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Cloud/Smoke Trail Particles */}
      {trail.map(t => (
        <div
          key={t.id}
          className="absolute rounded-full bg-white/70 dark:bg-white/40 border border-neutral-300 dark:border-neutral-700 shadow-sm transition-opacity duration-500 ease-out"
          style={{
            left: t.x - 6,
            top: t.y - 6,
            width: 12,
            height: 12,
            transform: 'scale(0.8)',
            animation: 'float-gentle 0.6s ease-out forwards',
            opacity: 0.4
          }}
        />
      ))}

      {/* Main Cursor Ring & Ink Core */}
      <div
        className={`absolute rounded-full flex items-center justify-center transition-transform duration-100 ease-out ${
          cursorState === 'pointer'
            ? 'w-10 h-10 -ml-5 -mt-5 bg-red-600/15 border-2 border-red-600 scale-125'
            : cursorState === 'card'
            ? 'w-12 h-12 -ml-6 -mt-6 border-2 border-dashed border-red-500 bg-neutral-900/10 dark:bg-white/10 animate-spin-slow'
            : cursorState === 'text'
            ? 'w-6 h-6 -ml-3 -mt-3 border border-red-500'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 border border-neutral-800 dark:border-white bg-white/40 dark:bg-neutral-900/40 backdrop-blur-[1px]'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate3d(0, 0, 0)`
        }}
      >
        {/* Core Dot (Black in Light, White in Dark with Red center) */}
        <div
          className={`rounded-full transition-all duration-150 ${
            cursorState === 'pointer'
              ? 'w-2 h-2 bg-red-600'
              : cursorState === 'card'
              ? 'w-2.5 h-2.5 bg-red-600'
              : 'w-1.5 h-1.5 bg-neutral-900 dark:bg-red-500'
          }`}
        />
      </div>
    </div>
  );
};
