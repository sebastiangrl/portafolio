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
  { key: 'navigation.work', href: '#work-selector', icon: Palette },
  { key: 'navigation.illustrations', href: '#illustrations', icon: Palette },
  { key: 'navigation.development', href: '#development', icon: Code },
  { key: 'navigation.process', href: '#process', icon: User },
  { key: 'navigation.contact', href: '#contact', icon: Mail },
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
        <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-white text-gray-900 shadow-lg"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t(item.key)}</span>
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-3 border-l border-white/20 pl-6">
              <div className="flex items-center space-x-2">
                <ThemeToggle className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm" />
                <LanguageSwitcher className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
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
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{t(item.key)}</span>
                    </button>
                  );
                })}
                
                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="flex items-center space-x-3 px-4">
                    <ThemeToggle className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm" />
                    <LanguageSwitcher className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white transition-all duration-300 backdrop-blur-sm" />
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
