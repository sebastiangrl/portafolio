// src/components/sections/about-dual.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Code2, Award, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function AboutDual() {
  const t = useTranslations('about');
  const [currentJourneyIndex, setCurrentJourneyIndex] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Updated journey data with translations
  const journeyData = [
    {
      year: '2015-2021',
      title: t('journey.items.university.title'),
      institution: t('journey.items.university.institution'),
      description: t('journey.items.university.description'),
      icon: GraduationCap,
      technologies: ['C++', 'Java', 'JavaScript', 'PHP', t('journey.items.university.technologies.4'), t('journey.items.university.technologies.5')]
    },
    {
      year: '2022',
      title: t('journey.items.diploma.title'),
      institution: t('journey.items.diploma.institution'),
      description: t('journey.items.diploma.description'),
      icon: Code2,
      technologies: ['Node.js', 'React Native', t('journey.items.diploma.technologies.2'), t('journey.items.diploma.technologies.3')]
    },
    {
      year: '2020-2024',
      title: t('journey.items.evolution.title'),
      institution: t('journey.items.evolution.institution'),
      description: t('journey.items.evolution.description'),
      icon: Award,
      technologies: ['WordPress', 'Next.js', 'Astro', 'Supabase', 'Tailwind CSS', 'TypeScript']
    },
    {
      year: '2024-Present',
      title: t('journey.items.current.title'),
      institution: t('journey.items.current.institution'),
      description: t('journey.items.current.description'),
      icon: Briefcase,
      technologies: ['React', 'Flutter', t('journey.items.current.technologies.2'), 'E-commerce', t('journey.items.current.technologies.4')]
    }
  ];

  // Auto-advance journey carousel (slower)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJourneyIndex((prev) => (prev + 1) % journeyData.length);
    }, 7000); // Changed from 4000 to 7000ms

    return () => clearInterval(interval);
  }, [journeyData.length]);

  const nextJourney = () => {
    setCurrentJourneyIndex((prev) => (prev + 1) % journeyData.length);
  };

  const prevJourney = () => {
    setCurrentJourneyIndex((prev) => (prev - 1 + journeyData.length) % journeyData.length);
  };

  return (
    <div className="section-primary">
      <div className="max-w-7xl mx-auto container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal dark:text-pearl mb-8 decoration-line">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle', { role: t('role') })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Enhanced Story with Read More */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-8">
              {t('story.title')}
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                {t('story.paragraphs.intro', { degree: t('story.degree') })}
              </p>
              
              <p>
                {t('story.paragraphs.education', { technologies: t('story.technologies') })}
              </p>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p>
                    {t('story.paragraphs.evolution', { duality: t('story.duality') })}
                  </p>

                  <p>
                    {t('story.paragraphs.experience', { 
                      years: t('story.years'), 
                      modern_tech: t('story.modern_tech') 
                    })}
                  </p>

                  <p>
                    {t('story.paragraphs.current', { writing: t('story.writing') })}
                  </p>
                </motion.div>
              )}
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200 text-[#760C0F] font-medium"
              >
                {isExpanded ? t('story.read_less') : t('story.read_more')}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2"
                >
                  ↓
                </motion.div>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Interactive Journey Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white">
                {t('journey.title')}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevJourney}
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={nextJourney}
                  className="p-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Journey Carousel */}
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentJourneyIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {(() => {
                    const item = journeyData[currentJourneyIndex];
                    const Icon = item.icon;
                    
                    return (
                      <div className="h-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-8">
                        {/* Icon and Year */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#760C0F] to-[#A31B1B] rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-white/20 dark:bg-black/20 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-[#760C0F] font-medium">
                            {item.institution}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Technologies */}
                          {item.technologies && (
                            <div className="pt-4">
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('journey.technologies_label')}</p>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech: string, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="text-xs bg-white/20 dark:bg-black/20 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {journeyData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentJourneyIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentJourneyIndex
                      ? 'bg-[#760C0F] w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}