'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  variant = 'primary',
  size = 'md',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-medium',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border border-violet-400/30 hover:shadow-violet-500/40 hover:scale-[1.02]',
    secondary:
      'bg-slate-800/80 hover:bg-slate-700/90 text-white border border-slate-700/80 hover:border-violet-500/50 hover:shadow-md backdrop-blur-md',
    outline:
      'border border-violet-500/40 hover:border-violet-400 text-violet-300 hover:text-white hover:bg-violet-500/10 backdrop-blur-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const combinedClass = `inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={combinedClass}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={combinedClass}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
