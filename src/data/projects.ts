import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, Stripe integration, and admin dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team analytics.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'tRPC', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with 7-day forecasts, interactive maps, and location-based alerts.',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '4',
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing, tagging, and sharing code snippets with syntax highlighting.',
    techStack: ['Vue.js', 'Firebase', 'Monaco Editor', 'Algolia'],
    githubUrl: 'https://github.com',
  },
];
