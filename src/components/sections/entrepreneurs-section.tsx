// src/components/sections/entrepreneurs-section.tsx
"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { 
  Briefcase, 
  ShoppingCart, 
  Globe, 
  QrCode, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Users,
  DollarSign,
  X
} from 'lucide-react';

export function EntrepreneursSection() {
  const t = useTranslations('entrepreneurs');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      key: 'website',
      icon: Globe,
      color: 'from-gray-500 to-gray-600',
      typeformId: 'WEBSITE_FORM_ID' // Reemplazar con el ID real de Typeform
    },
    {
      key: 'ecommerce', 
      icon: ShoppingCart,
      color: 'from-gray-600 to-gray-700',
      typeformId: 'ECOMMERCE_FORM_ID' // Reemplazar con el ID real de Typeform
    },
    {
      key: 'menu',
      icon: QrCode,
      color: 'from-gray-500 to-gray-600',
      typeformId: 'MENU_FORM_ID' // Reemplazar con el ID real de Typeform
    }
  ];

  const steps = [
    { number: '01', key: 'steps.0' },
    { number: '02', key: 'steps.1' },
    { number: '03', key: 'steps.2' },
    { number: '04', key: 'steps.3' }
  ];

  const openModal = (serviceKey: string) => {
    setActiveModal(serviceKey);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#760C0F]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-gray-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass-card bg-[#760C0F]/10 text-[#760C0F] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#760C0F] to-[#A31B1B] bg-clip-text text-transparent mb-6">
              {t('title')}
            </h1>
            
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              {t('subtitle')}
            </p>
            
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t('intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('services.title')}</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl glass-card p-8 hover:shadow-xl transition-all duration-500"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    {t(`services.${service.key}.description`)}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {Array.from({ length: 4 }, (_, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-800">{t(`services.${service.key}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => openModal(service.key)}
                    className="w-full glass-button bg-[#760C0F]/10 hover:bg-[#760C0F]/20 text-[#760C0F] border border-[#760C0F]/20 hover:border-[#760C0F]/30 py-3 px-6 rounded-xl font-medium transition-all duration-300"
                  >
                    {t('services.getQuote')}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 rounded-3xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('approach.title')}</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t('approach.description')}
                </p>
                
                <ul className="space-y-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#760C0F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#760C0F]" />
                      </div>
                      <span className="text-gray-800">
                        {t(`approach.points.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div className="glass-card bg-[#760C0F]/5 p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-[#760C0F] mb-4" />
                  <h3 className="font-semibold mb-2 text-gray-900">{t('approach.benefits.growth.title')}</h3>
                  <p className="text-sm text-gray-700">
                    {t('approach.benefits.growth.description')}
                  </p>
                </div>
                
                <div className="glass-card bg-gray-500/5 p-6 rounded-xl">
                  <Users className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-gray-900">{t('approach.benefits.support.title')}</h3>
                  <p className="text-sm text-gray-700">
                    {t('approach.benefits.support.description')}
                  </p>
                </div>
                
                <div className="glass-card bg-gray-600/5 p-6 rounded-xl">
                  <DollarSign className="w-8 h-8 text-gray-700 mb-4" />
                  <h3 className="font-semibold mb-2 text-gray-900">{t('approach.benefits.flexibility.title')}</h3>
                  <p className="text-sm text-gray-700">
                    {t('approach.benefits.flexibility.description')}
                  </p>
                </div>
                
                <div className="glass-card bg-gray-500/5 p-6 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="font-semibold mb-2 text-gray-900">{t('approach.benefits.communication.title')}</h3>
                  <p className="text-sm text-gray-700">
                    {t('approach.benefits.communication.description')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('process.title')}</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center glass-card p-6 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {t(`process.${step.key}.title`)}
                </h3>
                
                <p className="text-gray-700">
                  {t(`process.${step.key}.description`)}
                </p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-12 w-8 h-8 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card bg-gradient-to-r from-[#760C0F]/10 to-[#A31B1B]/10 p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('cta.title')}
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              {t('cta.description')}
            </p>
            
            <a
              href="https://wa.me/573015649746?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 glass-button bg-[#760C0F] hover:bg-[#A31B1B] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>{t('cta.button')}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal for Typeform */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl h-[80vh] glass-card rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-semibold text-gray-900">
                {t(`services.${activeModal}.title`)} - {t('services.quoteForm')}
              </h3>
              <button
                onClick={closeModal}
                className="glass-button p-2 rounded-lg hover:bg-red-500/10 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="h-full p-6">
              <iframe
                src={`https://form.typeform.com/to/${services.find(s => s.key === activeModal)?.typeformId}?typeform-medium=embed-snippet`}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
