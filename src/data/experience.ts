import type { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'freelance-web-developer',
    role: 'Freelance Web Developer',
    type: 'Independent Client Delivery',
    period: '2023 — Present',
    description: 'Collaborating directly with business owners and organizations to understand their digital requirements, architect responsive web interfaces, and deliver live production websites.',
    deliverables: [
      {
        title: 'Requirement Translation & UI Scaffolding',
        description: 'Translating business ideas into functional, visually modern website layouts optimized for mobile and desktop screens.',
      },
      {
        title: 'AI-Assisted Engineering Workflow',
        description: 'Leveraging AI-augmented development tools to accelerate development speed, streamline layout iteration, and enhance code maintainability.',
      },
      {
        title: 'Deployment & Production Handover',
        description: 'Managing end-to-end deployment workflows on Vercel, configuring custom domains, and ensuring cross-browser performance.',
      },
    ],
    technologies: ['Client Consultation', 'Responsive Design', 'Vercel Deployment', 'HTML5/CSS3/JS', 'AI Workflow'],
  },
];
