import type {
  JourneyMilestone,
  ProjectItem,
  SkillCategory,
  SocialLink,
  StudentInfo,
} from '../types';

export const studentData: StudentInfo = {
  name: 'Jonny Ficky',
  role: 'Mahasiswa Sistem Informasi',
  university: 'Universitas Putra Indonesia YPTK Padang',
  major: 'Sistem Informasi',
  nobp: '23101152610508',
  tagline: 'A personal space for projects, learning, and digital craft.',
  bioIntro:
    'Saya Jonny Ficky, mahasiswa Sistem Informasi di Universitas Putra Indonesia YPTK Padang. Portfolio ini merangkum proyek-proyek yang tersedia secara publik dan perkembangan karya digital saya.',
  academicDetails: [
    { label: 'Universitas', value: 'Universitas Putra Indonesia YPTK Padang' },
    { label: 'Program Studi', value: 'Sistem Informasi' },
    { label: 'NOBP', value: '23101152610508' },
  ],
};

const unverifiedProjectDetails =
  'Repositori GitHub publik. Detail fitur dan status penyelesaian belum diverifikasi.';

export const projectsData: ProjectItem[] = [
  {
    id: 'lifeflow',
    title: 'LifeFlow',
    category: 'Featured project',
    description: 'Simple Daily Tracker app with PWA features.',
    techStack: [],
    status: 'Active Development',
    isFeatured: true,
    githubUrl: 'https://github.com/jonnyficky2/LifeFlow',
    liveUrl: 'https://jonnyficky2.github.io/LifeFlow/',
  },
  {
    id: 'restaurant-landing-sistem',
    title: 'Restaurant-landing-sistem',
    category: 'Public repository',
    description: unverifiedProjectDetails,
    techStack: ['TypeScript'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/Restaurant-landing-sistem',
    liveUrl: 'https://jonnyficky2.github.io/Restaurant-landing-sistem/',
  },
  {
    id: 'smart-warung-pos-persentation',
    title: 'Smart-warung-POS-persentation',
    category: 'Public repository',
    description: 'Presentation for software engineering.',
    techStack: ['HTML'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/Smart-warung-POS-persentation',
    liveUrl: 'https://jonnyficky2.github.io/Smart-warung-POS-persentation/',
  },
  {
    id: 'pos',
    title: 'POS',
    category: 'Public repository',
    description: 'Point Of Sale.',
    techStack: ['HTML'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/POS',
    liveUrl: 'https://pos-one-umber.vercel.app/',
  },
  {
    id: 'ci3-crud',
    title: 'CI3_CRUD',
    category: 'Public repository',
    description: unverifiedProjectDetails,
    techStack: ['PHP'],
    status: 'Awaiting Verification',
    githubUrl: 'https://github.com/jonnyficky2/CI3_CRUD',
  },
  {
    id: 'ci3-layout-dinamis',
    title: 'CI3_Layout_Dinamis',
    category: 'Public repository',
    description: unverifiedProjectDetails,
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
      { name: 'TypeScript', context: 'Language used by this portfolio' },
      { name: 'Vite', context: 'Development server and build tool' },
      { name: 'Tailwind CSS', context: 'Styling framework configured for this project' },
      { name: 'Framer Motion', context: 'Motion library configured for this project' },
      { name: 'Lucide React', context: 'Icon library configured for this project' },
    ],
  },
  {
    title: 'Repository languages',
    description: 'Primary languages reported by the verified public repositories.',
    iconName: 'Terminal',
    skills: [
      { name: 'TypeScript', context: 'Restaurant-landing-sistem repository' },
      { name: 'HTML', context: 'POS and Smart-warung-POS-persentation repositories' },
      { name: 'PHP', context: 'CI3_CRUD and CI3_Layout_Dinamis repositories' },
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: 'Pendidikan',
    title: 'Sistem Informasi',
    institutionOrContext: 'Universitas Putra Indonesia YPTK Padang',
    description: 'Mahasiswa Program Studi Sistem Informasi.',
    technologies: [],
    iconType: 'academic',
  },
  {
    period: 'Proyek',
    title: 'Proyek di GitHub',
    institutionOrContext: 'github.com/jonnyficky2',
    description:
      'LifeFlow ditampilkan sebagai proyek unggulan. Detail proyek lain mengikuti informasi yang tersedia pada repositori publiknya.',
    technologies: ['LifeFlow', 'POS', 'CI3_CRUD', 'Restaurant-landing-sistem'],
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
