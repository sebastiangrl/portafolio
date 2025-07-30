'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'wave' | 'gradient' | 'particles' | 'lines';
  className?: string;
}

export function SectionTransition({ variant = 'gradient', className = '' }: SectionTransitionProps) {
  switch (variant) {
    case 'wave':
      return (
        <div className={`relative h-32 overflow-hidden ${className}`}>
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="url(#waveGradient)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(118, 12, 15, 0.1)" />
                <stop offset="100%" stopColor="rgba(118, 12, 15, 0.05)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'particles':
      return (
        <div className={`relative h-24 overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#760C0F]/5 to-transparent">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#760C0F]/30 rounded-full"
                style={{
                  left: `${10 + i * 7}%`,
                  top: '50%',
                }}
                initial={{ scale: 0, opacity: 0, y: -10 }}
                whileInView={{ scale: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      );

    case 'lines':
      return (
        <div className={`relative h-20 overflow-hidden ${className}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#760C0F]/30 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-[#760C0F]/50 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      );

    case 'gradient':
    default:
      return (
        <div className={`relative h-16 overflow-hidden ${className}`}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#760C0F]/5 to-transparent"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-black/5" />
          
          {/* Subtle animated dots */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-[#760C0F]/40 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </div>
      );
  }
}
