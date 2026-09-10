import React from 'react';
import { WritingItem } from '../../types';
import { soundEngine } from '../../utils/sound';
import { X, Feather, Calendar, Bookmark, Instagram } from 'lucide-react';

interface WritingModalProps {
  writing: WritingItem | null;
  onClose: () => void;
}

export const WritingModal: React.FC<WritingModalProps> = ({ writing, onClose }) => {
  if (!writing) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#fffefb] dark:bg-[#181614] border-2 border-neutral-900 dark:border-neutral-600 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-600 transition-colors"
          aria-label="Close writing modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Identity & Date */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-red-600" />
            <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              WORDS FROM THE LOGBOOK
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-400">{writing.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-heading font-black text-neutral-900 dark:text-white mb-2">
          {writing.title}
        </h3>

        <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-mono mb-6">
          Theme: {writing.theme}
        </div>

        {/* Full poem/prose with paper serif aesthetic */}
        <div className="whitespace-pre-line font-serif text-neutral-800 dark:text-neutral-200 text-base sm:text-lg leading-loose italic p-6 rounded-2xl bg-[#fdfbf7] dark:bg-[#121110] border border-neutral-200 dark:border-neutral-800 mb-8 shadow-xs">
          {writing.fullText}
        </div>

        {/* Author sign-off */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="font-heading font-bold text-neutral-900 dark:text-white text-sm block">
              Aslam Javeed M
            </span>
            <a
              href="https://instagram.com/_.mi.amor.fio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-red-600 dark:text-red-400 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@_.mi.amor.fio</span>
            </a>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            Creative Logbook Entry
          </div>
        </div>
      </div>
    </div>
  );
};
