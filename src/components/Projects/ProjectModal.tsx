import React from 'react';
import { ProjectItem } from '../../types';
import { soundEngine } from '../../utils/sound';
import { 
  X, 
  Github, 
  ExternalLink, 
  Download, 
  ShieldAlert, 
  CheckCircle2, 
  Layers,
  Code
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-600 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-mono font-bold uppercase">
            {project.category}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${
            project.isLabEnvironment
              ? 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/40'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
          }`}>
            {project.status}
          </span>
          {project.eventOrContext && (
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
              {project.eventOrContext}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-neutral-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {project.focus && (
          <p className="text-sm font-mono text-red-600 dark:text-red-400 font-bold mb-4">
            Focus: {project.focus}
          </p>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Lab Environment notice if applicable */}
        {project.isLabEnvironment && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-amber-900 dark:text-amber-200 text-xs">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-mono uppercase tracking-wider mb-0.5">LAB ENVIRONMENT CONTEXT</strong>
              Conducted strictly inside an isolated virtual lab environment for educational analysis, protocol hardening, and rate-limiting assessment.
            </div>
          </div>
        )}

        {/* Security Mechanism (e.g. for Shoulder Surfing APK) */}
        {project.securityMechanism && (
          <div className="mb-6 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <span className="text-xs font-mono font-bold text-neutral-900 dark:text-white uppercase block mb-1">
              SECURITY MECHANISM:
            </span>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              {project.securityMechanism}
            </p>
          </div>
        )}

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            KEY TECHNICAL ATTRIBUTES
          </h4>
          <div className="space-y-2">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5" />
            TECHNOLOGIES & TOOLS
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Editable Notes Field (Honest note section) */}
        {project.editableNotes && (
          <div className="mb-6 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-dashed border-neutral-300 dark:border-neutral-700 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {project.editableNotes}
          </div>
        )}

        {/* Actions / Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-xs font-mono font-bold transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB CODE</span>
            </a>
          )}

          {project.apkDownload && (
            <a
              href={project.apkDownload}
              onClick={(e) => {
                e.preventDefault();
                alert("Shoulder Surfing APK build archive repository available in project files.");
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>APK DOWNLOAD / DEMO</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-mono font-bold hover:bg-neutral-200 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
