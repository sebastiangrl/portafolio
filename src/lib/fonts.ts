// src/lib/fonts.ts
import { Inter, Fira_Code } from 'next/font/google';

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

// Exportar todas las variables CSS
export const fontVariables = `${inter.variable} ${firaCode.variable} ${displayFont.variable}`;