'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Todas las tecnologías en un solo array
const allTechs = [
  '/tech/nextjs-icon.svg',
  '/tech/react-icon.svg',
  '/tech/ts-icon.svg',
  '/tech/tailwind-icon.svg',
  '/tech/threejs-icon.svg',
  '/tech/astro-icon.svg',
  '/tech/nodejs-icon.svg',
  '/tech/postgresql-icon.svg',
  '/tech/wordpress-icon.svg',
  '/tech/woocommerce-icon.svg',
  '/tech/medusajs-icon.svg',
  '/tech/resend-icon.svg',
  '/tech/figma-icon.svg',
  '/tech/github-copilot-icon.svg',
  '/tech/claude-icon.svg',
  '/tech/vercel-icon.svg',
  '/tech/railway-icon.svg',
  '/tech/hostinger-icon.svg'
];

const TechIcon = ({ icon, index }: { icon: string; index: number }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.02
      }}
    >
      {/* Glass Container más grande */}
      <div className="relative w-24 h-24 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
        <Image
          src={icon}
          alt="Tech stack"
          width={48}
          height={48}
          className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};

const InfiniteSlider = ({ techs, direction, speed }: { 
  techs: string[]; 
  direction: 'left' | 'right'; 
  speed: number;
}) => {
  const duplicatedTechs = [...techs, ...techs, ...techs, ...techs]; // 4 repeticiones para nunca quedarse sin iconos

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex items-center"
        animate={{
          x: direction === 'left' 
            ? [0, -100 * techs.length] 
            : [-100 * techs.length, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechIcon key={`${tech}-${index}`} icon={tech} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export function TechSkills() {
  // Dividimos las tecnologías en 2 filas para mejor distribución
  const row1 = allTechs.slice(0, 9);
  const row2 = allTechs.slice(9, 18);

  return (
    <div className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Texto de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h2 className="text-8xl md:text-9xl font-bold text-gray-100 dark:text-gray-800 opacity-30 select-none">
            TECH
          </h2>
          <p className="text-4xl md:text-5xl font-light text-gray-200 dark:text-gray-700 opacity-20 select-none -mt-4">
            Herramientas
          </p>
        </div>
      </div>

      {/* Gradient Masks mejorados con más capas */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Gradiente izquierdo */}
        <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white via-white/95 via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/95 dark:via-gray-900/80 dark:to-transparent"></div>
        {/* Gradiente derecho */}
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white via-white/95 via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/95 dark:via-gray-900/80 dark:to-transparent"></div>
        
        {/* Capas adicionales para mejor ocultación */}
        <div className="absolute left-0 top-0 w-32 h-full bg-white dark:bg-gray-900"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-white dark:bg-gray-900"></div>
      </div>

      <div className="relative z-20">
        {/* Primera fila - Izquierda a derecha */}
        <div className="mb-6">
          <InfiniteSlider 
            techs={row1}
            direction="right"
            speed={35}
          />
        </div>

        {/* Segunda fila - Derecha a izquierda */}
        <div>
          <InfiniteSlider 
            techs={row2}
            direction="left"
            speed={40}
          />
        </div>
      </div>
    </div>
  );
}
