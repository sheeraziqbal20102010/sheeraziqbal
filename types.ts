import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  year: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  category: 'Student' | 'Personal' | 'Curriculum';
}

export interface Course {
  id: string;
  title: string;
  level: string;
  description: string;
  topics: string[];
  studentsEnrolled?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}