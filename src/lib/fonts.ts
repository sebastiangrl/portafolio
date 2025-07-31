// src/lib/fonts.ts
import { Inter, Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';

// Fuente principal del sistema
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

// Fuente monospace para código
export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  preload: false,
});

// Usar Inter como display font también
export const displayFont = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  weight: ['600', '700', '800'],
});

// Fuente local Filena-SemiBold
export const filena = localFont({
  src: '../../public/fonts/Filena-SemiBold.ttf',
  variable: '--font-filena',
  display: 'swap',
  preload: true,
});

// Exportar todas las variables CSS
export const fontVariables = `${inter.variable} ${firaCode.variable} ${displayFont.variable} ${filena.variable}`;