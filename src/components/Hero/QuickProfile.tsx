import React from 'react';
import { profileData } from '../../data/profile';
import { ShieldCheck, Search, Radar, BookOpen, Lock, Terminal } from 'lucide-react';

export const QuickProfile: React.FC = () => {
  const badgeIcons: Record<string, React.ReactNode> = {
    'DFIR': <Search className="w-3.5 h-3.5 text-red-600" />,
    'CYBERSECURITY': <Lock className="w-3.5 h-3.5 text-red-600" />,
    'NETWORK SECURITY': <Radar className="w-3.5 h-3.5 text-red-600" />,
    'DIGITAL FORENSICS': <ShieldCheck className="w-3.5 h-3.5 text-red-600" />,
    'INCIDENT RESPONSE': <Terminal className="w-3.5 h-3.5 text-red-600" />,
    'RESEARCH': <BookOpen className="w-3.5 h-3.5 text-red-600" />
  };

  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-2 border-neutral-900 dark:border-neutral-700 shadow-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Quick statement */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-1">
              ✦ PROFILE TELEMETRY ✦
            </span>
            <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
              Cybersecurity engineering student focused on Digital Forensics, Incident Response,
              security investigation, and practical security research. Dedicated to analyzing evidence,
              triage, and fortifying organizational security posture.
            </p>
          </div>

          {/* Animated Badges Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg">
            {profileData.keyBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-mono text-xs font-bold transition-all duration-200 hover:border-red-600 hover:scale-105 select-none shadow-xs"
              >
                {badgeIcons[badge] || <span className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
