// src/components/sections/hero-creative.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Palette, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

export function HeroCreative() {
  const [currentMode, setCurrentMode] = React.useState<'illustration' | 'development'>('illustration');

  // Alternar entre modos cada 4 segundos
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMode(prev => prev === 'illustration' ? 'development' : 'illustration');
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Más sutil y elegante */}
      <div className="absolute inset-0">
        {/* Unified Background con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />

        {/* Elementos decorativos minimalistas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formas geométricas sutiles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-red-500/5 dark:bg-red-500/10"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-xl bg-gray-500/5 dark:bg-gray-500/10 rotate-45"
            animate={{
              y: [0, 15, 0],
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Mode Indicator - Más sutil */}
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm mb-12"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.div
              animate={{
                rotate: currentMode === 'illustration' ? 0 : 180,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {currentMode === 'illustration' ? (
                <Palette className="w-5 h-5 text-red-600" />
              ) : (
                <Code2 className="w-5 h-5 text-gray-600" />
              )}
            </motion.div>
            
            <motion.span
              className="text-sm font-medium text-gray-900 dark:text-white"
              key={currentMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {currentMode === 'illustration' ? 'Illustrator Mode' : 'Developer Mode'}
            </motion.span>
          </motion.div>

          {/* Main Title - Más elegante */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white mb-8 tracking-tight"
            animate={{
              backgroundImage: currentMode === 'illustration' 
                ? 'linear-gradient(135deg, #dc2626, #6b7280)'
                : 'linear-gradient(135deg, #6b7280, #dc2626)',
            }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            Sebastián
          </motion.h1>
          
          {/* Dynamic Subtitle - Usando colores estándar */}
          <div className="h-20 mb-12">
            <motion.div
              key={currentMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
            >
              {currentMode === 'illustration' ? (
                <span className="bg-gradient-to-r from-red-600 to-gray-600 bg-clip-text text-transparent">
                  Digital Illustrator
                </span>
              ) : (
                <span className="bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              )}
            </motion.div>
            
            <motion.p
              key={`${currentMode}-subtitle`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              {currentMode === 'illustration' 
                ? 'Creando mundos visuales que inspiran y conectan emociones'
                : 'Construyendo experiencias web excepcionales con código limpio y elegante'
              }
            </motion.p>
          </div>

          {/* Dynamic Skills Tags */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {(currentMode === 'illustration' 
              ? ['Illustrator', 'Photoshop', 'Character Design', 'Digital Art']
              : ['Next.js', 'React', 'TypeScript', 'WordPress']
            ).map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-700/50"
                >
                  {skill}
                </motion.span>
              ))
            }
          </motion.div>

          {/* CTA Buttons - Con colores estándar */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              onClick={() => scrollToElement('work-selector')}
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explorar Mi Trabajo
            </Button>
            
            <Button
              variant="outline"
              onClick={() => scrollToElement('contact')}
              className="px-8 py-4 rounded-xl font-medium border-2 border-gray-300 hover:border-red-500 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-red-500 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Colaboremos
            </Button>
          </motion.div>

          {/* Social Links - Con colores estándar */}
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              { icon: Mail, href: 'mailto:tu-email@ejemplo.com', label: 'Email' },
              { icon: Github, href: 'https://github.com/tu-usuario', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tu-perfil', label: 'LinkedIn' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-red-600 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Con colores estándar */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => scrollToElement('work-selector')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-500 hover:text-red-600 transition-colors duration-300 transform hover:-translate-y-1"
      >
        <span className="text-sm font-light">Descubre mi trabajo</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </div>
  );
}
