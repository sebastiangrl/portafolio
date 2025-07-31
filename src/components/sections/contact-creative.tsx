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
    <div className="section-padding-medium">
      <div className="max-w-5xl mx-auto container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-filena font-semibold text-charcoal dark:text-pearl mb-4 decoration-line">
            {t('title')}
          </h2>
          <p className="text-lg text-charcoal dark:text-pearl max-w-2xl mx-auto leading-relaxed mb-2">
            {t('subtitle')}
          </p>
          <p className="text-base text-charcoal/70 dark:text-pearl/70 max-w-xl mx-auto">
            {t('cta')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Layout principal: Formulario + Botones */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            {/* Formulario Principal (3/4 del espacio) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-4 shadow-xl">
                {/* Typeform embebido */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 h-[400px]"
                >
                  {isMounted ? (
                    <div 
                      {...({ 'data-tf-live': '01K1EM59GZTZ22GBYASYQSF4G3' } as Record<string, string>)}
                      className="w-full h-full"
                    ></div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-xl flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                        <p className="text-base text-charcoal dark:text-pearl mb-1">Cargando formulario...</p>
                        <p className="text-sm text-charcoal/70 dark:text-pearl/70">Un momento por favor</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Botones Laterales (1/4 del espacio) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {/* Email */}
              <motion.a
                href={contactMethods[0].href}
                className="group block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl p-4 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-charcoal dark:text-pearl text-sm mb-0.5 truncate">
                        {contactMethods[0].title}
                      </h4>
                      <p className="text-xs text-charcoal/70 dark:text-pearl/70 truncate">
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
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl p-4 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-charcoal dark:text-pearl text-sm mb-0.5 truncate">
                        {contactMethods[1].title}
                      </h4>
                      <p className="text-xs text-charcoal/70 dark:text-pearl/70 truncate">
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
                className="bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 rounded-xl p-4"
              >
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-charcoal/70 dark:text-pearl/70 mb-1">
                    {t('location')}
                  </p>
                  <p className="text-xs text-charcoal/50 dark:text-pearl/50">
                    Respuesta rápida
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}