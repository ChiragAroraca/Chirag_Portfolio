import React from 'react';
import Link from 'next/link';
import { Smartphone, Home, ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-3xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto mb-6 shadow-2xl shadow-violet-600/30">
          <Terminal className="w-10 h-10" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-semibold mb-4">
          404: Screen Not Rendered
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          Null Pointer Exception
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The route you are navigating to does not exist in the React Navigation stack or has been refactored.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
