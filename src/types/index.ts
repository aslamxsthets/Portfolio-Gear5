export type ProficiencyStatus = 'LEARNING' | 'PRACTICING' | 'COMFORTABLE' | 'ACTIVE FOCUS';

export interface ProfileData {
  name: string;
  titles: string[];
  primaryIdentity: string;
  primaryFocus: string;
  supportingLine: string;
  alternativeSupportingLine: string;
  university: string;
  degree: string;
  graduationYear: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  writingHandle: string;
  quote: string;
  languages: { language: string; proficiency: string; nativeName?: string }[];
  keyBadges: string[];
}

export type SkillCategory = 
  | 'DIGITAL FORENSICS'
  | 'INCIDENT RESPONSE'
  | 'NETWORK SECURITY'
  | 'SECURITY TOOLS'
  | 'PROGRAMMING & TECHNOLOGY'
  | 'SYSTEMS'
  | 'SOFT SKILLS';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  status: ProficiencyStatus;
  hakiType: 'Armament/Hardening' | 'Observation/Detection' | 'Conqueror/Awakening' | 'Flow/Analysis';
  description?: string;
  visualMetaphor?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  focus?: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Lab Environment' | 'Research Prototype';
  isLabEnvironment?: boolean;
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  apkDownload?: string;
  eventOrContext?: string;
  securityMechanism?: string;
  editableNotes?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  subtitle?: string;
  conferenceOrEvent: string;
  programOrOrg?: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  prize?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  category: string;
}

export interface EventItem {
  id: string;
  title: string;
  organization?: string;
  location?: string;
  category: string;
  isFeatured?: boolean;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  domain: string;
  role: string;
  period: string;
  description: string;
  editableNotes: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  category: string;
  badge: string;
  bountyRating: string;
  description: string;
}

export interface WritingItem {
  id: string;
  title: string;
  excerpt: string;
  fullText: string;
  date: string;
  theme: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
}
