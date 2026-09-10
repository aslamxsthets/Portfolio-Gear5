import React from 'react';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 bg-[#ffffff] dark:bg-[#0d0d0d] border-t-2 border-neutral-900 dark:border-neutral-800 overflow-hidden select-none">
      {/* Drifting Background Cloud SVG */}
      <div
        className="absolute -top-10 left-0 w-80 h-32 opacity-20 pointer-events-none"
        style={{ animation: 'cloud-drift 22s linear infinite' }}
      >
        <svg viewBox="0 0 200 80" fill="currentColor" className="text-neutral-400 dark:text-neutral-600">
          <path d="M 20 60 A 20 20 0 0 1 40 30 A 30 30 0 0 1 90 20 A 35 35 0 0 1 150 35 A 25 25 0 0 1 180 60 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Gear 5 Adventure Heading */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AWAKENED VOYAGE CONTINUES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-neutral-950 dark:text-white uppercase mb-4">
          THE ADVENTURE DOESN'T END HERE.
        </h2>

        <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-sans leading-relaxed mb-8">
          Detecting signals, investigating anomalies, and building practical defensive systems.
          Always ready for the next research inquiry and digital forensics expedition.
        </p>

        {/* Social Icons Links */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on GitHub"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Aslam Javeed on LinkedIn"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/_.mi.amor.fio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore poetry on Instagram @_.mi.amor.fio"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send an email to Aslam Javeed"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Back to Top button with satisfying animation */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95 mb-12 cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-red-500" />
        </button>

        {/* Copyright Subtext */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 ASLAM JAVEED. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>INSPIRED BY FREEDOM & INVESTIGATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-red-600 dark:text-red-400 font-bold">GEAR 5 AWAKENED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
