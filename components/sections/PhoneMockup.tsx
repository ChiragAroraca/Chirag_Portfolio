'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck, TrendingUp, Smartphone } from 'lucide-react';

const mockScreens = [
  {
    title: 'Market Genius',
    category: '100K+ Active Traders',
    image: '/projects/market-genius/preview.jpg',
    tag: 'Zustand + MMKV',
    badgeIcon: TrendingUp,
    badgeText: '100K+ Concurrent Users',
  },
  {
    title: 'Zuperior Forex',
    category: 'Multi-Currency Wallet',
    image: '/projects/zuperior/preview.jpg',
    tag: 'Realtime WebSockets',
    badgeIcon: Zap,
    badgeText: 'Sub-second Order Sync',
  },
  {
    title: 'YENOM Finance',
    category: 'AU Bank Integration',
    image: '/projects/yenom/preview.jpg',
    tag: 'Open Banking APIs',
    badgeIcon: ShieldCheck,
    badgeText: 'Led 3 Developers',
  },
  {
    title: 'Vero Moda',
    category: 'Luxury Fashion E-Comm',
    image: '/projects/veromoda/preview.jpg',
    tag: 'Juspay SDK + AI Match',
    badgeIcon: Sparkles,
    badgeText: '60 FPS Native UI',
  },
];

export function PhoneMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotateX, setRotateX] = useState(-6);
  const [rotateY, setRotateY] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockScreens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    setRotateY(normX * 18);
    setRotateX(-normY * 18);
  };

  const handleMouseLeave = () => {
    setRotateX(-6);
    setRotateY(12);
  };

  const current = mockScreens[currentIndex];
  const BadgeIcon = current.badgeIcon;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 md:p-8 perspective-1000 select-none"
    >
      {/* Background radial glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-400/30 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Floating 3D Phone Container */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          y: [0, -10, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { type: 'spring', stiffness: 100, damping: 20 },
          rotateY: { type: 'spring', stiffness: 100, damping: 20 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-[270px] sm:w-[310px] h-[540px] sm:h-[610px] rounded-[48px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(139,92,246,0.3)] border border-slate-700/60"
      >
        {/* Outer Phone Bezel & Metallic edge */}
        <div className="relative w-full h-full rounded-[38px] bg-slate-950 overflow-hidden border border-slate-800 flex flex-col shadow-inner">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5 border border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-cyan-500/80" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>

          {/* Screen Display with Carousel Images */}
          <div className="relative w-full h-full bg-slate-950 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, 310px"
                  className="object-cover object-top"
                />

                {/* Gradient overlay for bottom meta info */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4 pb-6" />

                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-lg shadow-black/60">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        {current.tag}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {currentIndex + 1} / {mockScreens.length}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-display truncate">
                      {current.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 truncate">
                      {current.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Screen Glass Glare reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-400/40 rounded-full z-30" />
        </div>

        {/* Carousel indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {mockScreens.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`View screenshot ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-gradient-to-r from-violet-400 to-cyan-400 shadow-sm shadow-cyan-500/50'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Badge 1: Top Left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-4 -left-4 sm:-left-8 z-30 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-xl shadow-xl shadow-black/50"
      >
        <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
          <BadgeIcon className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
            Engineered For
          </div>
          <div className="text-xs font-bold text-white font-display">
            {current.badgeText}
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Bottom Right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -right-4 sm:-right-8 z-30 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl shadow-black/50"
      >
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
          <Smartphone className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
            Performance
          </div>
          <div className="text-xs font-bold text-white font-display">
            60 FPS Native Speed
          </div>
        </div>
      </motion.div>
    </div>
  );
}
