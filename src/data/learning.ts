import type { LearningItem } from '../types';

export const LEARNING_ITEMS: LearningItem[] = [
  {
    id: 'mern-stack',
    title: 'MERN Full-Stack Development',
    category: 'Full-Stack Architecture',
    description: 'Building end-to-end web applications with MongoDB, Express.js, React, and Node.js, including REST API design, state management, and authentication.',
    topics: ['Node.js & Express.js', 'MongoDB Schema Design', 'React State Management', 'REST API Architecture'],
  },
  {
    id: 'java-dsa',
    title: 'Advanced Java & Data Structures',
    category: 'Computer Science & Algorithms',
    description: 'Deepening algorithmic problem-solving capabilities in Java, focusing on time/space complexity optimization, recursion, dynamic programming, and graph algorithms.',
    topics: ['Time & Space Complexity', 'Trees & Graphs', 'Recursion & Dynamic Programming', 'Algorithmic Optimization'],
  },
  {
    id: 'modern-software-eng',
    title: 'Software Engineering Best Practices',
    category: 'Engineering Craftsmanship',
    description: 'Exploring clean code architectures, modular design patterns, version control workflows, automated testing foundations, and scalable web performance.',
    topics: ['Clean Architecture & DRY', 'Modular Component Design', 'Git Branching & PR Workflows', 'Web Performance Optimization'],
  },
];
