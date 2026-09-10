import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useEasterEggs } from './hooks/useEasterEggs';
import { useReducedMotion } from './hooks/useReducedMotion';
import { CustomCursor } from './components/common/CustomCursor';
import { CloudCanvas } from './components/common/CloudCanvas';
import { AwakeningOverlay } from './components/common/AwakeningOverlay';
import { SecretCloud } from './components/common/SecretCloud';
import { AwakeningLoader } from './components/Loading/AwakeningLoader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { QuickProfile } from './components/Hero/QuickProfile';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Research } from './components/Research/Research';
import { Experience } from './components/Experience/Experience';
import { Achievements } from './components/Achievements/Achievements';
import { Certifications } from './components/Certifications/Certifications';
import { Events } from './components/Events/Events';
import { Writing } from './components/Writing/Writing';
import { Personal } from './components/Personal/Personal';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ResumeModal } from './components/Resume/ResumeModal';
import { soundEngine } from './utils/sound';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAwakening, setIsAwakening] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();

  const handleTriggerAwaken = () => {
    setIsAwakening(true);
    soundEngine.playAwakening();
  };

  const {
    bountyMode,
    toggleBountyMode,
    handleLogoClick,
    logoClicks,
    showSecretCloud
  } = useEasterEggs({
    onAwakenTrigger: handleTriggerAwaken
  });

  // Apply subtle screen shake effect during awakening
  useEffect(() => {
    if (isAwakening && !reducedMotion) {
      document.body.classList.add('awakening-active');
      const timer = setTimeout(() => {
        document.body.classList.remove('awakening-active');
      }, 900);
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('awakening-active');
      };
    }
  }, [isAwakening, reducedMotion]);

  return (
    <div className="relative min-h-screen bg-[#faf9f6] dark:bg-[#121212] text-[#171717] dark:text-[#f5f5f5] font-sans selection:bg-[#dc2626] selection:text-white transition-colors duration-300">
      {/* 1-2s Cinematic Awakening Loader */}
      {isLoading && (
        <AwakeningLoader onLoaded={() => setIsLoading(false)} />
      )}

      {/* Custom Cursor (Auto-disabled on touch devices) */}
      <CustomCursor />

      {/* Interactive Cloud Background Canvas */}
      <CloudCanvas reducedMotion={reducedMotion} />

      {/* Gear 5 Awakening Fullscreen Overlay Effect */}
      <AwakeningOverlay
        isActive={isAwakening}
        onComplete={() => setIsAwakening(false)}
      />

      {/* Floating Easter Egg Secret Cloud */}
      <SecretCloud
        isVisible={showSecretCloud}
        onCatch={() => {
          soundEngine.playCloudBurst();
          handleTriggerAwaken();
        }}
      />

      {/* Floating Navigation Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onAwaken={handleTriggerAwaken}
        onOpenResume={() => {
          soundEngine.playClick();
          setIsResumeOpen(true);
        }}
        onLogoClick={handleLogoClick}
        logoClicks={logoClicks}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* Full-Screen Hero */}
        <Hero
          onAwaken={handleTriggerAwaken}
          onOpenResume={() => {
            soundEngine.playClick();
            setIsResumeOpen(true);
          }}
          reducedMotion={reducedMotion}
        />

        {/* Quick Profile Telemetry Bar */}
        <QuickProfile />

        {/* Who Am I? (About - 4 Interactive Archetype Cards) */}
        <About />

        {/* The Journey (Education Timeline: 2024 -> 2028) */}
        <Education />

        {/* Cybersecurity Skills & Haki Power System Visualizer */}
        <Skills />

        {/* My Creations (Projects Section) */}
        <Projects />

        {/* The Research Archives (Grand Line Research Archives) */}
        <Research />

        {/* Field Experience (Internships) */}
        <Experience />

        {/* The Bounty Board (Achievements) */}
        <Achievements
          bountyMode={bountyMode}
          onToggleBountyMode={toggleBountyMode}
        />

        {/* Certification Vault */}
        <Certifications />

        {/* Cybersecurity Expeditions (Events & Workshops) */}
        <Events />

        {/* Words From The Logbook (Creative Writing & Poetry) */}
        <Writing />

        {/* Beyond The Terminal (Hobbies & Languages) */}
        <Personal />

        {/* Send A Message (Contact Coordinates & Transmission Form) */}
        <Contact />
      </main>

      {/* Memorable Footer */}
      <Footer />

      {/* Complete Curriculum Vitae / Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
