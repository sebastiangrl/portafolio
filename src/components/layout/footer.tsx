// src/components/layout/footer.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,
  ArrowUp
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 bg-[#760C0F]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#760C0F]/5 rounded-full blur-xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12"
          >
            <div className="text-center">
              {/* Brand */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-filena font-semibold text-white mb-2">
                  Sebastián González
                </h3>
                <p className="text-base text-gray-300 font-medium mb-1">
                  {t('footer.role')}
                </p>
                <p className="text-[#A31B1B] font-medium">
                  {t('hero.title')}
                </p>
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-t border-white/10 pt-6"
              >
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0">
                  <p className="text-sm text-gray-400">
                    © {currentYear} Sebastián González. {t('footer.rights')}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <span>{t('footer.made_with')}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </motion.div>
                    <span>{t('footer.in_colombia')}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm ${
          !isVisible && "pointer-events-none"
        }`}
        aria-label={t('footer.scroll_to_top')}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}