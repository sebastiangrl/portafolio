// src/components/layout/floating-nav-creative.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, User, Mail, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { cn, scrollToElement } from '@/lib/utils';

const navigation = [
  { key: 'Work', href: '#work-selector', icon: Palette },
  { key: 'Illustrations', href: '#illustrations', icon: Palette },
  { key: 'Development', href: '#development', icon: Code },
  { key: 'Process', href: '#process', icon: User },
  { key: 'Contact', href: '#contact', icon: Mail },
];

export function FloatingNavCreative() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = React.useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href.substring(1));
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation siempre visible */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="glass-nav bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/20 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-red-600 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.key}</span>
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-700 pl-6">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Sebastián
              </span>
              <div className="flex items-center space-x-1">
                <ThemeToggle className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-white/50 dark:hover:bg-gray-800/50" />
                <LanguageSwitcher className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-white/50 dark:hover:bg-gray-800/50" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Sebastián
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden"
          >
            <div className="glass-nav bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.key}</span>
                    </button>
                  );
                })}
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex items-center space-x-3 px-4">
                    <ThemeToggle className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-white/50 dark:hover:bg-gray-800/50" />
                    <LanguageSwitcher className="text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-white/50 dark:hover:bg-gray-800/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
