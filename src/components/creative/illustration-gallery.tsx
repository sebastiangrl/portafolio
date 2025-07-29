// src/components/creative/illustration-gallery.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Illustration {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: number;
  client?: string;
  likes: number;
  views: number;
  process?: {
    sketches?: string;
    wireframe?: string;
    final: string;
  };
}

// Mock data - Replace with your actual illustrations
const illustrations: Illustration[] = [
  {
    id: "character-design-1",
    title: "Mystic Forest Guardian",
    category: "Character Design",
    description: "Personaje principal para videojuego indie de aventuras. Diseño inspirado en mitología celta con elementos modernos.",
    image: "/api/placeholder/400/600",
    tags: ["Character Design", "Gaming", "Fantasy", "Digital Art"],
    year: 2024,
    client: "Indie Game Studio",
    likes: 234,
    views: 1840,
    process: {
      sketches: "/api/placeholder/400/300",
      wireframe: "/api/placeholder/400/300",
      final: "/api/placeholder/400/600"
    }
  },
  {
    id: "brand-identity-1",
    title: "EcoVida Brand System",
    category: "Brand Identity",
    description: "Sistema de identidad visual completo para startup de productos eco-friendly. Incluye logo, paleta y aplicaciones.",
    image: "/api/placeholder/500/400",
    tags: ["Branding", "Sustainability", "Logo Design", "Corporate"],
    year: 2024,
    client: "EcoVida",
    likes: 189,
    views: 2340,
  },
  {
    id: "ui-illustration-1",
    title: "Meditation App Icons",
    category: "UI Illustration",
    description: "Serie de ilustraciones para aplicación móvil de meditación. Estilo minimalista con toques orgánicos.",
    image: "/api/placeholder/300/500",
    tags: ["UI Design", "Mobile", "Wellness", "Minimalist"],
    year: 2024,
    client: "MindfulApp",
    likes: 156,
    views: 980,
  },
  {
    id: "poster-design-1",
    title: "Music Festival Poster",
    category: "Poster Design",
    description: "Cartel para festival de música electrónica. Combinación de elementos psicodélicos y tipografía experimental.",
    image: "/api/placeholder/350/500",
    tags: ["Poster", "Music", "Typography", "Psychedelic"],
    year: 2023,
    client: "Electronic Dreams Festival",
    likes: 298,
    views: 3450,
  },
  {
    id: "character-design-2",
    title: "Cyberpunk Hero",
    category: "Character Design",
    description: "Protagonista de cómic cyberpunk. Diseño que mezcla elementos futuristas con influencias japonesas.",
    image: "/api/placeholder/400/550",
    tags: ["Character Design", "Cyberpunk", "Comic", "Futuristic"],
    year: 2024,
    likes: 267,
    views: 2100,
  },
  {
    id: "packaging-design-1",
    title: "Artisan Coffee Packaging",
    category: "Packaging",
    description: "Diseño de packaging para línea de cafés artesanales. Enfoque en sostenibilidad y artesanía local.",
    image: "/api/placeholder/400/300",
    tags: ["Packaging", "Coffee", "Artisan", "Sustainable"],
    year: 2023,
    client: "Mountain Coffee Co.",
    likes: 145,
    views: 1200,
  }
];

const categories = ['All', 'Character Design', 'Brand Identity', 'UI Illustration', 'Poster Design', 'Packaging'];

export function IllustrationGallery() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedIllustration, setSelectedIllustration] = React.useState<Illustration | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const filteredIllustrations = selectedCategory === 'All' 
    ? illustrations 
    : illustrations.filter(ill => ill.category === selectedCategory);

  const openLightbox = (illustration: Illustration) => {
    setSelectedIllustration(illustration);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedIllustration(null);
    document.body.style.overflow = 'unset';
  };

  const navigateIllustration = (direction: 'prev' | 'next') => {
    if (!selectedIllustration) return;
    
    const currentIndex = filteredIllustrations.findIndex(ill => ill.id === selectedIllustration.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredIllustrations.length - 1;
    } else {
      newIndex = currentIndex < filteredIllustrations.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedIllustration(filteredIllustrations[newIndex]);
  };

  return (
    <>
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
              Ilustraciones
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Una colección de mis trabajos de ilustración digital, desde character design hasta identidades de marca completas.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {filteredIllustrations.map((illustration, index) => (
                <motion.div
                  key={illustration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid group cursor-pointer hover-lift"
                  onClick={() => openLightbox(illustration)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Image */}
                    <div className="relative aspect-auto">
                      <div className="w-full h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-pink-800 dark:via-purple-800 dark:to-indigo-800 flex items-center justify-center">
                        <div className="text-center text-gray-600 dark:text-gray-300">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-2xl">🎨</span>
                          </div>
                          <p className="font-medium">{illustration.title}</p>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <motion.div
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.div
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-full">
                          {illustration.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {illustration.year}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {illustration.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {illustration.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{illustration.likes}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{illustration.views}</span>
                          </span>
                        </div>
                        {illustration.client && (
                          <span className="font-medium">{illustration.client}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedIllustration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateIllustration('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigateIllustration('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square lg:aspect-auto bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 dark:from-pink-800 dark:via-purple-800 dark:to-indigo-800 flex items-center justify-center">
                  <div className="text-center text-gray-600 dark:text-gray-300">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <p className="text-xl font-medium">{selectedIllustration.title}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30 px-3 py-1 rounded-full">
                        {selectedIllustration.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedIllustration.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {selectedIllustration.title}
                    </h2>

                    {selectedIllustration.client && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Cliente: <span className="font-medium">{selectedIllustration.client}</span>
                      </p>
                    )}

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedIllustration.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedIllustration.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedIllustration.likes}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Likes</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedIllustration.views}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <Heart className="w-4 h-4 mr-2" />
                      Like
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}