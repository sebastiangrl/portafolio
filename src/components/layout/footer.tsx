// src/components/layout/footer.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Heart,
  Coffee,
  ArrowUp
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const navigationSections = [
    {
      title: t('footer.work'),
      links: [
        { label: t('navigation.illustrations'), href: '#illustrations' },
        { label: t('navigation.development'), href: '#development' },
        { label: t('navigation.skills'), href: '#skills' }
      ]
    },
    {
      title: t('footer.info'),
      links: [
        { label: t('navigation.about'), href: '#about' },
        { label: t('navigation.contact'), href: '#contact' },
        { label: t('navigation.support'), href: '#support' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sebastiangrl',
      icon: Github,
      username: '@sebastiangrl'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jsebastiangonzalez',
      icon: Linkedin,
      username: '/in/jsebastiangonzalez'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/jsebastiangonzalez',
      icon: Instagram,
      username: '@jsebastiangonzalez'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: t('footer.contact.email'),
      value: 'hola@jsebastiangonzalez.com',
      href: 'mailto:hola@jsebastiangonzalez.com'
    },
    {
      icon: Phone,
      label: t('footer.contact.whatsapp'),
      value: '+57 301 564 9746',
      href: 'https://wa.me/573015649746'
    },
    {
      icon: MapPin,
      label: t('footer.contact.location'),
      value: 'Pereira, Colombia',
      href: null
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-8 left-8 w-32 h-32 bg-[#760C0F]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-[#760C0F]/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-light text-white mb-3">
                  Sebastián González
                </h3>
                <p className="text-lg text-[#A31B1B] font-medium mb-4">
                  {t('hero.title')}
                </p>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <Icon className="w-4 h-4 text-[#A31B1B]" />
                      </div>
                      <div>
                        <span className="text-gray-400 text-xs block">
                          {item.label}
                        </span>
                        <span className="text-white">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block hover:bg-white/5 rounded-lg p-2 -m-2 transition-colors duration-200"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="p-2 -m-2">{content}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Sections */}
            {navigationSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h4 className="font-medium text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-[#A31B1B] transition-colors duration-200 text-sm block py-1"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300 mr-2">
                  {t('footer.follow_me')}
                </span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="group relative"
                    >
                      <div className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-200">
                        <Icon className="w-5 h-5 text-gray-300 group-hover:text-[#A31B1B] transition-colors duration-200" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-white text-gray-900 text-xs py-1 px-2 rounded-lg whitespace-nowrap">
                          {social.username}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Support Link */}
              <motion.a
                href="#support"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-200 text-sm"
              >
                <Coffee className="w-4 h-4" />
                <span>{t('footer.support_now')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="py-6 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {currentYear} Sebastián González. {t('footer.rights')}
              </p>
              
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>{t('footer.made_with')}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>{t('footer.in_colombia')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#760C0F] to-[#A31B1B] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm ${
          !isVisible && "pointer-events-none"
        }`}
        aria-label={t('footer.scroll_to_top')}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}