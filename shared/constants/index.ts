// Shared constants between backend and frontend

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    PROFILE: '/auth/profile',
  },
  USERS: '/users',
  DOCUMENTS: '/documents',
  SKILLS: '/skills',
  TRAINING: '/training',
  QUALITY: '/quality',
  TOOLS: '/tools',
  ANALYTICS: '/analytics',
  SEARCH: '/search',
  NOTIFICATIONS: '/notifications',
} as const;

export const USER_ROLES = {
  DASSAULT_ADMIN: 'DASSAULT_ADMIN',
  DASSAULT_USER: 'DASSAULT_USER',
  TATA_ADMIN: 'TATA_ADMIN',
  TATA_USER: 'TATA_USER',
} as const;

export const COUNTRIES = {
  FR: 'FR',
  IN: 'IN',
} as const;

export const LANGUAGES = {
  FR: 'fr',
  EN: 'en',
} as const;
