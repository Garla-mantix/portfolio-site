import type { Skill } from '../types';
import {
  SiBlazor,
  SiDotnet,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiGit,
  SiSqlite,
  SiLinux,
  SiDocker,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscTerminalBash } from 'react-icons/vsc';

export const skills: Skill[] = [
  {
    name: 'C#',
    category: 'language',
    color: '#9b4dca',
    icon: <TbBrandCSharp className="w-full h-full" />,
  },
  {
    name: 'Blazor',
    category: 'framework',
    color: '#9b4dca',
    icon: <SiBlazor className="w-full h-full" />,
  },
  {
    name: 'ASP.NET Core',
    category: 'framework',
    color: '#9b4dca',
    icon: <SiDotnet className="w-full h-full" />,
  },
  {
    name: 'JavaScript',
    category: 'language',
    color: '#f7df1e',
    icon: <SiJavascript className="w-full h-full" />,
  },
  {
    name: 'Python',
    category: 'language',
    color: '#3776ab',
    icon: <SiPython className="w-full h-full" />,
  },
  {
    name: 'HTML',
    category: 'language',
    color: '#e34f26',
    icon: <SiHtml5 className="w-full h-full" />,
  },
  {
    name: 'CSS',
    category: 'language',
    color: '#3b9fd8',
    icon: <SiCss3 className="w-full h-full" />,
  },
  {
    name: 'React',
    category: 'framework',
    color: '#61dafb',
    icon: <SiReact className="w-full h-full" />,
  },
  {
    name: 'Tailwind',
    category: 'framework',
    color: '#38bdf8',
    icon: <SiTailwindcss className="w-full h-full" />,
  },
  {
    name: 'Bootstrap',
    category: 'framework',
    color: '#a855f7',
    icon: <SiBootstrap className="w-full h-full" />,
  },
  {
    name: 'Sass',
    category: 'language',
    color: '#cc6699',
    icon: <SiSass className="w-full h-full" />,
  },
  {
    name: 'Git',
    category: 'utility',
    color: '#f05032',
    icon: <SiGit className="w-full h-full" />,
  },
  {
    name: 'SQLite',
    category: 'utility',
    color: '#4db6e5',
    icon: <SiSqlite className="w-full h-full" />,
  },
  {
    name: 'Entity Framework',
    category: 'framework',
    color: '#9b4dca',
    icon: <SiDotnet className="w-full h-full" />,
  },
  {
    name: 'Linux',
    category: 'utility',
    color: '#fcc624',
    icon: <SiLinux className="w-full h-full" />,
  },
  {
    name: 'Docker',
    category: 'utility',
    color: '#2496ed',
    icon: <SiDocker className="w-full h-full" />,
  },
  {
    name: 'Claude Code',
    category: 'utility',
    color: '#f59e0b',
    icon: <VscTerminalBash className="w-full h-full" />,
  },
];

export const skillCategories = {
  language: 'Languages',
  framework: 'Frameworks',
  utility: 'Utilities',
};
