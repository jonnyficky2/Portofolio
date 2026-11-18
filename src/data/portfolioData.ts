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
  avatarUrl: `${import.meta.env.BASE_URL}profil.jpeg`,
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
    title: 'Web Frontend',
    description: 'Modern user interface design and client-side web development.',
    iconName: 'Code2',
    skills: [
      { name: 'React', level: 'Intermediate', context: 'Component-driven UI, hooks, and state management' },
      { name: 'TypeScript', level: 'Proficient', context: 'Type-safe frontend development across projects' },
      { name: 'JavaScript (ES6+)', level: 'Proficient', context: 'Modern web scripting, async/await, DOM APIs' },
      { name: 'Tailwind CSS', level: 'Proficient', context: 'Utility-first responsive layouts and styling' },
      { name: 'HTML5 & CSS3', level: 'Advanced', context: 'Semantic markup, modern flexbox & CSS grid' },
      { name: 'Vite', level: 'Proficient', context: 'Fast development server and production bundler' },
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Server-side application logic, data modeling, and databases.',
    iconName: 'Database',
    skills: [
      { name: 'PHP', level: 'Intermediate', context: 'Server-side application logic and MVC patterns' },
      { name: 'MySQL', level: 'Intermediate', context: 'Relational schema design, normalization, and SQL queries' },
      { name: 'CodeIgniter 3', level: 'Intermediate', context: 'MVC framework, CRUD operations, dynamic layouts' },
      { name: 'Firebase', level: 'Intermediate', context: 'Authentication, Firestore realtime database, and PWA setup' },
      { name: 'RESTful APIs', level: 'Intermediate', context: 'API consumption, JSON serialization, and endpoints' },
    ],
  },
  {
    title: 'Tools & Environment',
    description: 'Essential workflow tools, version control, and developer utilities.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', context: 'Version control, branch workflows, and GitHub Pages' },
      { name: 'VS Code', level: 'Advanced', context: 'Primary development IDE with extensions and debugging' },
      { name: 'Figma', level: 'Intermediate', context: 'UI/UX prototyping, design wireframing, and layouts' },
      { name: 'Postman', level: 'Intermediate', context: 'API testing, request inspection, and debugging' },
      { name: 'npm / Node.js', level: 'Proficient', context: 'Package management and script execution' },
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: '2023',
    title: 'Enrolled in Information Systems & Web Fundamentals',
    institutionOrContext: 'Universitas Putra Indonesia YPTK Padang',
    description:
      'Started undergraduate studies in Information Systems. Began learning core programming concepts, database modeling fundamentals, and web markup using semantic HTML and CSS.',
    technologies: ['HTML5', 'CSS3', 'Algorithms', 'Database Fundamentals'],
    iconType: 'academic',
  },
  {
    period: 'Early 2024',
    title: 'Backend Foundations with PHP & CodeIgniter 3',
    institutionOrContext: 'Academic Coursework & Personal Labs',
    description:
      'Deepened understanding of MVC architecture through database-driven web applications. Built CRUD systems, dynamic templating layouts, and Point-of-Sale prototypes using PHP and MySQL.',
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'Bootstrap'],
    iconType: 'project',
  },
  {
    period: 'Mid 2024',
    title: 'Adopting Modern Frontend & TypeScript',
    institutionOrContext: 'Self-Directed Exploration',
    description:
      'Transitioned to modern component-based UI engineering. Adopted TypeScript for strict type safety, building responsive web solutions including the Restaurant Landing System.',
    technologies: ['TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'],
    iconType: 'skill',
  },
  {
    period: 'Late 2024',
    title: 'Developing LifeFlow — PWA Habit Tracker',
    institutionOrContext: 'Featured Open Source Project',
    description:
      'Architected and built LifeFlow, a Progressive Web App (PWA) with React and Firebase. Integrated offline-first capabilities, habit tracking state workflows, and modern UI design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'Firebase'],
    iconType: 'project',
  },
  {
    period: '2024 — Present',
    title: 'Continuous Learning & Full-Stack Craft',
    institutionOrContext: 'Professional Growth & Portfolio',
    description:
      'Actively developing production-ready web apps while pursuing Information Systems degree. Focusing on modern web ecosystems, performance optimization, and interactive interfaces.',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'REST APIs', 'Git'],
    iconType: 'academic',
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
