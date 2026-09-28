import type { EducationItem } from '../types';

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'btech-it',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'P P Savani University (PPSU)',
    location: 'Surat, Gujarat, India',
    duration: '2025 — 2028',
    status: 'ongoing',
    statusLabel: 'Currently Pursuing',
    description: 'Undergraduate engineering studies focused on core computer science, software engineering principles, web systems, and algorithmic problem solving.',
    highlights: [
      'Data Structures & Algorithms in Java',
      'Database Management Systems (DBMS) & MySQL',
      'Web Technologies & Full-Stack Development Concepts',
      'Object-Oriented Programming (OOP) Systems',
    ],
  },
  {
    id: 'diploma-ce',
    degree: 'Diploma in Computer Engineering',
    field: 'Computer Engineering',
    duration: '2022 — 2025',
    status: 'completed',
    statusLabel: 'Completed',
    description: 'Rigorous 3-year technical foundation in computer hardware, programming fundamentals, web basics, and software design principles.',
    highlights: [
      'Programming Fundamentals (C, Java, Scripting)',
      'Computer Architecture & Operating Systems',
      'Relational Database Basics & Web Design',
      'Applied Engineering Laboratory Practice',
    ],
  },
];
