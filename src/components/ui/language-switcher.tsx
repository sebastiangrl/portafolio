// src/components/ui/language-switcher.tsx
'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useLang } from '@/hooks/use-lang';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'button' | 'tabs';
}

export function LanguageSwitcher({ className, variant = 'button' }: LanguageSwitcherProps) {
  const { locale, setLocale, isPending, otherLocale } = useLang();

  const languages = {
    es: { label: 'ES', name: 'Español' },
    en: { label: 'EN', name: 'English' },
  };

  if (variant === 'tabs') {
    return (
      <div className={cn('inline-flex items-center rounded-xl bg-muted p-1', className)}>
        {Object.entries(languages).map(([code, { label, name }]) => (
          <button
            key={code}
            onClick={() => setLocale(code)}
            disabled={isPending}
            className={cn(
              'inline-flex h-8 px-3 items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50',
              locale === code
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
            )}
            title={name}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLocale(otherLocale)}
      disabled={isPending}
      className={cn('h-10 w-10 transition-colors duration-200', className)}
    >
      <Languages className="h-5 w-5" />
      <span className="sr-only">
        {locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      </span>
    </Button>
  );
}