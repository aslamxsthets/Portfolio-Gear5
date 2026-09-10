import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { ProjectModal } from './ProjectModal';
import { soundEngine } from '../../utils/sound';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ShieldAlert, 
  Terminal,
  Search,
  CheckCircle2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'DFIR & Forensics', 'Network Security', 'Ethical Hacking', 'AI & Systems', 'Mobile'];

  const filterMapping = (cat: string, project: ProjectItem) => {
    if (cat === 'ALL') return true;
    if (cat === 'DFIR & Forensics') {
      return project.category.toLowerCase().includes('forensic') || project.title.toLowerCase().includes('veracrypt');
    }
    if (cat === 'Network Security') {
      return project.category.toLowerCase().includes('network') || project.title.toLowerCase().includes('wireshark') || project.title.toLowerCase().includes('port');
    }
    if (cat === 'Ethical Hacking') {
      return project.category.toLowerCase().includes('ethical') || project.category.toLowerCase().includes('web security') || project.title.toLowerCase().includes('juice') || project.title.toLowerCase().includes('metasploit');
    }
    if (cat === 'AI & Systems') {
      return project.category.toLowerCase().includes('ai') || project.category.toLowerCase().includes('soc') || project.title.toLowerCase().includes('spectre') || project.title.toLowerCase().includes('lumen');
    }
    if (cat === 'Mobile') {
      return project.category.toLowerCase().includes('mobile') || project.title.toLowerCase().includes('apk');
    }
    return true;
  };

  const filteredProjects = projectsData.filter((p) => filterMapping(activeFilter, p));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative bg-[#faf9f6]/80 dark:bg-neutral-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 04"
          badge="SECURITY BUILDS"
          title="MY CREATIONS"
          subtitle="A showcase of applied cybersecurity projects, digital forensic workflows, ethical penetration testing labs, and privacy engineering tools."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEngine.playWhoosh();
                setActiveFilter(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md scale-105'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-red-600 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Manga Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative rounded-3xl p-6 bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => {
                soundEngine.playWhoosh();
                setSelectedProject(project);
              }}
            >
              {/* Halftone pattern on hover */}
              <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

              {/* Red Manga Energy accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-200 dark:bg-neutral-800 group-hover:bg-red-600 transition-colors" />

              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {project.category.split('/')[0]}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                    project.isLabEnvironment
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {project.isLabEnvironment ? 'LAB ENVIRONMENT' : project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-black text-xl text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                {project.focus && (
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3 font-semibold">
                    ✦ {project.focus}
                  </p>
                )}

                {/* Description Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-neutral-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action CTA */}
                <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-900 dark:text-white group-hover:text-red-600 pt-1">
                  <span>EXPAND SPECIFICATION</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
