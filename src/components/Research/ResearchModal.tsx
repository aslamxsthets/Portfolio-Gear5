import React from 'react';
import { ResearchItem } from '../../types';
import { soundEngine } from '../../utils/sound';
import { X, Award, BookOpen, Calendar, Tag, CheckCircle2 } from 'lucide-react';

interface ResearchModalProps {
  research: ResearchItem | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ research, onClose }) => {
  if (!research) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-600 transition-colors"
          aria-label="Close research modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Conference Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-mono font-bold uppercase">
            {research.conferenceOrEvent}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono">
            {research.year}
          </span>
          {research.prize && (
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-mono font-black flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              {research.prize}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-neutral-900 dark:text-white mb-2">
          {research.title}
        </h3>

        {research.subtitle && (
          <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 mb-4 font-semibold italic">
            &ldquo;{research.subtitle}&rdquo;
          </p>
        )}

        {/* Forum / Program info */}
        {research.programOrOrg && (
          <div className="mb-4 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200">
            <strong>Program / Body:</strong> {research.programOrOrg}
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
            RESEARCH ABSTRACT & CONTEXT
          </h4>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {research.description}
          </p>
        </div>

        {/* Category tag */}
        <div className="mb-6">
          <span className="text-xs font-mono text-neutral-500 uppercase block mb-1">
            RESEARCH FIELD:
          </span>
          <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
            {research.category}
          </span>
        </div>

        {/* Tags */}
        <div>
          <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            TOPIC KEYWORDS
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {research.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
