// Core domain types for the portfolio. Every field here is meant to be
// filled exclusively from the source CV — no invented data.

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  location: string;
}

export interface ProfileSummary {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  status: string; // e.g. "Available for backend / .NET roles"
  social: SocialLinks;
}

export interface SkillItem {
  name: string;
  detail?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  impact: string;
  achievements: string[];
  technologies: string[];
}

export interface TrainingHighlight {
  label: string;
  value: string;
}

export interface TrainingEntry {
  id: string;
  program: string;
  issuer: string;
  duration: string;
  description: string;
  highlights: TrainingHighlight[];
  relatedProjectId?: string;
}

export type ProjectSize = 'flagship' | 'major' | 'standard';

export interface ProjectEntry {
  id: string;
  name: string;
  tagline: string;
  size: ProjectSize;
  duration: string;
  githubUrl?: string;
  overview: string;
  businessProblem: string;
  responsibilities: string[];
  engineeringProblems: string[];
  architecture: string[];
  technologies: string[];
  implementationDetails: string[];
  lessonsLearned: string[];
  hasScreenshotPlaceholder: boolean;
  hasArchitectureDiagramPlaceholder: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'education' | 'military' | 'project' | 'training' | 'award' | 'work' | 'freelance';
}

export interface AwardEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  major: string;
  duration: string;
  gpa?: string;
}
