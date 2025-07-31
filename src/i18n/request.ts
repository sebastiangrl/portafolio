// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // En Next.js 15, el parámetro se llama requestLocale
  const locale = await requestLocale;
  
  console.log('🌍 RequestLocale recibido:', locale);
  
  // Validar que el locale es soportado
  if (!locale || !routing.locales.includes(locale as any)) {
    console.log('❌ Locale no válido, usando default:', routing.defaultLocale);
    // En lugar de notFound(), usar el locale por defecto
    const validLocale = routing.defaultLocale;
    
    return {
      locale: validLocale,
      messages: (await import(`../../messages/${validLocale}.json`)).default,
      timeZone: 'America/Bogota',
      now: new Date(),
    };
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    console.log('✅ Mensajes cargados para:', locale);
    
    return {
      locale,
      messages,
      timeZone: 'America/Bogota',
      now: new Date(),
    };
  } catch (error) {
    console.log('❌ Error cargando mensajes, usando default:', error);
    const validLocale = routing.defaultLocale;
    
    return {
      locale: validLocale,
      messages: (await import(`../../messages/${validLocale}.json`)).default,
      timeZone: 'America/Bogota',
      now: new Date(),
    };
  }
});