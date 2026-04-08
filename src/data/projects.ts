import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Overtime',
    description: 'A sports discussion forum built with Clean Architecture, as a group project for a course in Advanced Object Oriented Programming. Features user authentication with JWT, persistence via SQLite, filtering and pagination, admin panel and more. Deployed on Azure.',
    techStack: ['C#', 'ASP.NET Core Identity', 'Entity Framework Core', 'SQLite', 'Azure'],
    githubUrl: 'https://github.com/Garla-mantix/Overtime-Forum',
    liveUrl: 'https://overtime-forum-ghhyh8abe3ecdzev.swedencentral-01.azurewebsites.net/',
    imageUrl: '/overtime.png',
  },
  {
    id: '2',
    title: 'Bankster',
    description: 'A personal finance management web application built with Blazor and C#. Allows users to create accounts, make transactions, and view their financial data. Deployed on Azure.',
    techStack: ['C#', 'Blazor', 'Azure', 'HTML', 'CSS',],
    githubUrl: 'https://github.com/Garla-mantix/bankster',
    liveUrl: 'https://bankster-fnhvfzhub3bpcpe9.swedencentral-01.azurewebsites.net/',
    imageUrl: '/bankster.png',
  },
  {
    id: '3',
    title: 'Glamhouse Rec Website',
    description: 'Started as a project for CS50, for my friends DJ duo called Glamhouse. A simple website to showcase their music and events. Polished the frontend and responsiveness with Claude Code. Still a work in progress, that we will publish to a better domain when it is more complete.',
    techStack: ['Javascript', 'HTML', 'CSS', 'Bootstrap', 'Github Pages', 'Claude Code'],
    githubUrl: 'https://github.com/Garla-mantix/glamhouse',
    liveUrl: 'https://garla-mantix.github.io/glamhouse/index.html',
    imageUrl: '/glamhouse.png',
  },
  {
    id: '4',
    title: 'Dog Memory Game',
    description: 'A memory card matching game with dog images, built as a group project for a Frontend Development course in the Spring of 2025. Features three timed difficulty levels.',
    techStack: ['React', 'Vite', 'Tailwind', 'External API', 'Git/GitHub'],
    githubUrl: 'https://github.com/Garla-mantix/dog-memory',
    liveUrl: 'https://dog-memory.vercel.app/',
    imageUrl: '/dog-memory.png',
  },
];
