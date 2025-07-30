// src/components/creative/dev-showcase.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, Monitor, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mainProjects, additionalProjects, type WebProject } from '@/data/dev-projects';
import { useTranslations } from 'next-intl';

export function DevShowcase() {
  const t = useTranslations('projects');
  const [showAdditional, setShowAdditional] = React.useState(false);
  const [displayedProjects, setDisplayedProjects] = React.useState(mainProjects);

  const handleLoadMore = () => {
    if (!showAdditional) {
      setDisplayedProjects([...mainProjects, ...additionalProjects]);
      setShowAdditional(true);
    }
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-red-900/20 via-red-800/10 to-red-700/20 dark:from-red-900/30 dark:via-red-800/20 dark:to-red-700/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light !text-gray-900 dark:!text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Aplicaciones web modernas construidas con las últimas tecnologías. 
            Cada proyecto combina funcionalidad excepcional con diseño visual impactante.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Preview */}
                <div 
                  className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  {/* Main Preview */}
                  <div className="relative">
                    {/* Browser Frame */}
                    <div className="bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-t-xl p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded mx-3 px-3 py-1 border border-white/20 dark:border-white/10">
                          <span className="text-xs text-gray-700 dark:text-gray-300">{project.liveUrl}</span>
                        </div>
                      </div>
                    </div>

                    {/* Screen Content */}
                    <div className="relative aspect-[16/10] bg-black/20 dark:bg-white/10 backdrop-blur-md border-x border-b border-white/20 dark:border-white/10 rounded-b-xl overflow-hidden shadow-xl">
                      {/* Placeholder Content */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50/50 via-red-100/30 to-red-200/50 dark:from-red-900/20 dark:via-red-800/20 dark:to-red-700/20">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg">
                            <Monitor className="w-8 h-8 text-red-600 dark:text-red-400" />
                          </div>
                          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {project.category}
                          </p>
                        </div>
                      </div>

                      {/* Hover Effects */}
                      <motion.div
                        className="absolute inset-0 bg-red-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="flex space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver sitio
                            </a>
                          </Button>
                          {project.codeUrl && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
                              asChild
                            >
                              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Código
                              </a>
                            </Button>
                          )}
                        </div>
                      </motion.div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-4 right-4 bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-lg px-3 py-1"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                          {project.year}
                        </span>
                      </motion.div>
                    </div>

                    {/* Mobile Preview */}
                    <motion.div
                      className="absolute -bottom-6 -right-6 w-20 h-36 bg-black/40 dark:bg-white/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-1 shadow-xl"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-gradient-to-b from-red-400/50 to-red-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Category & Year */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-1 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                      <Code2 className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Características principales
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300"
                        >
                          <Zap className="w-3 h-3 text-red-600 dark:text-red-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Stack tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          className="px-2 py-1 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Resultados
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-lg">
                          <div className="text-base font-bold text-red-600 dark:text-red-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace('_', ' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className={`flex flex-col sm:flex-row gap-3 ${!project.codeUrl ? 'sm:flex-col' : ''}`}>
                    <Button
                      className={`bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-red-500/50 ${
                        !project.codeUrl ? 'w-full' : 'flex-1'
                      }`}
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver proyecto
                      </a>
                    </Button>
                    
                    {project.codeUrl && (
                      <Button 
                        variant="outline" 
                        className="flex-1 border-red-600/50 text-red-600 hover:bg-red-50 dark:border-red-400/50 dark:text-red-400 dark:hover:bg-red-900/20" 
                        asChild
                      >
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Ver código
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Client */}
                  {project.client && (
                    <div className="pt-4 border-t border-red-200/50 dark:border-red-700/50">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cliente: <span className="font-medium text-gray-900 dark:text-white">{project.client}</span>
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {!showAdditional && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleLoadMore}
              className="bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-black/30 dark:hover:bg-white/20 px-6 py-2"
              size="default"
            >
              <ChevronDown className="w-4 h-4 mr-2" />
              Cargar más proyectos
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
