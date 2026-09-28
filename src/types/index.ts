export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isClientProject: boolean;
  description: string;
  workflowNote: string;
  technologies: string[];
  liveUrl: string;
  isPrivateRepo: boolean;
  previewGradient: string;
}

export type SkillLevel = 'core' | 'academic' | 'learning' | 'tool' | 'foundation';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  period: string;
  description: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  location?: string;
  duration: string;
  status: 'ongoing' | 'completed';
  statusLabel: string;
  description?: string;
  highlights: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  category: string;
  description: string;
  topics: string[];
}

export interface SocialLinkItem {
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'instagram' | 'mail';
  ariaLabel: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  botcheck: boolean;
}

export type FormSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
