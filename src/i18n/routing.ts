// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Lista de locales soportados
  locales: ['es', 'en'],
  
  // Locale por defecto (español)
  defaultLocale: 'es',
  
  // Configuración de prefijos - solo mostrar cuando NO es el idioma por defecto
  localePrefix: 'as-needed', // '/' será español, '/en' será inglés
  
  // Configuración adicional para detección automática
  localeDetection: true
});

// Tipos para TypeScript
export type Locale = typeof routing.locales[number];