'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { experiencesData } from '@/data/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work History"
          title="Career Journey & Key Impact"
          subtitle="A track record of high-velocity feature shipping, performance architecture, and team leadership."
        />

        <div ref={containerRef} className="relative mt-16">
          {/* Vertical Drawing Line on Desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-800 pointer-events-none hidden sm:block">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-400 origin-top shadow-[0_0_12px_rgba(139,92,246,0.8)]"
              style={{ scaleY: pathLength, height: '100%' }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiencesData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                        item.current
                          ? 'bg-violet-600 border-violet-300 text-white shadow-violet-500/50 scale-110'
                          : 'bg-slate-900 border-slate-700 text-slate-400'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Container (Alternating left/right on md screens) */}
                  <div
                    className={`w-full md:w-1/2 pl-0 sm:pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300"
                    >
                      {/* Top Header Row */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Position
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-mono">
                          <Calendar className="w-3.5 h-3.5 text-violet-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                        {item.role}
                      </h3>
                      <div
                        className={`flex flex-wrap items-center gap-3 text-sm text-slate-300 font-semibold mb-4 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="text-violet-400 flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {item.company}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 flex items-center gap-1 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed text-left">
                        {item.summary}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2.5 mb-6 text-left">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Projects Preview */}
                      {item.keyProjects && item.keyProjects.length > 0 && (
                        <div className="mb-6 pt-4 border-t border-white/10 text-left">
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                            Featured Deliverables:
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {item.keyProjects.map((kp, pIdx) => (
                              <div
                                key={pIdx}
                                className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
                              >
                                <span className="font-bold text-white shrink-0">
                                  {kp.name}:
                                </span>
                                <span className="text-slate-400">
                                  {kp.description}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills Tags */}
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
