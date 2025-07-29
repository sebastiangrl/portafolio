// src/components/sections/work-selector.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Sparkles, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface WorkSelectorProps {
  onModeChange?: (mode: 'illustration' | 'development') => void;
}

export function WorkSelector({ onModeChange }: WorkSelectorProps) {
  const t = useTranslations();
  const [selectedMode, setSelectedMode] = React.useState<'illustration' | 'development'>('illustration');

  const handleModeChange = (mode: 'illustration' | 'development') => {
    setSelectedMode(mode);
    onModeChange?.(mode);
    
    // Scroll to the corresponding section
    const targetSection = mode === 'illustration' ? 'illustrations' : 'development';
    document.getElementById(targetSection)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const modes = [
    {
      id: 'illustration',
      title: 'Illustrations',
      subtitle: 'Arte Digital & Diseño',
      description: 'Mundos visuales que inspiran, desde character design hasta identidades de marca completas.',
      icon: Palette,
      accent: Sparkles,
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      bgGradient: 'from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20',
      stats: { projects: '15+', categories: '4', clients: '8+' }
    },
    {
      id: 'development',
      title: 'Development',
      subtitle: 'Código & Experiencias Web',
      description: 'Aplicaciones web modernas con tecnologías de vanguardia y diseño centrado en el usuario.',
      icon: Code2,
      accent: Zap,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20',
      stats: { projects: '20+', technologies: '10+', clients: '15+' }
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Mi Trabajo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explora mis proyectos en ilustración digital y desarrollo web. 
            Cada área refleja mi pasión por crear experiencias únicas.
          </p>
        </motion.div>

        {/* Mode Selector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            const AccentIcon = mode.accent;
            const isSelected = selectedMode === mode.id;
            
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => handleModeChange(mode.id as 'illustration' | 'development')}
              >
                {/* Card Container */}
                <motion.div
                  className={`relative h-96 rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                    isSelected 
                      ? 'border-transparent shadow-2xl scale-105' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl'
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mode.bgGradient} transition-opacity duration-500 ${
                    isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                  }`} />
                  
                  {/* Selected Border Effect */}
                  {isSelected && (
                    <motion.div
                      layoutId="selectedBorder"
                      className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} opacity-20 rounded-3xl`}
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}

                  {/* Floating Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className={`absolute top-8 right-8 w-20 h-20 bg-gradient-to-br ${mode.gradient} rounded-full opacity-30`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
                      }}
                    />
                    
                    <motion.div
                      className={`absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br ${mode.gradient} opacity-20`}
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -90, -180],
                      }}
                      transition={{
                        y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: 12, repeat: Infinity, ease: 'linear' }
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${mode.gradient} shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 12 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                          >
                            <AccentIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                          </motion.div>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {mode.title}
                      </h3>
                      
                      <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${mode.gradient} bg-clip-text text-transparent`}>
                        {mode.subtitle}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {mode.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      {Object.entries(mode.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-gray-900 dark:text-white">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mode.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Glow Effect */}
                {isSelected && (
                  <motion.div
                    layoutId="selectedGlow"
                    className={`absolute inset-0 bg-gradient-to-r ${mode.gradient} opacity-20 blur-xl rounded-3xl -z-10`}
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {selectedMode === 'illustration' 
              ? 'Descubre cómo transformo ideas en arte digital cautivador'
              : 'Explora aplicaciones web modernas con tecnología de vanguardia'
            }
          </p>
          
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50"
            animate={{
              boxShadow: selectedMode === 'illustration' 
                ? '0 8px 32px rgba(168, 85, 247, 0.3)'
                : '0 8px 32px rgba(59, 130, 246, 0.3)',
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {selectedMode === 'illustration' ? (
                <Sparkles className="w-4 h-4 text-purple-600" />
              ) : (
                <Zap className="w-4 h-4 text-blue-600" />
              )}
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Modo {selectedMode === 'illustration' ? 'Creativo' : 'Técnico'} Activado
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}