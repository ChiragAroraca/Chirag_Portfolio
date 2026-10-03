'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
  Sparkles,
  Smartphone,
  Briefcase,
  Layers,
  Heart,
  Send,
  User,
} from 'lucide-react';
import { personalInfo } from '@/data/personal';

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Layers },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Smartphone },
  { name: 'Beyond Code', href: '#beyond-code', icon: Heart },
  { name: 'Contact', href: '#contact', icon: Send },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'beyond-code', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-white to-cyan-300 group-hover:scale-105 transition-transform">
                CA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight text-base group-hover:text-violet-300 transition-colors">
                Chirag Arora
              </span>
              <span className="text-[11px] text-violet-400 font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                React Native Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-inner shadow-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/80 to-indigo-600/80 border border-violet-400/40 shadow-sm shadow-violet-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                aria-label="Toggle Theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform rotate-0 hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 text-violet-400" />
                )}
              </button>
            )}

            {/* Resume Button */}
            <a
              href={personalInfo.resumePdf}
              download="Chirag_Arora_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md shadow-violet-600/25 border border-violet-400/30 transition-all hover:scale-[1.02]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                type="button"
                aria-label="Toggle Theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-300"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-violet-400" />
                )}
              </button>
            )}

            <button
              type="button"
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-violet-400" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={personalInfo.resumePdf}
                  download="Chirag_Arora_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
