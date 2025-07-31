// src/components/layout/floating-nav-creative.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Mail, Menu, X, ChevronDown, Home, Feather, Edit, BookOpen, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { cn, scrollToElement } from '@/lib/utils';

const navigation = [
  { key: 'navigation.home', href: '/', icon: Home },
  { key: 'navigation.entrepreneurs', href: '/entrepreneurs', icon: Briefcase },
  { key: 'navigation.about', href: '#about', icon: Code },
  { key: 'navigation.contact', href: '#contact', icon: Mail },
];

const creativeDropdown = [
  { key: 'navigation.blog', href: '/blog', icon: Edit },
  { key: 'navigation.stories', href: '/stories', icon: BookOpen },
];

export function FloatingNavCreative() {
  const t = useTranslations();
  const pathname = usePathname();
  const [activeSection] = React.useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Si estamos en la página de emprendedores y hacemos clic en una sección anchor
      if (pathname === '/entrepreneurs') {
        // Ir a la página principal y luego hacer scroll a la sección
        window.location.href = `/${href}`;
      } else {
        // Estamos en la página principal, hacer scroll normal
        scrollToElement(href.substring(1));
        setIsMobileMenuOpen(false);
      }
    } else if (href.startsWith('/')) {
      // Navigate to separate page
      window.location.href = href;
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
                // Determinar si está activo basado en la URL actual
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : pathname === item.href || 
                    (item.href.startsWith('#') && activeSection === item.href.substring(1));
                
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center space-x-2 px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap",
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
              
              {/* Creative Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-white hover:bg-white/10 whitespace-nowrap">
                  <Feather className="w-4 h-4" />
                  <span>{t('navigation.creative')}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full mt-2 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-black/20 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl py-2 min-w-[150px]">
                    {creativeDropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.key}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-2 text-white hover:bg-white/10 transition-all duration-200 block"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{t(item.key)}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
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
                
                {/* Creative Dropdown Mobile */}
                <div className="space-y-1">
                  <div className="px-4 py-2 text-white/70 text-sm font-medium">
                    {t('navigation.creative')}
                  </div>
                  {creativeDropdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.key}
                        href={item.href}
                        className="w-full flex items-center space-x-3 px-6 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-sm"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{t(item.key)}</span>
                      </a>
                    );
                  })}
                </div>
                
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
