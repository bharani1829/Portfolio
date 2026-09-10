export interface Project {
  id: string;
  number: string;
  category: 'College Workshop' | 'Python Application' | 'AI & Data Science' | 'Web Development';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100
    status?: 'Proficient' | 'Learning' | 'Basic';
    iconName: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date?: string;
  badgeColor: string;
  iconName: string;
  description: string;
  skillsLearned: string[];
  verifyUrl?: string;
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
  achievements: string[];
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  currentYear: string;
  cgpaFirstYear: string;
  highlights: string[];
}
