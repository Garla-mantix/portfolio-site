import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bankster',
    description: 'A personal finance management web application built with Blazor and C#. Allows users to create accounts, make transactions, and view their financial data in a user-friendly interface. Deployed on Azure.',
    techStack: ['C#', 'Blazor', 'Azure', 'HTML', 'CSS',],
    githubUrl: 'https://github.com/Garla-mantix/bankster',
    liveUrl: 'https://bankster-fnhvfzhub3bpcpe9.swedencentral-01.azurewebsites.net/',
    imageUrl: '/bankster.png',
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
