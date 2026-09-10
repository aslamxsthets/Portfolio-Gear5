import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsData, skillCategories } from '../../data/skills';
import { SkillCategory, ProficiencyStatus } from '../../types';
import { HakiVisualizer } from './HakiVisualizer';
import { soundEngine } from '../../utils/sound';
import { Shield, CheckCircle, Search, Filter } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const statusColors: Record<ProficiencyStatus, { bg: string; text: string; border: string }> = {
    'ACTIVE FOCUS': {
      bg: 'bg-red-500/10 dark:bg-red-500/20',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-600'
    },
    'COMFORTABLE': {
      bg: 'bg-neutral-900/10 dark:bg-white/10',
      text: 'text-neutral-900 dark:text-white',
      border: 'border-neutral-900 dark:border-white'
    },
    'PRACTICING': {
      bg: 'bg-blue-500/10 dark:bg-blue-500/20',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-500'
    },
    'LEARNING': {
      bg: 'bg-amber-500/10 dark:bg-amber-500/20',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500'
    }
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 03"
          badge="CAPABILITIES & ARSENAL"
          title="CYBERSECURITY SKILLS"
          subtitle="Honest, realistic competency mapping organized across foundational DFIR, active security tooling, infrastructure systems, and analytical methodologies."
        />

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 overflow-x-auto py-1">
            <button
              onClick={() => {
                soundEngine.playWhoosh();
                setActiveCategory('ALL');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                activeCategory === 'ALL'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-red-500 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              ALL ({skillsData.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEngine.playWhoosh();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-red-500 border border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-xs font-mono text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-red-600"
            />
          </div>
        </div>

        {/* Legend for Proficiency Categories */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8 p-3 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs font-mono">
          <span className="text-neutral-500 font-bold uppercase flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            STATUS GUIDE:
          </span>
          {(['ACTIVE FOCUS', 'COMFORTABLE', 'PRACTICING', 'LEARNING'] as ProficiencyStatus[]).map((status) => (
            <div key={status} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${statusColors[status].bg} border ${statusColors[status].border}`} />
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">{status}</span>
            </div>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const style = statusColors[skill.status];
            return (
              <div
                key={index}
                className="group relative p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-500 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-neutral-400 font-semibold uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase border ${style.bg} ${style.text} ${style.border}`}>
                      {skill.status}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {skill.name}
                  </h3>

                  {skill.description && (
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>

                {skill.visualMetaphor && (
                  <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-medium">
                      <Shield className="w-3 h-3" />
                      <span>{skill.visualMetaphor}</span>
                    </span>
                    <span className="text-[10px] text-neutral-400">{skill.hakiType.split('/')[0]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Haki Skill Visualization Metaphor Engine */}
        <HakiVisualizer />
      </div>
    </section>
  );
};
