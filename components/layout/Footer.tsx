'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Heart,
  Mail,
  Code2,
  Sparkles,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <Link href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-cyan-300">
                  CA
                </div>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Mobile Application Developer (React Native & Cross-Platform). Dedicated to high-concurrency systems, 60 FPS fluidity, and clean architecture.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>Based in Jaipur, India</span>
              <span>•</span>
              <span className="text-emerald-400">Available for Opportunities</span>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Back to Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to Top"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-xs text-slate-500 text-left md:text-right">
              © {new Date().getFullYear()} Chirag Arora. Built with Next.js, Tailwind CSS & Framer Motion.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
