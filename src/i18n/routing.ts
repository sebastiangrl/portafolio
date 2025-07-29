// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Lista de locales soportados
  locales: ['es', 'en'],
  
  // Locale por defecto
  defaultLocale: 'es',
  
  // Configuración de prefijos
  localePrefix: 'as-needed' // Solo agrega prefijo cuando no es el idioma por defecto
});

// Tipos para TypeScript
export type Locale = typeof routing.locales[number];