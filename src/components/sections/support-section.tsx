// src/components/sections/support-section.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function SupportSection() {
  const t = useTranslations('support');

  return (
    <div className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block text-4xl mb-6"
          >
            ☕
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Simple Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-3xl mb-4"
            >
              💝
            </motion.div>
            
            <h3 className="text-xl font-medium text-white mb-4">
              {t('options.custom.title').replace(' Personalizado', '')}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('description')}
            </p>
            
            <motion.a
              href="https://paypal.me/jsebastiangonzalez"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#760C0F] hover:bg-[#A31B1B] text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              {t('support_button')}
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            {t('thanks.message')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
