import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Newton Yrkeshögskola',
    role: 'Systemutvecklare .NET',
    period: '2025 - Present',
    description: 'Studying .NET Software Development with focus on clean architecture and full-stack development.',
    highlights: [
      'Building full-stack applications with C# and Blazor',
      'Working with SQLite and Entity Framework Core for database management',
      'Implementing REST APIs and microservices',
    ],
  },
  {
    id: '2',
    company: 'Harvard University (Online)',
    role: 'CS50x: Introduction to Computer Science',
    period: '2024 - 2025',
    description: 'Comprehensive introduction to computer science and programming concepts.',
    highlights: [
      'Learning C, Python, JavaScript and SQL',
      'Understanding algorithms and data structures',
      'Developing problem-solving mentality and creating projects',
    ],
  },
    {
    id: '3',
    company: 'Sundgårdens folkhögskola',
    role: 'Frontend Developer',
    period: '2025 - 2025',
    description: 'Intensive course in frontend development focusing on HTML, CSS, and JavaScript.',
    highlights: [
      'Building responsive web pages with modern frameworks and libraries like React and Tailwind CSS',
      'Collaborating on projects using version control with Git and GitHub',
      'Implementing best practices for web accessibility and performance optimization',
    ],
  },
    {
    id: '4',
    company: 'Me, myself and I',
    role: 'Homelab project',
    period: '2025 - 2025',
    description: 'Setting up and managing a personal homelab environment for learning and experimentation.',
    highlights: [
      'Repurposing old hardware to create a utilitarian linux server',
      'Self-hosting services such as Pi-hole, Portainer and Plex',
      'Learning about networking, docker containers, and system administration',
    ],
  },
];
