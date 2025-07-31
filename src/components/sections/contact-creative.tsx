// src/components/sections/contact-creative.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Heart
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ContactCreative() {
  const t = useTranslations('contact');
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    
    // Cargar el script de Typeform dinámicamente
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remover el script si el componente se desmonta
      const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: t('methods.email.title'),
      description: t('methods.email.description'),
      action: t('methods.email.action'),
      href: 'mailto:hola@jsebastiangonzalez.com',
      color: 'from-[#760C0F] to-[#A31B1B]'
    },
    {
      icon: MessageCircle,
      title: t('methods.whatsapp.title'),
      description: t('methods.whatsapp.description'),
      action: t('methods.whatsapp.action'),
      href: 'https://wa.me/573015649746',
      color: 'from-[#760C0F] to-[#A31B1B]'
    },
    {
      icon: Send,
      title: t('methods.typeform.title'),
      description: t('methods.typeform.description'),
      action: t('methods.typeform.action'),
      href: 'https://typeform.com/to/your-form-id', // Aquí podrías usar Typeform
      color: 'from-[#760C0F] to-[#A31B1B]'
    }
  ];

  return (
    <div className="section-padding-large">
      <div className="max-w-6xl mx-auto container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal dark:text-pearl mb-8 decoration-line">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            {t('cta')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Layout principal: Formulario + Botones */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Formulario Principal (2/3 del espacio) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-3xl p-6 shadow-2xl">
                {/* Typeform embebido */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 min-h-[500px]"
                >
                  {isMounted ? (
                    <div 
                      {...({ 'data-tf-live': '01K1EM59GZTZ22GBYASYQSF4G3' } as Record<string, string>)}
                      className="w-full h-full min-h-[500px]"
                    ></div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center py-20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-2xl flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Cargando formulario...</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Un momento por favor</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Botones Laterales (1/3 del espacio) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.a
                href={contactMethods[0].href}
                className="group block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {contactMethods[0].title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contactMethods[0].action}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={contactMethods[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {contactMethods[1].title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contactMethods[1].action}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Información adicional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 rounded-2xl p-6"
              >
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-4 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {t('location')}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Respuesta rápida garantizada
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Heart className="w-4 h-4 text-[#760C0F]" />
            <span>{t('location')}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}