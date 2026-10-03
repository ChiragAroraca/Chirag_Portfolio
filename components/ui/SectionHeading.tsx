'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm ${align === 'center' ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
