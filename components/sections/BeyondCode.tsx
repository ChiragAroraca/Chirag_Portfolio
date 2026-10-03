'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Activity,
  Radio,
  Volume2,
  Sparkles,
  Headphones,
  Flame,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function BeyondCode() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);
  const [ballBounces, setBallBounces] = useState(0);

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Beyond The Screen"
          title="Creative Energy & Life Outside The Terminal"
          subtitle="Software is what I build, but songwriting, melodies, and basketball keep my perspective grounded."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Music & Songwriting (with Animated Equalizer) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-violet-600/15 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-600/25 transition-all" />

            <div>
              {/* Header Icon + Interactive Equalizer */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Music className="w-6 h-6" />
                </div>

                {/* Animated Audio Equalizer Visualizer */}
                <button
                  type="button"
                  aria-label="Toggle Equalizer"
                  onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                  className="flex items-end gap-1 h-8 px-3 py-1.5 rounded-xl bg-violet-950/40 border border-violet-500/30 hover:border-violet-400/50 transition-colors"
                >
                  <span
                    className={`w-1 bg-violet-400 rounded-full ${
                      isPlayingMusic ? 'eq-bar-1' : 'h-2'
                    }`}
                  />
                  <span
                    className={`w-1 bg-cyan-400 rounded-full ${
                      isPlayingMusic ? 'eq-bar-2' : 'h-3'
                    }`}
                  />
                  <span
                    className={`w-1 bg-indigo-400 rounded-full ${
                      isPlayingMusic ? 'eq-bar-3' : 'h-4'
                    }`}
                  />
                  <span
                    className={`w-1 bg-fuchsia-400 rounded-full ${
                      isPlayingMusic ? 'eq-bar-4' : 'h-2'
                    }`}
                  />
                  <span className="ml-1.5 text-[10px] font-mono font-bold text-violet-300">
                    {isPlayingMusic ? 'LIVE' : 'MUTED'}
                  </span>
                </button>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-2">
                Flow State
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Songwriting & Lyrics
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Writing lyrics and crafting melodies requires the same attention to rhythm, harmony, and structure as building clean software architectures. It gives me a deep appreciation for pacing and fluid transitions.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-violet-400">
              <Headphones className="w-4 h-4" />
              <span>Acoustic melodies & songwriting</span>
            </div>
          </motion.div>

          {/* Card 2: Basketball (with Interactive Bouncing Ball) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-600/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-600/25 transition-all" />

            <div>
              {/* Header Icon + Interactive Bouncing Ball */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Activity className="w-6 h-6" />
                </div>

                {/* Clickable Bouncing Ball micro-interaction */}
                <motion.button
                  type="button"
                  onClick={() => setBallBounces((b) => b + 1)}
                  whileTap={{ scale: 0.85 }}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2 hover:bg-cyan-900/30 transition-colors"
                >
                  <motion.span
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-base"
                  >
                    🏀
                  </motion.span>
                  <span className="font-bold">Bounces: {ballBounces}</span>
                </motion.button>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                Team Spirit & Reflexes
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Basketball Court
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Basketball teaches court awareness, swift pivots, and selfless passing — qualities that directly translate into leading agile dev teams and making high-stakes technical tradeoffs under time pressure.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Flame className="w-4 h-4" />
              <span>Full-court agility & strategy</span>
            </div>
          </motion.div>

          {/* Card 3: Creative Audio Production */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-600/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Radio className="w-6 h-6" />
                </div>

                <div className="px-3 py-1 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Stereo EQ</span>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
                Sound Design
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Music Production & Beats
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Balancing frequencies in an audio mixer is remarkably similar to balancing micro-animations, latency benchmarks, and component lifecycles — every layer has its pocket to shine.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-indigo-400">
              <Sparkles className="w-4 h-4" />
              <span>Creative balance & focus</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
