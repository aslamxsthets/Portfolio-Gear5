import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { researchData } from '../../data/research';
import { ResearchItem } from '../../types';
import { ResearchModal } from './ResearchModal';
import { soundEngine } from '../../utils/sound';
import { BookOpen, Award, ExternalLink, Calendar, Sparkles } from 'lucide-react';

export const Research: React.FC = () => {
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null);

  return (
    <section id="research" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 05"
          badge="INQUIRY & PUBLICATIONS"
          title="THE RESEARCH ARCHIVES"
          subtitle="GRAND LINE RESEARCH ARCHIVES: Academic investigations exploring machine learning anomaly detection, wearable haptic beat perception, and forensic innovation."
        />

        {/* Research Archives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="research-card group relative rounded-3xl p-6 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer overflow-hidden"
              onClick={() => {
                soundEngine.playWhoosh();
                setSelectedResearch(item);
              }}
            >
              {/* Halftone and ink accent */}
              <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Conference Tag and Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-mono text-xs font-bold uppercase truncate max-w-[200px]">
                    {item.conferenceOrEvent}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 font-semibold">
                    {item.year}
                  </span>
                </div>

                {/* Prize Banner if present */}
                {item.prize && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold mb-3">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.prize}</span>
                  </div>
                )}

                {/* Paper Title */}
                <h3 className="font-heading font-black text-lg sm:text-xl text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Subtitle / Quote */}
                {item.subtitle && (
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 italic mb-4 line-clamp-2">
                    &ldquo;{item.subtitle}&rdquo;
                  </p>
                )}

                {/* Abstract Preview */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800 mb-3">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Open Modal CTA */}
                <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 dark:text-white group-hover:text-red-600 pt-1">
                  <span>VIEW FULL RECORD</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Modal */}
      <ResearchModal
        research={selectedResearch}
        onClose={() => setSelectedResearch(null)}
      />
    </section>
  );
};
