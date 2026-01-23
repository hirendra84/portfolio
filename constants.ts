import { exp } from 'three/tsl';
import { Project, Gig, SkillNode } from './types';

export const RESUME_CONTENT = {
  skills: [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'] },
    { category: 'Backend & Databases', items: ['Java', 'SQL', 'Node.js (basic)'] },
    { category: 'Core CS', items: ['Data Structures (C) — linked lists, stacks, queues'] },
    { category: 'Digital Logic', items: ['Verilog — flip-flops, counters, decoders, multiplexers'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'AI-assisted development'] },
    { category: 'Other', items: ['Cybersecurity', 'Machine Learning (beginner)', 'Three.js (beginner)'] }
  ],

  education: [
    'Coursework: Data Structures (C), Object-Oriented Programming (Java), Digital Logic',
    'Practical projects: linked lists, Verilog modules, multi-camera smart-city prototype',
    'Self-directed learning: frontend development and React',
    'Applied AI tools for prototyping and code generation'
  ],

  results: [
    'Published research: AIMV 2025',
    'Deployed frontend demos using Three.js',
    'Delivered paid freelance gigs covering UI/UX and backend integrations',
    'Maintained working prototypes and documented technical design'
  ],

  projects: [
    {
      title: 'Multi-Camera Smart City System (AIMV 2025)',
      description: 'Published paper and prototype for multi-camera monitoring; contributed to system design, logic flow, and documentation.'
    },
    {
      title: 'Frontend Web Projects',
      description: 'Built responsive, animated websites with React and Tailwind; created UI components and interactive sections; used AI tools for rapid prototyping.'
    },
    {
      title: 'Digital Logic & Verilog',
      description: 'Designed and simulated counters, decoders, flip-flops, and MUX-based logic; performed testing and verification.'
    },
    {
      title: 'DSA Projects in C',
      description: 'Implemented singly & doubly linked lists, sorting, searching, stacks, and queues with attention to memory management and efficiency.'
    }
  ],

  experience: [
    'Freelance developer on Fiverr and direct contracts',
    'Delivered WordPress plugins, full-stack web applications, and AI-integrated automation solutions',
    'Handled client requirements, project scoping, and on-time delivery'
  ],

  interests: [
    'Cybersecurity',
    'Machine Learning',
    'Web Animation',
    'Cloud',
    'Startup Ideas',
    'UI/UX'
  ]
};

export const SKILLS: SkillNode[] = [
  { name: 'C/C++', level: 85, category: 'Language', years: 4 },
  { name: 'Python', level: 90, category: 'Language', years: 3 },
  { name: 'JavaScript', level: 95, category: 'Language', years: 5 },
  { name: 'React', level: 92, category: 'Frontend', years: 3 },
  { name: 'Three.js', level: 80, category: 'Frontend', years: 2 },
  { name: 'Node.js', level: 85, category: 'Backend', years: 3 },
  { name: 'SQL', level: 75, category: 'Backend', years: 2 },
  { name: 'Verilog', level: 70, category: 'System', years: 2 },
  { name: 'AI/LLMs', level: 88, category: 'AI', years: 2 },
  { name: 'Git', level: 90, category: 'System', years: 4 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart City Visualizer',
    description: 'Interactive 3D visualization of multi-camera smart-city data streams.',
    tags: ['Three.js', 'React', 'WebSockets', 'Python'],
    link: '#',
    role: 'Solo',
    isFeatured: true,
    aiNote: 'AI used to generate low-poly city assets and optimize geometry logic.',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'AI-Powered Code Assistant',
    description: 'A VS Code extension that suggests code snippets using local LLMs.',
    tags: ['TypeScript', 'Python', 'LLM', 'VS Code API'],
    link: '#',
    role: 'Team Lead',
    aiNote: 'Core logic prototyped via Gemini API then refined manually.',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'Verilog CPU Simulator',
    description: 'Web-based simulator for a custom 8-bit RISC processor design.',
    tags: ['React', 'Verilog', 'WASM'],
    link: '#',
    role: 'Solo',
    image: 'https://picsum.photos/600/400?random=3'
  }
];

export const GIGS: Gig[] = [
  {
    id: 'g1',
    title: 'WordPress Plugin Development',
    description: 'Custom plugins to extend WordPress functionality for your site.',
    price: '$10+',
    delivery: '5-7 Days',
    platform: 'Fiverr',
    link: 'https://fiverr.com'
  },
  {
    id: 'g2',
    title: 'Full Stack Web Application',
    description: 'End-to-end web app development with React frontend and Node.js backend.',
    price: '$100+',
    delivery: '5-6 Days',
    platform: 'Fiverr',
    link: 'https://www.fiverr.com/technull/create-responsive-fast-frontend-websites-using-react'
  },
  {
    id: 'g3',
    title: 'Automation with AI Integration',
    description: 'Connect your app to OpenAI/Gemini APIs for smart features.',
    price: '$150+',
    delivery: '3 Days',
    platform: 'Direct',
    link: 'mailto:contact@hirendra.dev'
  }
];

export const LINKS = {
  github: "https://github.com/hirendra84",
  linkedin: "https://www.linkedin.com/in/hirendra84ya/",
  fiverr: "https://fiverr.com",
  resume: "/resume.pdf"
};
