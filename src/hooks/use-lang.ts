// src/hooks/use-lang.ts
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export interface UseLangReturn {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, values?: Record<string, any>) => string;
  isPending: boolean;
  otherLocale: string;
}

export function useLang(): UseLangReturn {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations();

  const setLocale = (newLocale: string) => {
    startTransition(() => {
      // Remover el locale actual del pathname si existe
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
      const newPath = newLocale === 'es' 
        ? pathWithoutLocale || '/' 
        : `/${newLocale}${pathWithoutLocale || '/'}`;
      
      router.push(newPath);
    });
  };

  const otherLocale = locale === 'es' ? 'en' : 'es';

  return {
    locale,
    setLocale,
    t,
    isPending,
    otherLocale,
  };
}