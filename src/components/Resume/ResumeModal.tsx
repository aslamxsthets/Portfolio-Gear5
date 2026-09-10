import React from 'react';
import { profileData, educationTimeline } from '../../data/profile';
import { skillsData } from '../../data/skills';
import { projectsData } from '../../data/projects';
import { researchData } from '../../data/research';
import { certificationsData } from '../../data/certifications';
import { soundEngine } from '../../utils/sound';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundEngine.playClick();
    window.print();
  };

  const handleDownloadText = () => {
    soundEngine.playClick();
    const resumeText = `
============================================================
                    ASLAM JAVEED M
  PRE-FINAL YEAR STUDENT CUM DFIR ENTHUSIAST
============================================================
Email: ${profileData.email}
Phone: ${profileData.phone}
Location: ${profileData.location}
LinkedIn: ${profileData.linkedin}
GitHub: ${profileData.github}

SUMMARY:
${profileData.summary}

EDUCATION:
- Manakula Vinayagar Institute of Technology (2024 - 2028 Expected)
  B.Tech Computer Science and Engineering (IoT & Cybersecurity including Blockchain Technology)
- Petit Seminaire Higher Secondary School (2022 - 2024)
  SSLC / Higher Secondary (Biology - Mathematics)

CORE FOCUS AREAS:
Digital Forensics, Incident Response, Network Security, Evidence Analysis, Threat Investigation, Security Analysis.

PROJECT HIGHLIGHTS:
- OWASP Juice Shop: Top 10 Security Vulnerabilities
- End-to-End Secure File Sharing System
- SOC Log Analysis Using Splunk
- Shoulder Surfing Protection APK (Mobile Security)
- Network Traffic Analysis Using Wireshark
- AI-Powered Forensic Chatbot for Secure UFDR Analysis (Smart India Hackathon)
- SPECTRE (MSME Context) & LUMEN Anomaly Detection

PUBLICATIONS & RESEARCH:
- FLORATUNE (ICISML 2026)
- Modular ML Framework for Real-Time Network Anomaly Detection (ICoICI 2025)
- AR-Based Regional Language Support (MedNext 2025, AICTE-VAANI)
- Tata's Green Revolution (SDG-15)
- Smart Health Monitoring System (SindhanAI'25)
- Mathematics in the Tamil Sangam Period (Krishcon'25)

KEY CERTIFICATIONS:
- Cisco: Junior Cybersecurity Analyst Career Path
- Cisco: Introduction to Cybersecurity & Operating Systems Basics
- Cisco: Python Essentials 1 & Exploring IoT with Packet Tracer
- Cisco: Network Defense (In Progress)
- NPTEL: Ethical Hacking (In Progress)
============================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ASLAM_JAVEED_M_DFIR_RESUME.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-neutral-950 border-2 border-neutral-900 dark:border-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (non-printable) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              CURRICULUM VITAE PREVIEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-mono font-bold hover:bg-neutral-800"
              title="Print to PDF or paper printer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 text-white text-xs font-mono font-bold hover:bg-red-700"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD TXT</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-neutral-900 dark:text-neutral-100 font-sans text-sm">
          {/* Header */}
          <div className="border-b-2 border-neutral-900 dark:border-neutral-700 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-heading font-black tracking-tight uppercase text-neutral-950 dark:text-white">
                  {profileData.name}
                </h1>
                <p className="text-sm sm:text-base font-mono font-bold text-red-600 dark:text-red-400 mt-1">
                  {profileData.titles[0]}
                </p>
                <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                  {profileData.primaryIdentity} • {profileData.primaryFocus}
                </p>
              </div>

              {/* Coordinates */}
              <div className="text-xs font-mono space-y-1 text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-red-600" />
                  <span>linkedin.com/in/aj49</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {profileData.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-4">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {educationTimeline.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="font-heading font-bold text-base text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                      {edu.degree} — <span className="font-mono text-red-600 dark:text-red-400">{edu.specialization}</span>
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">{edu.highlights}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 shrink-0 font-semibold">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core DFIR & Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              TECHNICAL COMPETENCIES & TOOLING
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="block font-mono text-neutral-800 dark:text-neutral-200 mb-1">
                  DIGITAL FORENSICS & TRIAGE:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Evidence Analysis, Disk & File Analysis, Log Investigation, Timeline Reconstruction, Windows & Linux Forensics, UFDR Analysis, Autopsy, VeraCrypt.
                </p>
              </div>
              <div>
                <strong className="block font-mono text-neutral-800 dark:text-neutral-200 mb-1">
                  INCIDENT RESPONSE & DEFENSE:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Initial Triage, Threat Investigation, Containment & Mitigation, Security Alerts, Post-Incident Reporting, Basic Threat Hunting, Splunk SIEM.
                </p>
              </div>
              <div>
                <strong className="block font-mono text-neutral-800 dark:text-neutral-200 mb-1">
                  NETWORK & SECURITY TOOLS:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Wireshark, Nmap, Zenmap, Metasploit, Burp Suite, PE Explorer, Kali Linux, Ubuntu, Docker, Cisco Packet Tracer.
                </p>
              </div>
              <div>
                <strong className="block font-mono text-neutral-800 dark:text-neutral-200 mb-1">
                  PROGRAMMING & SYSTEMS:
                </strong>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Python Programming & Scripting, SQL, TensorFlow Fundamentals, Windows/Linux Internal Architectures, Mobile Security.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              RESEARCH ARCHIVES & PRESENTATIONS
            </h2>
            <div className="space-y-3">
              {researchData.slice(0, 5).map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
                    <span>{r.title}</span>
                    <span className="font-mono text-neutral-500 font-normal">{r.conferenceOrEvent} ({r.year})</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">{r.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              SELECTED PROJECT IMPLEMENTATIONS
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 5).map((p, i) => (
                <div key={i} className="text-xs">
                  <div className="flex items-center justify-between font-bold text-neutral-900 dark:text-white">
                    <span>{p.title}</span>
                    <span className="font-mono text-red-600 dark:text-red-400 font-normal">{p.category}</span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Footnote */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-red-600 dark:text-red-400 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-1 mb-3">
              CERTIFICATIONS
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {certificationsData.map((c, idx) => (
                <span key={idx} className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {c.title} ({c.issuer}) {c.status === 'IN PROGRESS' ? '[In Progress]' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
