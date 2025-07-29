// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher para incluir todas las rutas que necesitan internacionalización
  matcher: [
    // Incluir todas las rutas excepto archivos estáticos y API
    '/((?!api|_next|_vercel|.*\\..*|favicon.ico).*)',
    // Incluir la ruta raíz específicamente
    '/'
  ]
};