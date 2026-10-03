import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { BeyondCode } from '@/components/sections/BeyondCode';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#07090e] selection:bg-violet-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
