// src/components/layout/mode-switcher.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { scrollToElement } from '@/lib/utils';

export function ModeSwitcher() {
  const t = useTranslations('hero');
  const [currentMode, setCurrentMode] = React.useState<'illustration' | 'development'>('development');
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  // Mostrar el switcher solo después del hero
  React.useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        setIsVisible(scrollPosition > heroBottom - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar el cambio de modo y navegar
  const handleModeChange = (mode: 'illustration' | 'development') => {
    if (mode === currentMode || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentMode(mode);
    
    // Navegar a la sección correspondiente con un pequeño delay para suavizar la transición
    setTimeout(() => {
      if (mode === 'illustration') {
        scrollToElement('illustrations');
      } else {
        scrollToElement('development');
      }
      
      // Resetear el estado de transición después del scroll
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl p-1 border border-white/20 dark:border-gray-700/50 shadow-2xl">
        <motion.button
          onClick={() => handleModeChange('development')}
          disabled={isTransitioning}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
            currentMode === 'development' 
              ? 'bg-white text-gray-900 shadow-lg' 
              : 'text-gray-900 dark:text-white hover:bg-white/10'
          } ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
          whileHover={!isTransitioning ? { scale: 1.02 } : {}}
          whileTap={!isTransitioning ? { scale: 0.98 } : {}}
        >
          <Code2 className="w-4 h-4 mr-2 inline" />
          {t('modes.developer')}
        </motion.button>
        <motion.button
          onClick={() => handleModeChange('illustration')}
          disabled={isTransitioning}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
            currentMode === 'illustration' 
              ? 'bg-white text-gray-900 shadow-lg' 
              : 'text-gray-900 dark:text-white hover:bg-white/10'
          } ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
          whileHover={!isTransitioning ? { scale: 1.02 } : {}}
          whileTap={!isTransitioning ? { scale: 0.98 } : {}}
        >
          <Palette className="w-4 h-4 mr-2 inline" />
          {t('modes.illustrator')}
        </motion.button>
      </div>
    </motion.div>
  );
}
