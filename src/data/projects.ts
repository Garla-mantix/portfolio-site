import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion and a typing game.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/lumacone',
  },
  {
    id: '2',
    title: 'Homelab',
    description: 'Self-hosted services for my home network. Learning Linux, bash scripting, networking, Docker, and Kubernetes through hands-on practice.',
    techStack: ['Linux', 'Docker', 'Bash', 'Networking'],
  },
  {
    id: '3',
    title: 'CS50 Projects',
    description: 'Collection of projects completed during Harvard\'s CS50 course, covering fundamentals of computer science and programming.',
    techStack: ['C', 'Python', 'SQL', 'JavaScript'],
  },
];
