import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Building2,
  Calendar,
  Zap,
} from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { personalInfo } from '@/data/personal';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} – Case Study | Chirag Arora Portfolio`,
    description: project.impact,
    openGraph: {
      title: `${project.title} – ${project.tagline}`,
      description: project.impact,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          {/* Header Info */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
                {project.category}
              </span>
              {project.company && (
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" />
                  {project.company}
                </span>
              )}
              {project.timeline && (
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-400 text-xs font-mono">
                  {project.timeline}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Banner Screenshot */}
          <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-slate-900">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-violet-400" />
                <span>Role: {project.role}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
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
                    className="px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
                  >
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>App Store</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Impact Callout */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-slate-900/50 border border-violet-500/30 mb-12 shadow-xl">
            <div className="text-xs uppercase font-mono tracking-wider text-violet-300 font-semibold mb-1 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" /> Core Engineering Achievement
            </div>
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              {project.impact}
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="space-y-12">
            {/* Overview & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <h2 className="text-base font-bold uppercase tracking-wider text-slate-300 font-mono mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <h2 className="text-base font-bold uppercase tracking-wider text-slate-300 font-mono mb-4 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  My Role & Responsibilities
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.myRole}
                </p>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Key Technical Contributions
              </h2>
              <div className="space-y-4">
                {project.keyContributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0 mt-2" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-cyan-400" />
                Technologies & Architecture
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm font-mono text-cyan-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <h2 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  Engineering Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3"
                    >
                      <div className="text-sm font-bold text-amber-300 flex items-start gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs uppercase font-mono">
                          Challenge
                        </span>
                        <span className="text-slate-200 font-medium">{item.challenge}</span>
                      </div>
                      <div className="text-sm font-bold text-emerald-300 flex items-start gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs uppercase font-mono">
                          Solution
                        </span>
                        <span className="text-slate-300 font-medium">{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h2 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-violet-400" />
                Measurable Outcomes & Production Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-violet-950/20 border border-violet-500/20 text-sm text-violet-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Project Footer Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#projects"
                className="px-5 py-3 rounded-2xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                ← All Projects
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
