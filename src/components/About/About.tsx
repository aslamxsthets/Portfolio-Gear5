import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import { PROFILE_IMAGE_SOURCES, handleImageFallback } from '../../utils/profileImage';
import { 
  Search, 
  Terminal, 
  BookOpen, 
  Feather, 
  MapPin, 
  GraduationCap, 
  School, 
  Quote,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ArchetypeCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  points: string[];
  mangaQuote: string;
}

export const About: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>('analyst');

  const archetypes: ArchetypeCard[] = [
    {
      id: 'analyst',
      title: 'THE ANALYST',
      subtitle: 'Digital Forensics & Incident Response (DFIR)',
      icon: <Search className="w-6 h-6 text-red-600" />,
      tagline: 'Uncovering the digital breadcrumbs behind threat actors.',
      description:
        'Specializing in memory analysis, filesystem artifacts, timeline carving, and event correlation. Driven by the forensic mandate: evidence must speak without contamination.',
      points: [
        'Disk image analysis (Autopsy, FTK Imager concepts)',
        'Log forensics & anomaly isolation (Splunk, Wireshark)',
        'Host-based triage & root cause analysis',
        'Integrity verification via hash audits'
      ],
      mangaQuote: 'Every anomaly leaves a signal; the investigator’s role is to hear it.'
    },
    {
      id: 'builder',
      title: 'THE BUILDER',
      subtitle: 'Practical Tools & Secure Systems',
      icon: <Terminal className="w-6 h-6 text-red-600" />,
      tagline: 'Engineering resilient scripts, encryption wrappers, and triage utilities.',
      description:
        'Crafting automated Python triage tools, mobile privacy protections, and simulated cyber-range defense networks. Bridging foundational computer science with pragmatic security engineering.',
      points: [
        'Python security automation & parsing engines',
        'Mobile defensive architectures & APK privacy shielding',
        'End-to-end cryptographic file exchange frameworks',
        'Network perimeter simulation & testing'
      ],
      mangaQuote: 'Code built with security at its roots stands resilient against the storm.'
    },
    {
      id: 'researcher',
      title: 'THE RESEARCHER',
      subtitle: 'AI + Forensics & Emerging Frontiers',
      icon: <BookOpen className="w-6 h-6 text-red-600" />,
      tagline: 'Exploring intelligence systems, anomaly detection, and accessible tech.',
      description:
        'Presenting research across international IEEE/Springer conferences (ICISML 2026, ICoICI 2025). Passionate about applying AI to UFDR analysis and tactile sensory translation.',
      points: [
        'Modular ML for real-time network anomaly identification',
        'FLORATUNE haptic wearable beat translation research',
        'AR medical training support in regional dialects',
        'Biodiversity & corporate sustainability analysis (SDG-15)'
      ],
      mangaQuote: 'Curiosity is our compass across uncharted academic waters.'
    },
    {
      id: 'writer',
      title: 'THE WRITER',
      subtitle: 'Poetry, Philosophy & Observation',
      icon: <Feather className="w-6 h-6 text-red-600" />,
      tagline: 'Expressing human reflections, freedom, and contemplation.',
      description:
        'Authoring verses and philosophical inquiries under @_.mi.amor.fio. Finding harmony between technical precision in cybersecurity and artistic mindfulness through language.',
      points: [
        'Creative poetry on freedom and quiet resilience',
        'Personal logbook entries reflecting on human nature',
        'Balancing analytical rigor with artistic sensibility',
        'Active poetry catalogue on Instagram @_.mi.amor.fio'
      ],
      mangaQuote: 'Words capture the unseen truths behind the logical world.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 01"
          badge="IDENTITY & MINDSET"
          title="WHO AM I?"
          subtitle="A pre-final year cybersecurity engineering student dedicated to DFIR investigations, security research, and purposeful engineering."
        />

        {/* Philosophy Quote & Portrait Callout */}
        <div className="relative mb-16 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border-2 border-neutral-900 shadow-xl overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Portrait of Aslam in Suit with Manga Border */}
            <div className="relative shrink-0 group">
              <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-neutral-700 dark:border-neutral-600 shadow-lg relative bg-black">
                <img
                  src={PROFILE_IMAGE_SOURCES[0]}
                  alt="Aslam Javeed M in Suit"
                  referrerPolicy="no-referrer"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover object-top filter contrast-125 saturate-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1.5 inset-x-0 text-center font-mono text-[9px] text-neutral-300 tracking-wider font-bold uppercase">
                  ASLAM JAVEED
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-red-600 text-white font-mono text-[9px] font-bold uppercase shadow-sm">
                DFIR
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-xs font-bold uppercase mb-3">
                <Quote className="w-3.5 h-3.5 text-red-500" />
                <span>CORE PHILOSOPHY</span>
              </div>
              <p className="font-heading font-black text-xl sm:text-2xl text-white tracking-wide italic">
                &ldquo;{profileData.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-xs font-mono text-neutral-400">
                <span className="text-red-500 font-bold">ASLAM JAVEED M</span>
                <span>•</span>
                <span>Investigation & Purpose</span>
                <span>•</span>
                <span className="text-neutral-500">Pre-Final Year Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Archetype Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archetypes.map((card) => {
            const isSelected = selectedCardId === card.id;
            return (
              <div
                key={card.id}
                onClick={() => {
                  soundEngine.playWhoosh();
                  setSelectedCardId(card.id);
                }}
                className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-neutral-900 border-red-600 shadow-2xl scale-102'
                    : 'bg-white/80 dark:bg-neutral-900/80 border-neutral-900 dark:border-neutral-700 hover:border-red-500 shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Manga halftone subtle hover */}
                <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none rounded-3xl" />

                {/* Floating mini cloud over active card */}
                {isSelected && (
                  <div className="absolute -top-4 right-6 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1 animate-bounce">
                    <Sparkles className="w-3 h-3" />
                    <span>ACTIVE FOCUS</span>
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    {card.icon}
                  </div>

                  <h3 className="font-heading font-black text-xl text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-red-600 dark:text-red-400 font-bold mt-1 mb-3">
                    {card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {card.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono font-bold text-neutral-900 dark:text-white">
                  <span>{isSelected ? 'VIEWING SPEC' : 'TAP TO EXPAND'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-red-600' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for Selected Archetype */}
        {(() => {
          const current = archetypes.find((a) => a.id === selectedCardId) || archetypes[0];
          return (
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-xl animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-600/10 text-red-600 border border-red-500/20">
                    {current.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-black text-neutral-900 dark:text-white">
                      {current.title}: {current.subtitle}
                    </h4>
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 italic">
                      &ldquo;{current.mangaQuote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                <div className="lg:col-span-7">
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                    {current.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.points.map((pt, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-800 dark:text-neutral-200 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Facts Sidebar */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 space-y-3 text-xs font-mono">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                    ACADEMIC & FIELD BASES
                  </span>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 dark:text-white">Home Territory:</strong>
                      <span className="text-neutral-600 dark:text-neutral-400">Puducherry, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 dark:text-white">Degree & College:</strong>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        B.Tech CSE (IoT, Cyber & Blockchain) @ Manakula Vinayagar Institute of Technology
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <School className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 dark:text-white">Foundations:</strong>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        Petit Seminaire Higher Secondary School (Bio-Maths)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
