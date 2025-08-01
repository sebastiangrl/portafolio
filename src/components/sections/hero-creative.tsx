// src/components/sections/hero-creative.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingCart, Building2, Zap, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';
import Image from 'next/image';

export function HeroCreative() {
  const t = useTranslations('hero');

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/HeroBanner.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Elegant floating elements - minimal and sophisticated */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border border-white/10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-lg border border-white/10 rotate-45"
          animate={{
            y: [0, 15, 0],
            rotate: [45, 225, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Logo Sebastián - más prominente */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Image
                src="/SG.svg"
                alt="Sebastián González Logo"
                width={200}
                height={200}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Title and Description - elegant and refined */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="font-filena text-3xl md:text-4xl lg:text-5xl text-white mb-6 tracking-wide leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-lg md:text-l text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              {t('subtitle')}
            </p>

            {/* Services highlight - what you do clearly */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{t('services.ecommerce')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{t('services.corporate')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{t('services.webapps')}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{t('services.design')}</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Elegant CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => scrollToElement('work-selector')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 px-10 py-4 rounded-xl font-medium backdrop-blur-sm transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                {t('cta.explore_work')}
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToElement('contact')}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/40 px-10 py-4 rounded-xl font-medium backdrop-blur-sm transition-all duration-300"
              >
                {t('cta.collaborate')}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
