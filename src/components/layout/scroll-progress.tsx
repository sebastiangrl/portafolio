// src/components/layout/scroll-progress.tsx
'use client';

import * as React from 'react';

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  React.useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / docHeight) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateScrollPercentage);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateScrollPercentage(); // Initial call

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div 
        className="h-full bg-gradient-to-r from-crimson to-red-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}