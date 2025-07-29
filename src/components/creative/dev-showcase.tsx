// src/components/sections/dev-showcase.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, Monitor, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WebProject {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  codeUrl?: string;
  features: string[];
  year: number;
  client?: string;
  stats: {
    [key: string]: string;
  };
  illustrations?: {
    icons?: string;
    graphics?: string;
    animations?: string;
  };
}

const webProjects: WebProject[] = [
  {
    id: "sevenclub-web",
    title: "SevenClub Platform",
    category: "Full-Stack Development",
    description: "Marketplace que conecta marcas con influencers usando AI para matching inteligente",
    longDescription: "Plataforma completa de marketplace que utiliza algoritmos de machine learning para conectar marcas con los influencers más adecuados. Incluye dashboard en tiempo real, sistema de pagos, analytics avanzados y chat integrado.",
    technologies: ["Next.js", "Supabase", "React", "Tailwind CSS", "TypeScript", "Stripe"],
    image: "/api/placeholder/800/500",
    liveUrl: "https://sevenclub.club",
    codeUrl: "https://github.com/tu-usuario/sevenclub",
    features: [
      "Dashboard en tiempo real",
      "Sistema de matching con IA",
      "Pagos integrados con Stripe",
      "Analytics y métricas",
      "Chat en tiempo real",
      "Sistema de reviews"
    ],
    year: 2024,
    client: "SevenClub",
    stats: {
      users: "500+",
      revenue: "$10K+",
      campaigns: "200+",
      satisfaction: "98%"
    },
    illustrations: {
      icons: "/api/placeholder/400/300",
      graphics: "/api/placeholder/600/400"
    }
  },
  {
    id: "topuria-web",
    title: "Ilia Topuria Official",
    category: "Frontend Development",
    description: "Sitio web oficial del campeón UFC con animaciones premium y estadísticas en vivo",
    longDescription: "Website oficial del campeón de UFC Ilia Topuria. Incluye estadísticas de peleas actualizadas en tiempo real, galería multimedia interactiva, timeline de carrera y integración con redes sociales.",
    technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/api/placeholder/800/500",
    liveUrl: "https://topuria-website.vercel.app",
    codeUrl: "https://github.com/tu-usuario/topuria",
    features: [
      "Animaciones premium con Framer Motion",
      "Estadísticas en tiempo real",
      "Galería multimedia interactiva",
      "Timeline de carrera",
      "Responsive design",
      "SEO optimizado"
    ],
    year: 2024,
    stats: {
      visits: "50K+",
      performance: "98/100",
      loadTime: "<1s",
      mobile: "100%"
    },
    illustrations: {
      graphics: "/api/placeholder/600/400",
      animations: "/api/placeholder/400/600"
    }
  },
  {
    id: "instinto-web",
    title: "Instinto Real Estate",
    category: "WordPress Development",
    description: "Plataforma inmobiliaria boutique con sistema CRM integrado y generación de leads",
    longDescription: "Sitio web para inmobiliaria boutique especializada en propiedades premium. Sistema completo de gestión de propiedades, generación automática de leads, SEO local optimizado y CRM personalizado.",
    technologies: ["WordPress", "Custom PHP", "MySQL", "JavaScript", "SCSS"],
    image: "/api/placeholder/800/500",
    liveUrl: "https://instinto.co",
    features: [
      "Sistema de gestión de propiedades",
      "Generación automática de leads",
      "SEO local optimizado",
      "CRM integrado",
      "Búsqueda avanzada",
      "Tours virtuales"
    ],
    year: 2023,
    client: "Instinto Real Estate",
    stats: {
      properties: "200+",
      leads: "1K+",
      sales: "$2M+",
      conversion: "15%"
    }
  }
];

export function DevShowcase() {
  const [selectedProject, setSelectedProject] = React.useState<WebProject | null>(null);

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
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Desarrollo Web
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Aplicaciones web modernas construidas con las últimas tecnologías. 
            Cada proyecto combina funcionalidad excepcional con diseño visual impactante.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
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
                  <div className="bg-gray-200 dark:bg-gray-800 rounded-t-xl p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded mx-3 px-3 py-1">
                        <span className="text-xs text-gray-500">{project.liveUrl}</span>
                      </div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-b-xl overflow-hidden shadow-2xl">
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                          <Monitor className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="bg-white/20 text-white hover:bg-white/30"
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
                            className="bg-white/20 text-white hover:bg-white/30"
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
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {project.year}
                      </span>
                    </motion.div>
                  </div>

                  {/* Mobile Preview */}
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-24 h-44 bg-gray-900 rounded-2xl p-1 shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {/* Category & Year */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    <Code2 className="w-4 h-4 mr-2" />
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Características principales
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Stack tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Resultados
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver proyecto
                    </a>
                  </Button>
                  
                  {project.codeUrl && (
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Ver código
                      </a>
                    </Button>
                  )}
                </div>

                {/* Client */}
                {project.client && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cliente: <span className="font-medium text-gray-900 dark:text-white">{project.client}</span>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}