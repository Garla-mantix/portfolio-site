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
    title: 'Glamhouse Rec Website',
    description: 'Started as a project for CS50, for my friends DJ duo called Glamhouse. A simple website to showcase their music and events. Polished the frontend and responsiveness with Claude Code. Still a work in progress, that we will publish to a better domain when it is more complete.',
    techStack: ['Javascript', 'HTML', 'CSS', 'Bootstrap', 'Claude Code'],
    githubUrl: 'https://github.com/Garla-mantix/glamhouse',
    liveUrl: 'https://garla-mantix.github.io/glamhouse/index.html',
    imageUrl: '/glamhouse.png',
  },
  {
    id: '3',
    title: 'Dog Memory Game',
    description: 'A memory card matching game with dog images, built as a group project for my Frontend Development course in the Spring of 2025. Features three difficulty levels, timed challenges, and card flip animations.',
    techStack: ['React', 'Vite', 'Tailwind', 'Dog CEO API', 'Git/GitHub'],
    githubUrl: 'https://github.com/Garla-mantix/dog-memory',
    liveUrl: 'https://dog-memory.vercel.app/',
    imageUrl: '/dog-memory.png',
  },
];
