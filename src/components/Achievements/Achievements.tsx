import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData } from '../../data/achievements';
import { soundEngine } from '../../utils/sound';
import { Award, Sparkles, Shield, Star } from 'lucide-react';

interface AchievementsProps {
  bountyMode?: boolean;
  onToggleBountyMode?: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ bountyMode = false, onToggleBountyMode }) => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex-1">
            <SectionHeading
              chapter="CHAPTER 07"
              badge="RECOGNITION"
              title="THE BOUNTY BOARD"
              subtitle="Original professional achievement records, competitive prizes, hackathon final stages, and conference research selections."
            />
          </div>
          {onToggleBountyMode && (
            <button
              onClick={onToggleBountyMode}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 border ${
                bountyMode
                  ? 'bg-red-600 text-white border-red-600 shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-red-600'
              }`}
              title="Toggle collectible Bounty styling"
            >
              {bountyMode ? '✦ BOUNTY MODE ACTIVE' : '⚡ ENABLE BOUNTY MODE'}
            </button>
          )}
        </div>

        {/* Collectible Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundEngine.playWhoosh()}
              className={`bounty-card group relative rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${
                bountyMode
                  ? 'bg-[#fffdf7] dark:bg-[#1f1b18] border-amber-600 dark:border-amber-500 shadow-xl'
                  : 'bg-white dark:bg-neutral-900 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-2xl'
              }`}
            >
              {/* Halftone texture */}
              <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black tracking-widest text-red-600 dark:text-red-400 uppercase px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                </div>

                {/* Bounty Value Banner if in Bounty Mode */}
                {bountyMode && (
                  <div className="mb-4 text-center py-2 px-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      BOUNTY / REPUTATION
                    </span>
                    <span className="text-xl font-heading font-black text-amber-600 dark:text-amber-400">
                      {item.bountyRating}
                    </span>
                  </div>
                )}

                {/* Title & Subtitle */}
                <h3 className="font-heading font-black text-xl text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Organization Footnote */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span className="truncate max-w-[200px]">{item.organization}</span>
                <Award className="w-4 h-4 text-red-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
