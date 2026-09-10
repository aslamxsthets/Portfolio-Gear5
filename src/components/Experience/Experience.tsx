import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/experience';
import { Briefcase, Shield, Edit3, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative bg-neutral-50/50 dark:bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 06"
          badge="HANDS-ON PRATICE"
          title="FIELD EXPERIENCE"
          subtitle="Real-world internship engagements and industry-oriented practical assignments focused on cybersecurity workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/10 dark:bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900">
                    {exp.domain}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-black text-neutral-900 dark:text-white mb-1">
                  {exp.organization}
                </h3>
                <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300 mb-4">
                  {exp.role} <span className="text-neutral-400">|</span> <span className="text-xs font-normal text-neutral-500">{exp.period}</span>
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Editable note disclaimer for integrity */}
              <div className="pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-start gap-2 text-xs font-mono text-neutral-400">
                <Edit3 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{exp.editableNotes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
