'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Calendar, Users, BarChart3, Sparkles, ExternalLink, Heart, DollarSign, X, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Plugin {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  version: string;
  downloadUrl: string;
  githubUrl: string;
  features: Array<{ icon: any; text: string }>;
  tech: string[];
  gradient: string;
  highlights: string[];
}

export function PluginsShowcase() {
  const t = useTranslations('plugins');
  const [donationAmount, setDonationAmount] = useState(5);
  const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlugin(null);
      }
    };

    if (selectedPlugin) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPlugin]);

  const plugins: Plugin[] = [
    {
      id: 'barow',
      title: 'Barow',
      subtitle: t('barow.subtitle'),
      description: t('barow.description'),
      version: '2.0.0',
      downloadUrl: '/plugins/Barow.zip',
      githubUrl: 'https://github.com/sebastiangrl/Barow',
      features: [
        { icon: Calendar, text: t('barow.features.reservations') },
        { icon: Users, text: t('barow.features.clients') },
        { icon: BarChart3, text: t('barow.features.analytics') },
        { icon: Sparkles, text: t('barow.features.customization') }
      ],
      tech: ['WordPress', 'PHP 7.4+', 'MySQL', 'JavaScript'],
      gradient: 'from-red-500 to-red-700',
      highlights: [
        t('barow.highlights.complete_system'),
        t('barow.highlights.real_time_analytics'),
        t('barow.highlights.client_management'),
        t('barow.highlights.email_notifications')
      ]
    }
  ];

  const generatePayPalUrl = (amount: number) => {
    return `https://paypal.me/jsebastiangonzalez/${amount}`;
  };

  return (
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
          {t('description')}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500">
          {t('wordpress_plugins')}
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plugins.map((plugin, index) => (
          <motion.div
            key={plugin.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover-lift"
          >
            {/* Header con efecto glass */}
            <div className="relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
              {/* Efecto glass decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 dark:from-red-400/10 dark:to-red-500/5"></div>
              <div className="relative text-center">
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{plugin.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-2">{plugin.subtitle}</p>
                <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full font-medium">
                  v{plugin.version}
                </span>
              </div>
            </div>

            {/* Contenido condensado */}
            <div className="p-4">
              {/* Descripción breve */}
              <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-4 line-clamp-2">
                {plugin.description}
              </p>

              {/* Tecnologías principales */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {plugin.tech.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {plugin.tech.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{plugin.tech.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-2">
                {/* Botones secundarios */}
                <div className="flex gap-2">
                  <a
                    href={plugin.downloadUrl}
                    download
                    className="flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1.5 rounded text-xs font-medium transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    {t('download')}
                  </a>
                  <a
                    href={plugin.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1.5 rounded text-xs font-medium transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedPlugin(plugin)}
                    className="flex items-center justify-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 px-2 py-1.5 rounded text-xs font-medium transition-colors"
                  >
                    <Info className="w-3 h-3" />
                    Info
                  </button>
                </div>

                {/* Sección de donación condensada */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-3 border border-red-200 dark:border-red-800/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full pl-6 pr-2 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-xs text-center focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">USD</span>
                  </div>

                  <motion.a
                    href={generatePayPalUrl(donationAmount)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-1 bg-[#760C0F] hover:bg-[#A31B1B] text-white font-semibold py-2 px-3 rounded transition-all duration-200 text-xs"
                  >
                    <Heart className="w-3 h-3" />
                    {t('donation.button')} ${donationAmount}
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de información detallada */}
      <AnimatePresence>
        {selectedPlugin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPlugin(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal con efecto glass */}
              <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 dark:from-red-400/10 dark:to-red-500/5"></div>
                <button
                  onClick={() => setSelectedPlugin(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100/50 dark:bg-gray-700/50 hover:bg-gray-200/50 dark:hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <X className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{selectedPlugin.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">{selectedPlugin.subtitle}</p>
                  <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm px-3 py-1 rounded-full font-medium">
                    v{selectedPlugin.version}
                  </span>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-6">
                {/* Descripción completa */}
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedPlugin.description}
                  </p>
                </div>

                {/* Características completas */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {t('features')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedPlugin.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-red-600 dark:text-red-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Puntos destacados */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {t('highlights')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPlugin.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tecnologías completas */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {t('technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPlugin.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div className="mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {t('requirements')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div>• WordPress 5.0+</div>
                      <div>• PHP 7.4+</div>
                      <div>• MySQL 5.6+</div>
                      <div>• 128MB RAM mínimo</div>
                    </div>
                  </div>
                </div>

                {/* Botones de acción del modal */}
                <div className="flex gap-3">
                  <a
                    href={selectedPlugin.downloadUrl}
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {t('download')}
                  </a>
                  <a
                    href={selectedPlugin.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}