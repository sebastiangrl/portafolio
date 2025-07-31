// src/hooks/use-lang.ts
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export interface UseLangReturn {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
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
      // Con localePrefix 'as-needed', next-intl maneja automáticamente:
      // - Si newLocale es 'es' (por defecto), irá a '/'
      // - Si newLocale es 'en', irá a '/en'
      router.push(pathname, { locale: newLocale });
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