'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 z-[100] origin-left shadow-[0_0_12px_rgba(139,92,246,0.6)]"
      style={{ scaleX }}
    />
  );
}
