import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { writingData } from '../../data/writing';
import { WritingItem } from '../../types';
import { WritingModal } from './WritingModal';
import { soundEngine } from '../../utils/sound';
import { Feather, BookOpen, Instagram, ArrowRight } from 'lucide-react';

export const Writing: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<WritingItem | null>(null);

  return (
    <section id="writing" className="py-24 px-4 sm:px-6 relative bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 10"
          badge="POETRY & ESSAYS"
          title="WORDS FROM THE LOGBOOK"
          subtitle="Creative writings, poetic inquiries, and personal verses authored under @_.mi.amor.fio exploring freedom, observation, and human intention."
        />

        {/* Identity banner */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-xs">
            <Feather className="w-4 h-4 text-red-600" />
            <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">Written by</span>
            <a
              href="https://instagram.com/_.mi.amor.fio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@_.mi.amor.fio</span>
            </a>
          </div>
        </div>

        {/* Paper cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {writingData.map((piece) => (
            <div
              key={piece.id}
              className="group relative rounded-3xl p-7 sm:p-9 bg-[#fffdfa] dark:bg-[#191715] border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.5deg] flex flex-col justify-between cursor-pointer overflow-hidden"
              onClick={() => {
                soundEngine.playWhoosh();
                setSelectedPiece(piece);
              }}
            >
              {/* Halftone ink wash background */}
              <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
                    {piece.theme}
                  </span>
                  <span className="font-mono text-xs text-neutral-400">{piece.date}</span>
                </div>

                <h3 className="font-heading font-black text-2xl text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-4">
                  {piece.title}
                </h3>

                <p className="font-serif italic text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;{piece.excerpt}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white group-hover:text-red-600 flex items-center gap-1.5">
                  READ LOGBOOK PIECE
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <Feather className="w-4 h-4 text-neutral-400 group-hover:text-red-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <WritingModal
        writing={selectedPiece}
        onClose={() => setSelectedPiece(null)}
      />
    </section>
  );
};
