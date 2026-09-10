import React, { useState, useEffect } from 'react';
import { soundEngine } from '../../utils/sound';
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles, 
  FileText
} from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onAwaken: () => void;
  onOpenResume: () => void;
  onLogoClick: () => void;
  logoClicks: number;
}

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'EVENTS', href: '#events' },
  { label: 'WRITING', href: '#writing' },
  { label: 'CONTACT', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onAwaken,
  onOpenResume,
  onLogoClick,
  logoClicks
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(!soundEngine.isMuted);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundEngine.isMuted = !soundEngine.isMuted;
    setSoundEnabled(!soundEngine.isMuted);
    if (!soundEngine.isMuted) {
      soundEngine.playClick();
    }
  };

  const handleNavClick = (href: string) => {
    soundEngine.playWhoosh();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 ${
          isScrolled
            ? 'bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-md border border-neutral-200 dark:border-neutral-800'
            : 'bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xs border border-transparent'
        }`}
      >
        {/* Logo / Personal Crest */}
        <div
          id="nav-logo"
          onClick={onLogoClick}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
          title={`Click 5 times for cloud burst! (${logoClicks}/5)`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onLogoClick()}
        >
          {/* Animated Cloud Icon */}
          <div className="w-9 h-9 rounded-full bg-red-600/10 dark:bg-red-600/20 border border-red-600 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12">
            <span className="text-red-600 dark:text-red-400 font-heading font-black text-sm">
              AJ
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wider text-neutral-900 dark:text-white leading-none">
              ASLAM JAVEED
            </span>
            <span className="font-mono text-[10px] text-red-600 dark:text-red-400 font-semibold tracking-wider">
              DFIR ENTHUSIAST
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-800/80 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-red-600 font-bold shadow-xs'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls: Awaken Button, Sound, Theme, Resume, Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AWAKEN Button */}
          <button
            id="btn-nav-awaken"
            onClick={() => {
              soundEngine.playAwakening();
              onAwaken();
            }}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95 group"
            title="Trigger Gear 5 Awakening Effect!"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span className="hidden sm:inline">AWAKEN</span>
          </button>

          {/* Resume Modal Button */}
          <button
            id="btn-nav-resume"
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium hover:border-red-500 hover:text-red-600 transition-colors"
            title="View & Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-red-600" />
            <span>RESUME</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="btn-nav-sound"
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-red-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            title={soundEnabled ? "Sound Effects Enabled (Click to Mute)" : "Sound Muted (Click to Enable)"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-red-600" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle */}
          <button
            id="btn-nav-theme"
            onClick={() => {
              soundEngine.playClick();
              onToggleTheme();
            }}
            aria-label={`Switch to ${theme === 'light' ? 'Dark Haki' : 'Light Gear 5'} mode`}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-red-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            title={theme === 'light' ? "Switch to Night Pirate / Haki World" : "Switch to Gear 5 / Cloud World"}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="btn-nav-mobile-menu"
            onClick={() => {
              soundEngine.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Manga Drawer Panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-16 mt-2 p-5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-2 border-neutral-900 dark:border-white rounded-3xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800 mb-3">
            <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-wider">
              ✦ LOGBOOK DIRECTORY ✦
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-mono font-bold flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              VIEW RESUME
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onAwaken();
              }}
              className="flex-1 py-2 rounded-xl bg-red-600 text-white text-xs font-mono font-bold flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AWAKEN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
