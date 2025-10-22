// Shared TypeScript types between backend and frontend

export enum UserRole {
  DASSAULT_ADMIN = 'DASSAULT_ADMIN',
  DASSAULT_USER = 'DASSAULT_USER',
  TATA_ADMIN = 'TATA_ADMIN',
  TATA_USER = 'TATA_USER',
}

export enum Country {
  FR = 'FR',
  IN = 'IN',
}

export enum Language {
  fr = 'fr',
  en = 'en',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  country: Country;
  language: Language;
  department?: string;
  certificationLevel: number;
  avatarUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}

export interface LoginResponse {
  access_token: string;
  user: Omit<User, 'createdAt' | 'updatedAt'>;
}

export interface Document {
  id: string;
  code: string;
  titleFr: string;
  titleEn: string;
  descriptionFr?: string;
  descriptionEn?: string;
  type: string;
  status: string;
  version: string;
  section?: string;
  tags: string[];
  fileUrl: string;
  thumbnailUrl?: string;
  model3dUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  category: string;
  difficulty: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: number;
  commonErrors: string[];
  bestPractices: string[];
  tags: string[];
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}
