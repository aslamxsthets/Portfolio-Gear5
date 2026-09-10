import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import { PROFILE_IMAGE_SOURCES, handleImageFallback } from '../../utils/profileImage';
import { 
  Sparkles, 
  ArrowDown, 
  FolderGit2, 
  FileDown, 
  Compass, 
  ShieldAlert, 
  Terminal,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onAwaken: () => void;
  onOpenResume: () => void;
  reducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onAwaken, onOpenResume, reducedMotion = false }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [heroImgSrc, setHeroImgSrc] = useState<string>(() => {
    return localStorage.getItem('aslam_gear5_custom_image') || '/aslam_suit_art.svg';
  });

  React.useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setHeroImgSrc(customEvent.detail);
      } else {
        setHeroImgSrc(localStorage.getItem('aslam_gear5_custom_image') || '/aslam_suit_art.svg');
      }
    };
    window.addEventListener('aslam_portrait_updated', handleUpdate);
    return () => window.removeEventListener('aslam_portrait_updated', handleUpdate);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollTo = (id: string) => {
    soundEngine.playWhoosh();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#faf9f6] to-[#f4f3ef] dark:from-[#121212] dark:via-[#171717] dark:to-[#0f0f0f] select-none"
    >
      {/* Dynamic Background Parallax Elements */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
        }}
      >
        {/* Haki Crimson Energy Waves */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] rounded-full border border-red-600/20 dark:border-red-600/30 animate-pulse-ring pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full border border-dashed border-red-500/25 pointer-events-none" />

        {/* Organic Manga Cloud Blobs */}
        <div
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/70 dark:bg-white/5 blur-2xl pointer-events-none"
          style={{ transform: `translate3d(${-mousePos.x * 30}px, ${-mousePos.y * 30}px, 0)` }}
        />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-red-600/5 dark:bg-red-600/10 blur-3xl pointer-events-none"
          style={{ transform: `translate3d(${mousePos.x * 40}px, ${mousePos.y * 40}px, 0)` }}
        />

        {/* Abstract Terminal / DFIR Hex Code Fragments */}
        <div className="hidden lg:block absolute left-12 top-1/3 p-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs text-[11px] font-mono text-neutral-500 dark:text-neutral-400 space-y-1 shadow-sm">
          <div className="flex items-center gap-1 text-red-600 dark:text-red-400 font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>DFIR_TRIAGE_ACTIVE</span>
          </div>
          <div>0x0040: 4D 5A 90 00 [PE_HEADER]</div>
          <div>EVID: MACB_TIMELINE_VERIFIED</div>
          <div>STATUS: INCIDENT_INVESTIGATION</div>
        </div>

        <div className="hidden lg:block absolute right-12 bottom-1/3 p-3 rounded-2xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs text-[11px] font-mono text-neutral-500 dark:text-neutral-400 space-y-1 shadow-sm">
          <div className="flex items-center gap-1 text-neutral-800 dark:text-neutral-200 font-bold">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span>NETWORK_DEFENSE_TELEMETRY</span>
          </div>
          <div>PCAP: DISPLAY_FILTER_TCP_STREAM</div>
          <div>SIEM: ZERO_FALSE_POSITIVES</div>
          <div>HAKI: OBSERVATION_ACTIVE</div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Gear 5 Awakened Suit Portrait Trigger */}
        <div className="relative mb-5 group cursor-pointer" onClick={() => { soundEngine.playAwakening(); onAwaken(); }}>
          {/* Swirling celestial cloud ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-red-600 via-white to-red-600 opacity-70 blur-md animate-gear5-hair group-hover:opacity-100 transition-opacity" />
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white shadow-xl overflow-hidden animate-drums-beat">
            <img
              src={PROFILE_IMAGE_SOURCES[0]}
              alt="Aslam Javeed in Suit - Gear 5 Spirit"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top filter contrast-125 saturate-90 group-hover:scale-110 transition-transform duration-300"
              onError={handleImageFallback}
            />
            {/* Gear 5 flame overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-white/40 pointer-events-none" />
          </div>

          {/* Quick badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-red-600 text-white font-mono text-[9px] font-black uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1 group-hover:scale-105 transition-transform">
            <Sparkles className="w-2.5 h-2.5 animate-spin" />
            <span>AWAKEN (GEAR 5)</span>
          </div>
        </div>

        {/* Pre-title Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white shadow-xs mb-6 group cursor-default">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-widest">
            {profileData.primaryIdentity}
          </span>
          <span className="text-neutral-400">/</span>
          <span className="font-mono text-xs text-red-600 dark:text-red-400 font-bold uppercase">
            GEAR 5 AWAKENED
          </span>
        </div>

        {/* Hero Name Display with Cinzel Display Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-neutral-950 dark:text-neutral-50 uppercase drop-shadow-xs mb-1">
          {profileData.name}
        </h1>

        <p className="mb-3 font-mono text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] uppercase text-red-600 dark:text-red-400">
          EREBUS.D.AKUMA
        </p>

        {/* Professional Title & Sub-Heading */}
        <div className="mb-4 space-y-1">
          <p className="text-base sm:text-lg md:text-xl font-mono font-bold text-red-600 dark:text-red-400 tracking-wide uppercase">
            {profileData.titles[0]}
          </p>
          <p className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-300">
            Primary Focus: <span className="text-neutral-900 dark:text-white font-bold underline decoration-red-500 underline-offset-4">{profileData.primaryFocus}</span>
          </p>
        </div>

        {/* University & Degree Attribution */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl px-4 py-2 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700">
          <Cpu className="w-4 h-4 text-red-600 shrink-0" />
          <span>{profileData.degree}</span>
          <span className="text-neutral-400">|</span>
          <span className="font-bold text-neutral-800 dark:text-neutral-200">{profileData.university}</span>
        </div>

        {/* Hero Supporting Line */}
        <blockquote className="text-lg sm:text-xl md:text-2xl font-heading italic font-bold text-neutral-900 dark:text-neutral-100 max-w-xl mb-8 relative px-6 py-2">
          <span className="text-red-600 text-3xl leading-none mr-1">&ldquo;</span>
          {profileData.alternativeSupportingLine}
          <span className="text-red-600 text-3xl leading-none ml-1">&rdquo;</span>
        </blockquote>

        {/* CTA Buttons: EXPLORE MY WORLD, VIEW PROJECTS, DOWNLOAD RESUME, AWAKEN */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl">
          {/* Explore My World */}
          <button
            id="btn-hero-explore"
            onClick={() => handleScrollTo('about')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4 text-red-500" />
            <span>EXPLORE MY WORLD</span>
          </button>

          {/* View Projects */}
          <button
            id="btn-hero-projects"
            onClick={() => handleScrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border-2 border-neutral-900 dark:border-neutral-600 text-neutral-900 dark:text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            <FolderGit2 className="w-4 h-4 text-red-600" />
            <span>VIEW PROJECTS</span>
          </button>

          {/* Download Resume */}
          <button
            id="btn-hero-resume"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all hover:border-red-500 hover:text-red-600"
          >
            <FileDown className="w-4 h-4 text-red-600" />
            <span>RESUME</span>
          </button>

          {/* AWAKEN Button */}
          <button
            id="btn-hero-awaken"
            onClick={() => {
              soundEngine.playAwakening();
              onAwaken();
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs sm:text-sm font-black tracking-widest transition-all duration-200 shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>AWAKEN</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScrollTo('about')}
          className="mt-14 flex flex-col items-center gap-1 text-xs font-mono text-neutral-400 hover:text-red-600 transition-colors cursor-pointer group"
        >
          <span className="tracking-widest uppercase">DISCOVER THE LOGBOOK</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-red-600" />
        </button>
      </div>
    </section>
  );
};
