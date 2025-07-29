// src/components/ui/theme-toggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'button' | 'tabs';
}

export function ThemeToggle({ className, variant = 'button' }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={cn('h-10 w-10 animate-pulse rounded-lg bg-muted', className)} />
    );
  }

  if (variant === 'tabs') {
    return (
      <div className={cn('inline-flex items-center rounded-xl bg-muted p-1', className)}>
        {[
          { value: 'light', icon: Sun, label: 'Light' },
          { value: 'system', icon: Monitor, label: 'System' },
          { value: 'dark', icon: Moon, label: 'Dark' },
        ].map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value as any)}
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-all duration-200',
              theme === value
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
            )}
            title={label}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn('h-10 w-10 transition-colors duration-200', className)}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}