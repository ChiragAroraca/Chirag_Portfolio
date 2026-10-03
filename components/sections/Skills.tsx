'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Database,
  Layers,
  Sparkles,
  Zap,
  Users,
  Rocket,
  Shield,
  CheckCircle2,
  Terminal,
  Cpu,
  Globe,
} from 'lucide-react';
import { skillsData, marqueeSkills, workPrinciples } from '@/data/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';

const categoryIcons: Record<string, React.ElementType> = {
  'Mobile Development': Smartphone,
  'State Management & Data': Database,
  'Platforms & Deployment': Layers,
  'Integrations & Native SDKs': Sparkles,
  'Backend & Database': Terminal,
};

const principleIcons: Record<string, React.ElementType> = {
  Zap: Zap,
  Layers: Layers,
  Users: Users,
  Rocket: Rocket,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <SectionHeading
          badge="Technical Arsenal"
          title="Skills, Tools & Engineering Principles"
          subtitle="Specialized cross-platform mobile stack tailored for speed, resilience, and scale."
        />

        {/* Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-4 mb-16 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-xs font-mono font-medium text-slate-300"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
            }`}
          >
            All Skills
          </button>
          {skillsData.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategory(group.category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === group.category
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30 border border-violet-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Cpu;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-violet-600/20 border border-violet-500/40 text-violet-200 shadow-sm shadow-violet-500/10 font-semibold'
                          : 'bg-slate-800/80 border border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How I Work Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Engineering Philosophy
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              How I Work & Deliver Value
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workPrinciples.map((item, idx) => {
              const Icon = principleIcons[item.icon] || Zap;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono font-semibold mb-2">
                    {item.badge}
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
