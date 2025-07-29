// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher más específico para evitar problemas
  matcher: [
    // Incluir todas las rutas excepto:
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};