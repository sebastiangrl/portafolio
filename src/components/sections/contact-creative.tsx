// src/components/sections/contact-creative.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Clock,
  Github,
  Linkedin,
  Instagram,
  Coffee,
  Zap,
  Heart
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Para proyectos y colaboraciones',
    action: 'sebastian@ejemplo.com',
    href: 'mailto:sebastian@ejemplo.com',
    color: 'from-blue-500 to-cyan-500',
    response: 'Respuesta en 24h'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Para consultas rápidas',
    action: '+57 300 123 4567',
    href: 'https://wa.me/573001234567',
    color: 'from-green-500 to-emerald-500',
    response: 'Respuesta inmediata'
  },
  {
    icon: Calendar,
    title: 'Calendly',
    description: 'Agenda una videollamada',
    action: 'Agendar reunión',
    href: 'https://calendly.com/tu-usuario',
    color: 'from-purple-500 to-pink-500',
    response: '30 min gratis'
  }
];

const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    handle: '@tu-usuario',
    href: 'https://github.com/tu-usuario',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    handle: '/in/tu-perfil',
    href: 'https://linkedin.com/in/tu-perfil',
    color: 'hover:text-blue-600'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@tu_arte',
    href: 'https://instagram.com/tu_arte',
    color: 'hover:text-pink-600'
  }
];

const availability = {
  timezone: 'GMT-5 (Colombia)',
  workingHours: '9:00 AM - 6:00 PM',
  responseTime: '< 24 horas',
  currentStatus: 'Disponible para nuevos proyectos'
};

export function ContactCreative() {
  const t = useTranslations();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    project: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', project: '', message: '', budget: '' });
    
    // Here you would integrate with your email service
    alert('¡Mensaje enviado! Te responderé pronto 🚀');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            ¡Trabajemos Juntos!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encanta colaborar en ideas que combinan 
            creatividad y tecnología. ¡Hablemos y hagamos realidad algo increíble!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Formas de Contacto
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="block group"
                  >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {method.description}
                          </p>
                          <p className="font-medium text-crimson group-hover:text-red-600 transition-colors">
                            {method.action}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            {method.response}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-crimson" />
                Disponibilidad
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Zona horaria:</span>
                  <span className="text-gray-900 dark:text-white">{availability.timezone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Horario:</span>
                  <span className="text-gray-900 dark:text-white">{availability.workingHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Respuesta:</span>
                  <span className="text-gray-900 dark:text-white">{availability.responseTime}</span>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {availability.currentStatus}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Cuéntame sobre tu proyecto
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Mientras más detalles compartas, mejor podré ayudarte a crear algo excepcional
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tipo de proyecto *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="illustration">Ilustración Digital</option>
                      <option value="branding">Identidad de Marca</option>
                      <option value="web-design">Diseño Web</option>
                      <option value="web-development">Desarrollo Web</option>
                      <option value="fullstack">Proyecto Full-Stack</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">$500 - $1,000 USD</option>
                      <option value="1000-2500">$1,000 - $2,500 USD</option>
                      <option value="2500-5000">$2,500 - $5,000 USD</option>
                      <option value="5000+">$5,000+ USD</option>
                      <option value="discuss">Hablemos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos, timeline, inspiraciones... ¡Todo lo que consideres importante!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-crimson to-red-600 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                      <Zap className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Sígueme en redes
          </h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group flex flex-col items-center space-y-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-all duration-200" />
                  <div className="text-center">
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {social.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {social.handle}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-crimson to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block text-6xl mb-6"
            >
              ☕
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Hablamos tomando un café virtual?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Me encanta conocer nuevas personas y proyectos. Si tienes una idea, 
              ¡agendemos una videollamada sin compromiso!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-crimson transition-all duration-300"
                asChild
              >
                <a href="https://calendly.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Café Virtual
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-crimson transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Directo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Pereira, Risaralda - Colombia</span>
            <span>•</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>Disponible globalmente</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}