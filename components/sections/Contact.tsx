'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  Eye,
  EyeOff,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    // Simulate submission delay
    setTimeout(() => {
      setFormStatus('success');

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8b5cf6', '#06b6d4', '#6366f1', '#ec4899'],
        });
      } catch (err) {
        console.error('Confetti error', err);
      }

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          subtitle="Looking for a high-impact React Native engineer to architect or scale your mobile applications? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Connect Box */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Direct Channels
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Open to High-Impact Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Whether you have a full-time Senior React Native opportunity, an urgent performance audit, or an ambitious greenfield app to launch, my inbox is always open.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-violet-300 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    aria-label="Copy email"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Click-to-Reveal Phone Item (Spam Protection) */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {phoneRevealed ? (
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-cyan-300 hover:underline"
                          >
                            {personalInfo.phone}
                          </a>
                        ) : (
                          <span className="text-slate-500 font-mono tracking-wider">
                            +91 ••••••••••
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPhoneRevealed(!phoneRevealed)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {phoneRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Reveal</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between gap-3 hover:border-violet-500/40 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                        in/chirag-arora30
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub Box */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-between gap-3 hover:border-violet-500/40 hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                      <GitHubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                        github.com/chiragarora30
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Fill in your project brief or inquiry. I typically reply within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-1.5"
                  >
                    Project Details / Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your mobile app project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm resize-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center gap-2 text-emerald-200">
                        <CheckCircle2 className="w-4 h-4" /> Message Sent Successfully!
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Mailto direct link note */}
              <div className="mt-4 text-center">
                <a
                  href={`mailto:${personalInfo.email}?subject=Mobile%20App%20Project%20Inquiry`}
                  className="text-xs text-slate-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
                >
                  Or click here to open default mail client directly
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
