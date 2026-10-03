'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  Share2,
} from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900/95 border border-white/10 shadow-2xl shadow-black/80 z-10 text-left p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Category & Company */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
              {project.category}
            </span>
            {project.company && (
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-violet-400" />
                {project.company}
              </span>
            )}
            {project.timeline && (
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">
                {project.timeline}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-300 font-medium mb-6">
            {project.tagline}
          </p>

          {/* Screenshot Banner */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-xl bg-slate-950">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-violet-400" />
                Role: {project.role}
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-violet-600/30"
                >
                  <span>Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Impact Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-slate-900/40 border border-violet-500/30 mb-8">
            <div className="text-xs uppercase font-mono tracking-wider text-violet-300 font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Key Engineering Impact
            </div>
            <p className="text-sm sm:text-base font-bold text-white">
              {project.impact}
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-8">
            {/* Overview & My Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                  Project Overview
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/50 border border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                  My Role & Responsibilities
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.myRole}
                </p>
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Technical Contributions
              </h3>
              <div className="space-y-2.5">
                {project.keyContributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div>
                <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Engineering Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/40 border border-white/5 space-y-2"
                    >
                      <div className="text-xs font-bold text-amber-300">
                        Challenge: <span className="font-normal text-slate-300">{item.challenge}</span>
                      </div>
                      <div className="text-xs font-bold text-emerald-300">
                        Solution: <span className="font-normal text-slate-300">{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div>
              <h3 className="text-base font-bold font-display text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Key Outcomes & Business Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-violet-950/30 border border-violet-500/20 text-xs text-violet-200 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 flex items-center gap-2 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Play Store</span>
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 flex items-center gap-2 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>App Store</span>
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
              >
                <span>Read Full Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
