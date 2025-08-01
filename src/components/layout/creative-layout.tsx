// src/components/layout/creative-layout.tsx
'use client';

import * as React from 'react';
import { FloatingNavCreative } from './floating-nav-creative';
import { ScrollProgress } from './scroll-progress';
import { FloatingSocials } from './floating-socials';
import { ModeSwitcher } from './mode-switcher';
import { Footer } from './footer';

interface CreativeLayoutProps {
  children: React.ReactNode;
}

export function CreativeLayout({ children }: CreativeLayoutProps) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen overflow-x-hidden transition-colors duration-300">
      <ScrollProgress />
      <FloatingNavCreative />
      <FloatingSocials />
      <ModeSwitcher />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}