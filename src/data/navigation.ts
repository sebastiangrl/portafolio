// src/data/navigation.ts
export interface NavigationItem {
  key: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { key: 'navigation.home', href: '#hero' },
  { key: 'navigation.about', href: '#about' },
  { key: 'navigation.experience', href: '#experience' },
  { key: 'navigation.projects', href: '#projects' },
  { key: 'navigation.skills', href: '#skills' },
  { key: 'navigation.contact', href: '#contact' },
];

export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: 'Github',
    username: '@tu-usuario',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: 'Linkedin',
    username: '/in/tu-perfil',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: 'Twitter',
    username: '@tu-usuario',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/tu-usuario',
    icon: 'Instagram',
    username: '@tu-usuario',
  },
];