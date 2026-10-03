'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  Smartphone,
  Building2,
  Layers,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectModal } from '@/components/sections/ProjectModal';

const categories = ['All', 'Mobile', 'E-commerce', 'Fintech', 'Media'] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background neon orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Portfolio"
          title="Engineered for High-Concurrency & Polish"
          subtitle="Explore cross-platform mobile apps spanning fintech, quick-commerce, enterprise retail, and media."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 border border-violet-400/40 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
              }`}
            >
              {category}
              {category === 'All' && (
                <span className="ml-2 px-1.5 py-0.5 rounded-md bg-white/10 text-[10px]">
                  {projectsData.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl glass-card border border-white/10 hover:border-violet-500/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-violet-600/20"
              >
                {/* Image Container with Hover Preview */}
                <div className="relative w-full h-56 bg-slate-950 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-violet-300">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl bg-violet-600/90 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-violet-600/50 hover:bg-violet-500 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Role & Company */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1.5">
                      <span className="text-violet-400 font-semibold">{project.role}</span>
                      {project.company && (
                        <>
                          <span>•</span>
                          <span>{project.company}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Impact Statement */}
                    <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                      {project.impact}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-[10px] font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-slate-800/40 text-[10px] font-mono text-slate-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      Quick Details
                    </button>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
