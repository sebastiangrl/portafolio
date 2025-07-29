// src/components/creative/creative-process.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  PenTool, 
  Monitor, 
  Code2, 
  Lightbulb, 
  Layers, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target
} from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  tools: string[];
  duration: string;
  deliverables: string[];
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 'research',
    title: 'Research & Discovery',
    description: 'Investigación profunda del proyecto, análisis de competencia y definición de objetivos.',
    icon: Lightbulb,
    tools: ['Miro', 'Pinterest', 'Google Research'],
    duration: '1-2 días',
    deliverables: ['Mood Board', 'Brief del proyecto', 'Referencias visuales'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'sketching',
    title: 'Ideation & Sketching',
    description: 'Exploración de conceptos iniciales a través de sketches rápidos y wireframes.',
    icon: PenTool,
    tools: ['Procreate', 'Papel y lápiz', 'Figma'],
    duration: '2-3 días',
    deliverables: ['Sketches conceptuales', 'Wireframes', 'Arquitectura visual'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'design',
    title: 'Visual Design',
    description: 'Desarrollo del diseño visual definitivo con paleta de colores y tipografía.',
    icon: Palette,
    tools: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
    duration: '3-5 días',
    deliverables: ['Diseños finales', 'Sistema de colores', 'Guía de estilo'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'refinement',
    title: 'Refinement & Details',
    description: 'Perfeccionamiento de detalles, ajustes y preparación de assets finales.',
    icon: Layers,
    tools: ['Adobe Creative Suite', 'Figma', 'Zeplin'],
    duration: '2-3 días',
    deliverables: ['Assets optimizados', 'Múltiples formatos', 'Documentación'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'development',
    title: 'Development & Code',
    description: 'Implementación técnica cuando el proyecto requiere desarrollo web.',
    icon: Code2,
    tools: ['Next.js', 'React', 'Tailwind CSS', 'VS Code'],
    duration: '5-10 días',
    deliverables: ['Código limpio', 'Responsive design', 'Optimización'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'delivery',
    title: 'Testing & Delivery',
    description: 'Pruebas finales, ajustes basados en feedback y entrega del proyecto.',
    icon: CheckCircle,
    tools: ['Testing tools', 'Git', 'Deployment platforms'],
    duration: '1-2 días',
    deliverables: ['Proyecto final', 'Documentación', 'Soporte post-entrega'],
    color: 'from-teal-500 to-green-500'
  }
];

const tools = [
  { name: 'Adobe Illustrator', icon: '🎨', category: 'Design', proficiency: 95 },
  { name: 'Figma', icon: '🎯', category: 'Design', proficiency: 90 },
  { name: 'Procreate', icon: '✏️', category: 'Illustration', proficiency: 85 },
  { name: 'Next.js', icon: '⚛️', category: 'Development', proficiency: 95 },
  { name: 'React', icon: '🔷', category: 'Development', proficiency: 95 },
  { name: 'TypeScript', icon: '📘', category: 'Development', proficiency: 90 },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Development', proficiency: 95 },
  { name: 'Adobe Photoshop', icon: '🖼️', category: 'Design', proficiency: 90 }
];

const stats = [
  { label: 'Proyectos Completados', value: '35+', icon: Target },
  { label: 'Años de Experiencia', value: '4+', icon: Clock },
  { label: 'Clientes Satisfechos', value: '25+', icon: Users },
  { label: 'Tiempo Promedio', value: '2-3 semanas', icon: Zap }
];

export function CreativeProcess() {
  const [activeStep, setActiveStep] = React.useState<string | null>(null);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Mi Proceso Creativo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Desde la conceptualización inicial hasta la entrega final, cada proyecto sigue un proceso estructurado 
            que combina creatividad, estrategia y ejecución técnica.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'md:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-600 rounded-full z-10" />

                  {/* Step Number (Mobile) */}
                  <div className="md:hidden absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${!isEven ? 'md:col-start-2' : ''}`}>
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {step.duration}
                            </p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Tools */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Herramientas principales:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Entregables:
                        </h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Visual Element */}
                  <div className={`hidden md:block ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <motion.div
                      className="relative aspect-square max-w-sm mx-auto"
                      animate={{
                        scale: activeStep === step.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className={`w-24 h-24 text-gray-600 dark:text-gray-300`} />
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <span className="text-2xl">✨</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Arrow (not on last item) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-6 z-20"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tools & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
              Herramientas & Skills
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Las tecnologías y herramientas que domino para dar vida a cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-crimson transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {tool.category}
                    </p>
                  </div>
                </div>
                
                {/* Skill Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{tool.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-crimson to-red-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-crimson to-red-600 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-crimson to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para dar vida a tu proyecto?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Trabajemos juntos para crear algo excepcional que combine arte y tecnología
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-white text-crimson rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Empezar un Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}