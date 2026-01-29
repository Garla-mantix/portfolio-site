import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Corp',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Leading frontend architecture and mentoring junior developers on a team building enterprise SaaS products.',
    highlights: [
      'Architected micro-frontend solution reducing build times by 60%',
      'Led migration from JavaScript to TypeScript across 200k+ LOC',
      'Mentored 5 junior developers through structured code reviews',
    ],
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Built and scaled core product features from MVP to 50k+ users.',
    highlights: [
      'Implemented real-time collaboration features using WebSockets',
      'Optimized database queries reducing p95 latency by 40%',
      'Designed and built RESTful APIs serving 1M+ requests/day',
    ],
  },
  {
    id: '3',
    company: 'Agency Co',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Delivered pixel-perfect web applications for diverse client portfolio.',
    highlights: [
      'Built 15+ responsive websites with modern CSS and animations',
      'Introduced component library reducing development time by 30%',
      'Collaborated with designers to establish design system standards',
    ],
  },
];
