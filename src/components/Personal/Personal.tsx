import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { hobbiesData } from '../../data/personal';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import { 
  Book, 
  Headphones, 
  Target, 
  Zap, 
  Flame, 
  Sprout, 
  Gamepad2, 
  Film,
  Languages as LanguagesIcon,
  HeartHandshake
} from 'lucide-react';

export const Personal: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Book: <Book className="w-5 h-5 text-red-600" />,
    Headphones: <Headphones className="w-5 h-5 text-red-600" />,
    Target: <Target className="w-5 h-5 text-red-600" />,
    Zap: <Zap className="w-5 h-5 text-red-600" />,
    Flame: <Flame className="w-5 h-5 text-red-600" />,
    Sprout: <Sprout className="w-5 h-5 text-red-600" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-red-600" />,
    Film: <Film className="w-5 h-5 text-red-600" />
  };

  return (
    <section id="personal" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 11"
          badge="PERSONALITY & PASSIONS"
          title="BEYOND THE TERMINAL"
          subtitle="Life outside the command line—athletic pursuits, literary interests, and creative outlets that replenish focus and keep curiosity sharp."
        />

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              onMouseEnter={() => soundEngine.playWhoosh()}
              className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {iconMap[hobby.iconName] || <Zap className="w-5 h-5 text-red-600" />}
                </div>

                <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-bold uppercase tracking-wider block mb-1">
                  {hobby.category}
                </span>

                <h3 className="font-heading font-black text-lg text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-2">
                  {hobby.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Subsection */}
        <div className="rounded-3xl p-6 sm:p-8 bg-neutral-100/80 dark:bg-neutral-800/80 border-2 border-neutral-900 dark:border-neutral-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <LanguagesIcon className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-heading font-black text-neutral-900 dark:text-white">
                LANGUAGES KNOWN
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              COMMUNICATION & VOCABULARY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.languages.map((lang, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex items-center justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-black text-lg text-neutral-900 dark:text-white">
                      {lang.language}
                    </h4>
                    {lang.nativeName && (
                      <span className="text-xs font-bold text-red-600 dark:text-red-400 font-mono">
                        ({lang.nativeName})
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {lang.proficiency}
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
