import type {
  JourneyMilestone,
  ProjectItem,
  SkillCategory,
  SocialLink,
  StudentInfo,
} from '../types';

export const studentData: StudentInfo = {
  name: 'Jonny Ficky',
  role: 'Information Systems Student',
  university: 'Universitas Putra Indonesia YPTK Padang',
  major: 'Information Systems',
  nobp: '23101152610508',
  tagline: 'A personal space for projects, learning, and digital craft.',
  avatarUrl: '/profil.jpeg',
  bioIntro:
    'I\'m Jonny Ficky, an Information Systems student at Universitas Putra Indonesia YPTK Padang. This portfolio showcases my publicly available projects and reflects my growth as a developer.',
  academicDetails: [
    { label: 'University', value: 'Universitas Putra Indonesia YPTK Padang' },
    { label: 'Major', value: 'Information Systems' },
    { label: 'NOBP', value: '23101152610508' },
  ],
};

// Individual project descriptions (replacing generic unverified placeholder)

export const projectsData: ProjectItem[] = [
  {
    id: 'lifeflow',
    title: 'LifeFlow',
    category: 'Featured project',
    description:
      'A Progressive Web App (PWA) for daily habit and activity tracking. Built with React and Firebase, it supports offline usage and delivers a smooth, app-like experience on any device.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'Firebase'],
    status: 'Active Development',
    isFeatured: true,
    githubUrl: 'https://github.com/jonnyficky2/LifeFlow',
    liveUrl: 'https://jonnyficky2.github.io/LifeFlow/',
  },
  {
    id: 'restaurant-landing-sistem',
    title: 'Restaurant Landing System',
    category: 'Public repository',
    description:
      'A restaurant landing page system built with TypeScript. Displays menu items, restaurant information, and an intuitive layout designed to attract customers online.',
    techStack: ['TypeScript'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/Restaurant-landing-sistem',
    liveUrl: 'https://jonnyficky2.github.io/Restaurant-landing-sistem/',
  },
  {
    id: 'smart-warung-pos-persentation',
    title: 'Smart Warung POS — Presentation',
    category: 'Public repository',
    description:
      'An interactive HTML presentation for a Smart Warung Point-of-Sale system proposal, created as part of a Software Engineering course assignment.',
    techStack: ['HTML'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/Smart-warung-POS-persentation',
    liveUrl: 'https://jonnyficky2.github.io/Smart-warung-POS-persentation/',
  },
  {
    id: 'pos',
    title: 'POS',
    category: 'Public repository',
    description:
      'A web-based Point of Sale application for small businesses. Handles product listings, transaction flow, and basic sales management in a simple, browser-accessible interface.',
    techStack: ['HTML'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/POS',
    liveUrl: 'https://pos-one-umber.vercel.app/',
  },
  {
    id: 'ci3-crud',
    title: 'CI3 CRUD',
    category: 'Public repository',
    description:
      'A CRUD application built with CodeIgniter 3 and PHP, demonstrating fundamental Create, Read, Update, and Delete operations with a MySQL database backend.',
    techStack: ['PHP'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/CI3_CRUD',
  },
  {
    id: 'ci3-layout-dinamis',
    title: 'CI3 Dynamic Layout',
    category: 'Public repository',
    description:
      'A CodeIgniter 3 project showcasing a dynamic layout system using PHP templates. Demonstrates modular view composition and reusable layout components.',
    techStack: ['PHP'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/CI3_Layout_Dinamis',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Portfolio stack',
    description: 'Tools configured for this portfolio project.',
    iconName: 'Code2',
    skills: [
      { name: 'React', context: 'UI library used by this portfolio' },
      { name: 'TypeScript', context: 'Primary language for this portfolio' },
      { name: 'Vite', context: 'Development server and build tool' },
      { name: 'Tailwind CSS', context: 'Styling framework configured for this project' },
      { name: 'Framer Motion', context: 'Animation library configured for this project' },
      { name: 'Lucide React', context: 'Icon library configured for this project' },
    ],
  },
  {
    title: 'Repository languages',
    description: 'Primary languages reported by the verified public repositories.',
    iconName: 'Terminal',
    skills: [
      { name: 'TypeScript', context: 'Restaurant Landing System repository' },
      { name: 'HTML', context: 'POS and Smart Warung POS repositories' },
      { name: 'PHP', context: 'CI3 CRUD and CI3 Dynamic Layout repositories' },
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: 'Education',
    title: 'Information Systems',
    institutionOrContext: 'Universitas Putra Indonesia YPTK Padang',
    description: 'Undergraduate student in the Information Systems program.',
    technologies: [],
    iconType: 'academic',
  },
  {
    period: 'Projects',
    title: 'Projects on GitHub',
    institutionOrContext: 'github.com/jonnyficky2',
    description:
      'LifeFlow is featured as the flagship project. Other projects are listed based on information available in their public repositories.',
    technologies: ['LifeFlow', 'POS', 'CI3_CRUD', 'Restaurant Landing System'],
    iconType: 'project',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    value: 'github.com/jonnyficky2',
    url: 'https://github.com/jonnyficky2',
    icon: 'Github',
  },
  {
    label: 'Email',
    value: 'jonnyficky2@gmail.com',
    url: 'mailto:jonnyficky2@gmail.com',
    icon: 'Mail',
    isPlaceholder: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jonnyfickyfelyang',
    url: 'https://www.linkedin.com/in/jonnyfickyfelyang',
    icon: 'Linkedin',
    isPlaceholder: false,
  },
];
