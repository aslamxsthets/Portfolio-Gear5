import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { eventsData } from '../../data/events';
import { soundEngine } from '../../utils/sound';
import { MapPin, Calendar, Sparkles, Compass, Shield, Flag } from 'lucide-react';

export const Events: React.FC = () => {
  const featuredEvent = eventsData.find((e) => e.isFeatured);
  const otherEvents = eventsData.filter((e) => !e.isFeatured);

  return (
    <section id="events" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 09"
          badge="LEARNING EXPEDITIONS"
          title="CYBERSECURITY EXPEDITIONS"
          subtitle="Workshops, capture-the-flag battlegrounds, and security community meetups attended across technical hubs."
        />

        {/* Featured Major Workshop: AVAR by K7 Antivirus at VIT Chennai */}
        {featuredEvent && (
          <div
            onMouseEnter={() => soundEngine.playWhoosh()}
            className="mb-12 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white border-2 border-red-600 shadow-2xl relative overflow-hidden group"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-mono font-black tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  MAJOR FEATURED EXPEDITION
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {featuredEvent.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white mb-3">
                {featuredEvent.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-red-400 mb-6 font-semibold">
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xl border border-neutral-700">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Conducted by: <strong className="text-white">{featuredEvent.organization}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-800/80 px-3 py-1.5 rounded-xl border border-neutral-700">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Location: <strong className="text-white">{featuredEvent.location}</strong></span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
                {featuredEvent.description}
              </p>
            </div>
          </div>
        )}

        {/* Other Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-red-600 dark:text-red-400 font-bold uppercase">
                    {evt.category}
                  </span>
                  <Compass className="w-4 h-4 text-neutral-400 group-hover:text-red-600 transition-colors" />
                </div>

                <h4 className="font-heading font-black text-lg text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 leading-snug">
                  {evt.title}
                </h4>

                {evt.organization && (
                  <p className="text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    {evt.organization}
                  </p>
                )}

                {evt.location && (
                  <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <MapPin className="w-3 h-3 text-red-600" />
                    <span>{evt.location}</span>
                  </div>
                )}

                {evt.description && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Flag className="w-3.5 h-3.5 text-red-600" />
                <span>Cybersecurity Expedition Log</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
