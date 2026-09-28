import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Languages',
    badge: 'Core',
    skills: [
      { name: 'Java', level: 'core' },
      { name: 'JavaScript (ES6+)', level: 'core' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'UI & Layout',
    skills: [
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3', level: 'core' },
      { name: 'Bootstrap', level: 'core' },
      { name: 'Responsive Web Design', level: 'core' },
    ],
  },
  {
    id: 'backend-databases',
    title: 'Backend & Databases',
    badge: 'Data & APIs',
    skills: [
      { name: 'MySQL', level: 'core' },
      { name: 'MongoDB', level: 'learning' },
      { name: 'Firebase', level: 'learning' },
      { name: 'Node.js', level: 'learning' },
      { name: 'Express.js', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    badge: 'Environment',
    skills: [
      { name: 'Git', level: 'tool' },
      { name: 'GitHub', level: 'tool' },
      { name: 'Visual Studio Code', level: 'tool' },
      { name: 'Antigravity IDE', level: 'tool' },
      { name: 'AI-Assisted Workflow', level: 'tool' },
    ],
  },
  {
    id: 'cs-foundations',
    title: 'Computer Science Core',
    badge: 'Foundations',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'foundation' },
      { name: 'Object-Oriented Programming (OOP)', level: 'foundation' },
      { name: 'Problem Solving', level: 'foundation' },
    ],
  },
];
