export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'frontend' | 'fullstack' | 'ui-ux';
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  completedDate: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A modern analytics dashboard for e-commerce platforms with real-time data visualization.',
    longDescription: 'A comprehensive analytics dashboard designed for e-commerce businesses. Features include real-time sales tracking, inventory management, customer analytics, and customizable reports. Built with performance and scalability in mind.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    completedDate: '2024-12',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management platform with real-time updates and team features.',
    longDescription: 'A full-featured task management application that enables teams to collaborate effectively. Includes real-time updates, drag-and-drop task organization, team workspaces, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    completedDate: '2024-11',
  },
  {
    id: '3',
    title: 'Finance Tracker',
    description: 'Personal finance management app with expense tracking and budget planning.',
    longDescription: 'A personal finance application that helps users track expenses, set budgets, and visualize spending patterns. Features include bank account integration, bill reminders, and financial goal setting.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    category: 'fullstack',
    technologies: ['React', 'Firebase', 'Chart.js', 'Material-UI', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    completedDate: '2024-10',
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Comprehensive UI component library with accessibility-first approach.',
    longDescription: 'A complete design system featuring reusable UI components built with accessibility as a priority. Includes documentation, design tokens, and Storybook integration for component visualization.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
    category: 'ui-ux',
    technologies: ['Figma', 'Storybook', 'React', 'TypeScript', 'CSS Modules'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    completedDate: '2024-09',
  },
  {
    id: '5',
    title: 'Social Media App',
    description: 'Modern social platform with real-time messaging and content sharing.',
    longDescription: 'A social media platform featuring real-time messaging, post creation with rich media support, user profiles, and content discovery. Built with modern web technologies for optimal performance.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    category: 'fullstack',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    completedDate: '2024-08',
  },
  {
    id: '6',
    title: 'Portfolio Template',
    description: 'Minimalist portfolio template for creative professionals.',
    longDescription: 'A clean and minimalist portfolio template designed for creative professionals. Features smooth animations, responsive design, and easy customization options.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    category: 'frontend',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    completedDate: '2024-07',
  },
  {
    id: '7',
    title: 'Weather Dashboard',
    description: 'Interactive weather application with forecasts and location tracking.',
    longDescription: 'A feature-rich weather application providing current conditions, 7-day forecasts, and severe weather alerts. Includes location-based services and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    category: 'frontend',
    technologies: ['React', 'OpenWeather API', 'Leaflet', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    completedDate: '2024-06',
  },
  {
    id: '8',
    title: 'Mobile Banking UI',
    description: 'Modern banking interface design with focus on user experience.',
    longDescription: 'A complete mobile banking interface design focusing on simplicity and security. Features include account management, transaction history, bill payments, and card controls.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    category: 'ui-ux',
    technologies: ['Figma', 'Principle', 'After Effects', 'Zeplin'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    completedDate: '2024-05',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};
