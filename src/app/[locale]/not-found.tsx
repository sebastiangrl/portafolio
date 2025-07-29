// src/app/[locale]/not-found.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'es';
  
  const content = {
    es: {
      title: '404',
      subtitle: 'Página no encontrada',
      description: 'La página que buscas no existe o ha sido movida.',
      button: 'Volver al inicio'
    },
    en: {
      title: '404',
      subtitle: 'Page not found',
      description: 'The page you are looking for does not exist or has been moved.',
      button: 'Back to home'
    }
  };

  const t = content[locale as keyof typeof content] || content.es;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">{t.title}</h1>
        <h2 className="text-2xl font-semibold mb-4">{t.subtitle}</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          {t.description}
        </p>
        <Link 
          href={`/${locale}`}
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          {t.button}
        </Link>
      </div>
    </div>
  );
}