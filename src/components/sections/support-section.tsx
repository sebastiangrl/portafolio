// src/components/sections/support-section.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Coffee, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function SupportSection() {
  const t = useTranslations('support');

  return (
    <div className="py-5">
      <div className="max-w-4xl mx-auto container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Content Left */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-filena font-semibold text-white mb-1">
                {t('title')}
              </h2>
              <p className="text-sm text-gray-300 max-w-md">
                {t('description')}
              </p>
            </div>
          </div>

          {/* Action Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://paypal.me/jsebastiangonzalez"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#760C0F] hover:bg-[#A31B1B] text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              <Heart className="w-4 h-4" />
              {t('support_button')}
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-gray-400">
            {t('thanks.message')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
