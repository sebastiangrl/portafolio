// src/components/sections/about-dual.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Palette, MapPin, Calendar, Award, Coffee } from 'lucide-react';
import { useTranslations } from 'next-intl';

type JourneyType = 'education' | 'work' | 'achievement';

interface JourneyItem {
  year: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  type: JourneyType;
}

const journey: JourneyItem[] = [
  {
    year: '2015-2021',
    title: 'Ingeniería en Multimedia',
    institution: 'Universidad de San Buenaventura',
    location: 'Medellín, Colombia',
    description: 'Formación integral en desarrollo web, diseño UX/UI y tecnologías multimedia.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2020',
    title: 'Inicio como Freelance',
    institution: 'Primer cliente',
    location: 'Pereira, Colombia',
    description: 'Primeros proyectos combinando ilustración digital y desarrollo web.',
    icon: Palette,
    type: 'work'
  },
  {
    year: '2022',
    title: 'Especialización Web',
    institution: 'Universidad de Caldas',
    location: 'Manizales, Colombia',
    description: 'Diplomado en desarrollo de aplicaciones web modernas.',
    icon: Code2,
    type: 'education'
  },
  {
    year: '2024',
    title: 'Multimedia Engineer',
    institution: '35+ proyectos completados',
    location: 'Colombia & Internacional',
    description: 'Consolidación como especialista en proyectos que combinan arte y tecnología.',
    icon: Award,
    type: 'achievement'
  }
];

const skills = {
  creative: [
    { name: 'Digital Illustration', level: 95, years: 4 },
    { name: 'Character Design', level: 90, years: 3 },
    { name: 'Brand Identity', level: 85, years: 3 },
    { name: 'UI/UX Design', level: 88, years: 4 }
  ],
  technical: [
    { name: 'Next.js', level: 95, years: 3 },
    { name: 'React', level: 95, years: 4 },
    { name: 'TypeScript', level: 90, years: 2 },
    { name: 'WordPress', level: 95, years: 4 }
  ]
};

const interests = [
  { icon: '🎮', name: 'Gaming', description: 'Inspiración para character design' },
  { icon: '📚', name: 'Sci-Fi', description: 'Futurismo y tecnología' },
  { icon: '🎵', name: 'Electronic Music', description: 'Creatividad y focus' },
  { icon: '☕', name: 'Coffee', description: 'Combustible para crear' },
  { icon: '🏔️', name: 'Mountains', description: 'Conexión con la naturaleza' },
  { icon: '📱', name: 'Tech Trends', description: 'Siempre aprendiendo' }
];

export function AboutDual() {
  const t = useTranslations();
  const [activeSkillSet, setActiveSkillSet] = React.useState<'creative' | 'technical'>('creative');

  return (
    <div className="section-padding-large">
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
            Acerca de Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Soy un <span className="text-red-600 font-semibold">Multimedia Engineer</span> que vive en la intersección 
            entre el arte y la tecnología. Mi pasión es crear experiencias digitales que no solo funcionen perfectamente, 
            sino que también inspiren y conecten con las personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Mi Historia
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Todo comenzó con una fascinación por los mundos digitales y la capacidad del arte 
                para contar historias. Durante mis estudios en <strong>Ingeniería Multimedia</strong>, 
                descubrí que podía combinar mi amor por el diseño con habilidades técnicas sólidas.
              </p>
              
              <p>
                Lo que me diferencia es mi <span className="text-crimson font-semibold">dualidad</span>: 
                puedo conceptualizar y diseñar una ilustración por la mañana, y por la tarde escribir 
                el código que la integre en una aplicación web responsive y optimizada.
              </p>
              
              <p>
                Cada proyecto es una oportunidad para explorar esta intersección entre creatividad 
                y tecnología, creando soluciones que no solo son visualmente impactantes, sino 
                también técnicamente excepcionales.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-5 h-5 text-crimson" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Pereira, Risaralda - Colombia
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-700 dark:text-gray-300">
                  Disponible para proyectos internacionales
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Mi Camino
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-8">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  const colors = {
                    education: 'from-blue-500 to-cyan-500',
                    work: 'from-purple-500 to-pink-500',
                    achievement: 'from-green-500 to-emerald-500'
                  };

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex items-start space-x-4"
                    >
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colors[item.type]} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-crimson font-medium text-sm mb-1">
                            {item.institution}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {item.location}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
              Skills Duales
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              La combinación perfecta entre creatividad y tecnología
            </p>

            {/* Skill Set Selector */}
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setActiveSkillSet('creative')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSkillSet === 'creative'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Palette className="w-4 h-4 mr-2 inline" />
                Creative Skills
              </button>
              <button
                onClick={() => setActiveSkillSet('technical')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSkillSet === 'technical'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Code2 className="w-4 h-4 mr-2 inline" />
                Technical Skills
              </button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills[activeSkillSet].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <div className="text-right">
                    <div className="text-lg font-bold text-crimson">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.years} años
                    </div>
                  </div>
                </div>
                
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      activeSkillSet === 'creative'
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
              Más Allá del Trabajo
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Las pasiones que alimentan mi creatividad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {interest.icon}
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                  {interest.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}