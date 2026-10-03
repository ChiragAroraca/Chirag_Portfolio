'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  Building2,
  Calendar,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering fast mobile apps with craft & discipline."
          subtitle="A look into my journey, engineering philosophy, education, and proven track record."
        />

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full pointer-events-none transition-all group-hover:from-violet-500/20" />
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-white font-display mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio + Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Card with Photo & Snapshot */}
            <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    📍 {personalInfo.location}
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-violet-600/90 backdrop-blur-md text-xs font-bold text-white shadow-lg">
                    Techugo (Noida)
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white">Base:</strong> {personalInfo.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white">Current Role:</strong> {personalInfo.workplaceLocation}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span>
                    <strong className="text-white">Specialty:</strong> High-Concurrency React Native
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education & Certification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Bio Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-violet-400" />
                <span>Crafting High-Performance Mobile Experiences</span>
              </h3>

              {personalInfo.bioParagraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Education & Certification Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-violet-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono font-semibold mb-2">
                  CGPA {personalInfo.education.grade}
                </div>
                <h4 className="text-base font-bold text-white font-display mb-1">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-xs font-semibold text-slate-300 mb-2">
                  {personalInfo.education.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-3">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{personalInfo.education.timeline}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {personalInfo.education.description}
                </p>
              </div>

              {/* Meta Certification Card */}
              <div className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono font-semibold mb-2">
                  Meta Verified
                </div>
                <h4 className="text-base font-bold text-white font-display mb-1">
                  {personalInfo.certification.name}
                </h4>
                <p className="text-xs font-semibold text-slate-300 mb-2">
                  Issued by {personalInfo.certification.issuer}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {personalInfo.certification.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
