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
    title: 'Dog Memory Game',
    description: 'A memory card matching game with dog images, built as a group project for my Frontend Development course in Spring 2025. Features three difficulty levels, timed challenges, and card flip animations.',
    techStack: ['React', 'Vite', 'Tailwind', 'Dog CEO API'],
    githubUrl: 'https://github.com/Garla-mantix/dog-memory',
    liveUrl: 'https://dog-memory.vercel.app/',
    imageUrl: '/dog-memory.png',
  },
];
