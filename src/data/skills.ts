import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Go', category: 'language' },
  { name: 'Rust', category: 'language' },
  { name: 'SQL', category: 'language' },

  // Frameworks
  { name: 'React', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Express', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },

  // Tools
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'AWS', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Linux', category: 'tool' },
  { name: 'Figma', category: 'tool' },

  // Databases
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Prisma', category: 'database' },
];

export const skillCategories = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  database: 'Databases',
  other: 'Other',
};
