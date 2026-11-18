export interface StudentInfo {
  name: string;
  role: string;
  university: string;
  major: string;
  nobp: string;
  tagline: string;
  bioIntro: string;
  avatarUrl?: string;
  academicDetails: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  status: 'Active Development' | 'Awaiting Verification';
  isFeatured?: boolean;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    context: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institutionOrContext: string;
  description: string;
  technologies: string[];
  iconType: 'academic' | 'project' | 'skill';
}

export interface SocialLink {
  label: string;
  value: string;
  url?: string | null;
  icon: string;
  isPlaceholder?: boolean;
}
