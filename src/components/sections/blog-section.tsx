// src/components/sections/blog-section.tsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function BlogSection() {
  const t = useTranslations('blog');

  return (
    <section id="blog" className="relative min-h-screen py-32 px-4 overflow-hidden bg-gradient-to-b from-background to-muted/50">
      {/* Blur Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-vinotinto/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-vinotinto/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-vinotinto to-vinotinto/80 bg-clip-text text-transparent mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Placeholder Blog Cards */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 hover:border-vinotinto/50 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="h-48 bg-gradient-to-br from-vinotinto/20 to-vinotinto/5 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-vinotinto/50 text-6xl">
                    {index === 1 && "📝"}
                    {index === 2 && "💡"}
                    {index === 3 && "🚀"}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t(`post${index}.title`)}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {t(`post${index}.excerpt`)}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{t(`post${index}.date`)}</span>
                  <span className="text-vinotinto hover:text-vinotinto/80 cursor-pointer transition-colors">
                    {t('readMore')} →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            {t('comingSoon')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
