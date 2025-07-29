// src/hooks/use-scroll.ts
'use client';

import { useEffect, useState } from 'react';
import { throttle } from '@/lib/utils';

interface UseScrollReturn {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isScrolled: boolean;
  scrollPercentage: number;
}

export function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollInfo = throttle(() => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((currentScrollY / docHeight) * 100);

      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setIsScrolled(currentScrollY > 10);
      setScrollPercentage(isNaN(percentage) ? 0 : percentage);

      lastScrollY = currentScrollY;
    }, 10);

    window.addEventListener('scroll', updateScrollInfo, { passive: true });
    updateScrollInfo(); // Set initial values

    return () => window.removeEventListener('scroll', updateScrollInfo);
  }, []);

  return { scrollY, scrollDirection, isScrolled, scrollPercentage };
}