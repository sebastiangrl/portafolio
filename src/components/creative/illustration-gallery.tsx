// src/components/creative/illustration-gallery.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Image } from 'lucide-react';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';

interface Illustration {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// Galería curada con distribución artística
const illustrations: Illustration[] = [
  {
    id: "grefg-illustration",
    title: "Grefg",
    category: "Character Design",
    description: "Ilustración digital de TheGrefg en estilo cartoon.",
    image: "/illustrations/Grefg.webp"
  },
  {
    id: "hero-illustration",
    title: "Digital Dreams",
    category: "Character Design",
    description: "Exploración de mundos oníricos a través del diseño de personajes.",
    image: "/illustrations/hero.jpg"
  },
  {
    id: "cosmic-warrior",
    title: "Cosmic Warrior",
    category: "Fantasy Art",
    description: "Guerrero cósmico en batalla interdimensional.",
    image: "/illustrations/cosmic.jpg"
  },
  {
    id: "neon-city",
    title: "Neon Dreams",
    category: "Concept Art",
    description: "Ciudad cyberpunk con arquitectura futurista.",
    image: "/illustrations/neon.jpg"
  },
  {
    id: "mystic-forest",
    title: "Mystic Forest",
    category: "Environment",
    description: "Bosque encantado con criaturas místicas.",
    image: "/illustrations/forest.jpg"
  },
  {
    id: "space-explorer",
    title: "Space Explorer",
    category: "Sci-Fi",
    description: "Explorador espacial en planeta alienígena.",
    image: "/illustrations/space.jpg"
  },
  {
    id: "dragon-rider",
    title: "Dragon Rider",
    category: "Fantasy",
    description: "Jinete de dragón en vuelo épico.",
    image: "/illustrations/dragon.jpg"
  },
  {
    id: "underwater-city",
    title: "Atlantis",
    category: "Environment",
    description: "Ciudad submarina con tecnología avanzada.",
    image: "/illustrations/atlantis.jpg"
  },
  {
    id: "steampunk-girl",
    title: "Steam Engineer",
    category: "Character Design",
    description: "Ingeniera steampunk con invenciones mecánicas.",
    image: "/illustrations/steampunk.jpg"
  }
];

export function IllustrationGallery() {
  const t = useTranslations('illustrations');
  const [featuredIndex, setFeaturedIndex] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState<Illustration | null>(null);

  const featuredIllustration = illustrations[featuredIndex];
  const smallerIllustrations = illustrations.filter((_, index) => index !== featuredIndex);

  const handleImageSelect = (illustration: Illustration, _index: number) => {
    // Encuentra el índice real en el array original
    const realIndex = illustrations.findIndex(ill => ill.id === illustration.id);
    setFeaturedIndex(realIndex);
  };

  const openLightbox = (illustration: Illustration) => {
    setSelectedImage(illustration);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = illustrations.findIndex(ill => ill.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : illustrations.length - 1;
    } else {
      newIndex = currentIndex < illustrations.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(illustrations[newIndex]);
  };

  return (
    <>
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Minimal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-filena text-4xl md:text-5xl lg:text-6xl font-light text-charcoal dark:text-pearl mb-8 decoration-line">
              {t('title')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
          </motion.div>

          {/* Creative Grid Layout - Vertical main image */}
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[70vh] max-w-5xl mx-auto">
            {/* Featured Vertical Image - More elongated */}
            <motion.div
              key={featuredIllustration.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-12 md:col-span-5 row-span-8 relative group cursor-pointer overflow-hidden rounded-2xl bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl hover:shadow-red-600/20 transition-all duration-500"
              onClick={() => openLightbox(featuredIllustration)}
            >
              {/* Real Image */}
              <NextImage
                src={featuredIllustration.image}
                alt={featuredIllustration.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={featuredIndex === 0}
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.fallback-placeholder')?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback placeholder (hidden by default) */}
              <div className="fallback-placeholder hidden absolute inset-0 bg-gray-50/50 dark:bg-gray-800/50 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-700/50 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600 dark:text-gray-300">
                    <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Image className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {featuredIllustration.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl md:text-2xl font-light mb-1">
                    {featuredIllustration.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {featuredIllustration.category}
                  </p>
                </div>
              </div>
              
              {/* Floating indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Grid of smaller images - 6 images in 3x2 layout */}
            <div className="col-span-12 md:col-span-7 row-span-6 grid grid-cols-3 gap-2">
              {smallerIllustrations.slice(0, 6).map((illustration, index) => (
                <motion.div
                  key={illustration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-md hover:shadow-red-600/20 transition-all duration-500"
                  onClick={() => handleImageSelect(illustration, index)}
                >
                  <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-800/50 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-700/50 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-md bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Selection indicator */}
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-red-600/30 backdrop-blur-sm"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom strip - remaining images */}
            <div className="col-span-12 md:col-span-7 row-span-2 grid grid-cols-1 gap-2">
              {smallerIllustrations.slice(6, 7).map((illustration, index) => (
                <motion.div
                  key={illustration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-md hover:shadow-red-600/20 transition-all duration-500"
                  onClick={() => handleImageSelect(illustration, index + 6)}
                >
                  <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-800/50 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-700/50 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-lg bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {illustrations.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === featuredIndex 
                    ? 'bg-red-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-300 w-1.5'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/30 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/30 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/30 dark:hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl max-h-[90vh] w-full aspect-[3/4] rounded-3xl overflow-hidden bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Real Image */}
              <NextImage
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.fallback-placeholder')?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback placeholder (hidden by default) */}
              <div className="fallback-placeholder hidden absolute inset-0 bg-gray-50/50 dark:bg-gray-800/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-700 dark:text-gray-300">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center">
                      <Image className="w-16 h-16" />
                    </div>
                    <h3 className="text-4xl font-light mb-4 text-gray-900 dark:text-white">
                      {selectedImage.title}
                    </h3>
                    <p className="text-lg opacity-80 max-w-md mx-auto">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-3xl font-light mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/90 text-lg mb-1">
                  {selectedImage.category}
                </p>
                <p className="text-white/70">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}