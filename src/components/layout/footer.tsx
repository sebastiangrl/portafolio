// src/components/layout/footer.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  MapPin,
  Heart,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLang } from '@/hooks/use-lang';
import { socialLinks, navigationItems } from '@/data/navigation';
import { cn, scrollToElement } from '@/lib/utils';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
};

export function Footer() {
  const { t, locale } = useLang();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">Multimedia Engineer</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Developer & E-commerce Specialist
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {locale === 'es' 
                  ? 'Creando experiencias web excepcionales con tecnologías modernas. Especializado en WordPress, Next.js y soluciones e-commerce.'
                  : 'Creating exceptional web experiences with modern technologies. Specialized in WordPress, Next.js and e-commerce solutions.'
                }
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>tu-email@ejemplo.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Pereira, Risaralda - Colombia</span>
                </div>
              </div>

              {/* Status Badge */}
              <Badge variant="success" className="w-fit">
                🟢 {locale === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
              </Badge>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {locale === 'es' ? 'Navegación' : 'Navigation'}
              </h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToElement(item.href.substring(1))}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {locale === 'es' ? 'Sígueme' : 'Follow me'}
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <Icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                      <span>{social.username}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span>
              {locale === 'es' ? 'Hecho con' : 'Made with'}
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>
              {locale === 'es' ? 'en Colombia' : 'in Colombia'}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">
              Next.js 15 • Tailwind CSS v4 • TypeScript
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8 rounded-lg hover:bg-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
    </footer>
  );
}