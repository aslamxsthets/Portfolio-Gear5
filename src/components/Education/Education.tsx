import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { educationTimeline } from '../../data/profile';
import { GraduationCap, School, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 relative bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 02"
          badge="ACADEMIC VOYAGE"
          title="THE JOURNEY"
          subtitle="A chronological timeline charting the academic foundation and engineering milestones from foundational mathematics to cybersecurity specialization."
        />

        {/* Journey Timeline Container */}
        <div className="relative mt-16">
          {/* Central Ink Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-red-600 via-neutral-900 dark:via-neutral-400 to-red-600 sm:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Timeline Anchor Node / Cloud Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-4 border-red-600 flex items-center justify-center shadow-lg z-10">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  </div>

                  {/* Empty Spacer for desktop balance */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-mono text-xs font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="font-mono text-[11px] text-neutral-400 font-semibold uppercase">
                          {item.status}
                        </span>
                      </div>

                      {/* Institution Title */}
                      <div className="flex items-start gap-2.5 mb-2">
                        {index === 0 ? (
                          <GraduationCap className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        ) : (
                          <School className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        )}
                        <div>
                          <h3 className="text-lg sm:text-xl font-heading font-black text-neutral-900 dark:text-white leading-tight">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                            <MapPin className="w-3 h-3" />
                            <span>Puducherry, India</span>
                          </div>
                        </div>
                      </div>

                      {/* Degree & Specialization */}
                      <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mt-2">
                        {item.degree}
                      </p>
                      <p className="text-xs font-mono text-red-600 dark:text-red-400 font-semibold mt-0.5">
                        {item.specialization}
                      </p>

                      {/* Highlights */}
                      <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-1.5">
                        <Award className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{item.highlights}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
