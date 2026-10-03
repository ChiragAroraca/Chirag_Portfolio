'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FileDown,
  ArrowRight,
  Mail,
  Sparkles,
  MapPin,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PhoneMockup } from '@/components/sections/PhoneMockup';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = personalInfo.rolesRotating[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullRole) {
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.rolesRotating.length);
      typingSpeed = 500;
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentFullRole) {
        setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
      } else if (isDeleting) {
        setDisplayedText(currentFullRole.slice(0, displayedText.length - 1));
      } else {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Aurora Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pulsing Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-sm shadow-emerald-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-400 text-xs font-medium backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>Jaipur, India</span>
              </div>
            </div>

            {/* Profile Avatar / Monogram Header row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-violet-500 via-indigo-500 to-cyan-400 shadow-xl shadow-violet-500/20">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest font-mono text-violet-400 font-semibold mb-0.5">
                  Portfolio of
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                  {personalInfo.name}
                </h2>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1] mb-4">
              I build <span className="gradient-text">fast, scalable</span> mobile apps for iOS & Android.
            </h1>

            {/* Typing / Rotating Role Bar */}
            <div className="h-9 flex items-center gap-2 mb-6 text-lg sm:text-xl font-mono text-cyan-300">
              <span className="text-slate-500">&gt;</span>
              <span className="text-white font-semibold">{displayedText}</span>
              <span className="w-2.5 h-5 bg-cyan-400 animate-pulse" />
            </div>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              {personalInfo.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <MagneticButton
                href="#projects"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href={personalInfo.resumePdf}
                download="Chirag_Arora_Resume.pdf"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </MagneticButton>
            </div>

            {/* Social Links & Trust Row */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-medium">
                  Connect:
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chirag Arora LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chirag Arora GitHub"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Chirag Arora"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>React Native • Expo • TypeScript • MMKV</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
