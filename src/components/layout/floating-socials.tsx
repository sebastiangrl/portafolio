// src/components/layout/floating-socials.tsx
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const socials = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:tu-email@ejemplo.com',
    color: 'hover:bg-blue-600',
    delay: 0.1
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/tu-perfil',
    color: 'hover:bg-blue-700',
    delay: 0.2
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/tu-usuario',
    color: 'hover:bg-pink-600',
    delay: 0.3
  },
  {
    name: 'TikTok',
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.154-1.73-1.154-2.156V2h-3.591v13.104c0 .531-.407.964-.911.964s-.911-.433-.911-.964c0-.531.407-.964.911-.964.09 0 .177.013.261.037V11.37a3.774 3.774 0 0 0-.261-.009c-2.045 0-3.704 1.659-3.704 3.704s1.659 3.704 3.704 3.704 3.704-1.659 3.704-3.704V7.216a7.68 7.68 0 0 0 4.532 1.459v-2.793c-.85 0-1.638-.317-2.23-.736l-.004-.004-.566-.58z"/>
      </svg>
    ),
    href: 'https://tiktok.com/@tu-usuario',
    color: 'hover:bg-black',
    delay: 0.4
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/tu-usuario',
    color: 'hover:bg-gray-800',
    delay: 0.5
  }
];

export function FloatingSocials() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: social.delay,
                ease: 'easeOut'
              }}
              className={`
                group relative flex items-center justify-center 
                w-12 h-12 bg-white/90 dark:bg-gray-900/90 
                backdrop-blur-sm rounded-full shadow-lg 
                border border-gray-200/50 dark:border-gray-700/50
                text-gray-600 dark:text-gray-400 
                hover:text-white transition-all duration-300 
                transform hover:scale-110 hover:-translate-x-1
                ${social.color}
              `}
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {social.name}
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
