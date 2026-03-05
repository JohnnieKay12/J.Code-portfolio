export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Building responsive, interactive, and performant user interfaces with modern technologies.',
    skills: [
      { name: 'React', icon: 'Code2', level: 95 },
      { name: 'TypeScript', icon: 'FileType', level: 90 },
      { name: 'Next.js', icon: 'Globe', level: 88 },
      { name: 'Tailwind CSS', icon: 'Palette', level: 92 },
      { name: 'Vue.js', icon: 'Layers', level: 75 },
      { name: 'Framer Motion', icon: 'Sparkles', level: 85 },
    ],
  },
  {
    title: 'Backend',
    description: 'Creating robust APIs and server-side solutions for scalable applications.',
    skills: [
      { name: 'Node.js', icon: 'Server', level: 88 },
      { name: 'Python', icon: 'Terminal', level: 80 },
      { name: 'Java', icon: 'Java', level: 70 },
      { name: 'MongoDB', icon: 'Database', level: 82 },
      { name: 'GraphQL', icon: 'Share2', level: 75 },
      { name: 'Redis', icon: 'Zap', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Streamlining development workflows and deployment processes.',
    skills: [
      { name: 'Git', icon: 'GitBranch', level: 90 },
      { name: 'Docker', icon: 'Container', level: 75 },
      { name: 'AWS', icon: 'Cloud', level: 72 },
      { name: 'CI/CD', icon: 'Repeat', level: 78 },
      { name: 'Figma', icon: 'Figma', level: 85 },
      { name: 'Vite', icon: 'Rocket', level: 88 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2023 - Present',
    description: 'Leading frontend development for enterprise SaaS products. Architecting scalable solutions and mentoring junior developers.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led migration from legacy codebase to modern React architecture',
      'Implemented comprehensive testing strategy with 90% coverage',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2021 - 2023',
    description: 'Developed full-stack applications for diverse clients using modern web technologies.',
    achievements: [
      'Built 15+ client projects with 100% on-time delivery',
      'Introduced TypeScript to the team, reducing bugs by 30%',
      'Created reusable component library used across projects',
    ],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2019 - 2021',
    description: 'Started my professional journey building responsive websites and learning modern frameworks.',
    achievements: [
      'Developed 20+ responsive websites for small businesses',
      'Mastered React and modern JavaScript ecosystem',
      'Contributed to open-source projects',
    ],
  },
];
