import React from 'react';

interface SectionHeadingProps {
  chapter?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  chapter,
  title,
  subtitle,
  badge,
  align = 'center'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Chapter / Badge indicator with cloud styling */}
      <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xs text-xs font-mono tracking-wider font-semibold ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
        <span className="text-red-600 dark:text-red-400 uppercase">
          {chapter || 'LOGBOOK'}
        </span>
        {badge && (
          <>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700 dark:text-neutral-300">{badge}</span>
          </>
        )}
      </div>

      {/* Main Heading with Cinzel font and ink styling */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-neutral-900 dark:text-neutral-50 relative inline-block">
        {title}
        {/* Subtle red accent line */}
        <span className="block h-1 w-16 bg-red-600 rounded-full mt-2 transition-all duration-300 group-hover:w-full mx-auto" />
      </h2>

      {subtitle && (
        <p className={`mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
