import { useState, useEffect, useCallback } from 'react';
import { soundEngine } from '../utils/sound';

interface EasterEggOptions {
  onAwakenTrigger: () => void;
}

export function useEasterEggs({ onAwakenTrigger }: EasterEggOptions) {
  const [bountyMode, setBountyMode] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecretCloud, setShowSecretCloud] = useState(false);
  const [typedChars, setTypedChars] = useState('');

  // Keyboard listener for secret sequence "gear5" or "awaken"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      setTypedChars(prev => {
        const next = (prev + e.key.toLowerCase()).slice(-10);
        if (next.includes('gear5') || next.includes('awaken')) {
          onAwakenTrigger();
          return '';
        }
        if (next.includes('bounty')) {
          setBountyMode(b => !b);
          soundEngine.playWhoosh();
          return '';
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onAwakenTrigger]);

  // Logo interaction: 5 clicks triggers cloud burst
  const handleLogoClick = useCallback(() => {
    setLogoClicks(prev => {
      const next = prev + 1;
      if (next >= 5) {
        soundEngine.playCloudBurst();
        onAwakenTrigger();
        return 0;
      }
      soundEngine.playClick();
      return next;
    });
  }, [onAwakenTrigger]);

  // Periodic secret cloud drifting across screen
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecretCloud(true);
      setTimeout(() => setShowSecretCloud(false), 9000);
    }, 45000); // Every 45s a secret cloud floats by

    return () => clearInterval(interval);
  }, []);

  const toggleBountyMode = () => {
    soundEngine.playWhoosh();
    setBountyMode(b => !b);
  };

  return {
    bountyMode,
    toggleBountyMode,
    handleLogoClick,
    logoClicks,
    showSecretCloud
  };
}
