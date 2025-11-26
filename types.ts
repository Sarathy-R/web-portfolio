export interface Project {
  name: string;
  contributions: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string[];
  technologies?: string[];
  projects?: Project[];
}

export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ArticleItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  iconName: string; 
}