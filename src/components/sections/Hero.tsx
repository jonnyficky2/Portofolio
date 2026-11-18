import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Mail, GraduationCap, Download } from 'lucide-react';
import { studentData } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Gradients (No heavy garish glowing) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-brand-indigo/15 via-brand-violet/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar with status indicator */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative inline-block mb-6"
        >
          <Avatar
            src={studentData.avatarUrl}
            alt={studentData.name}
            size="xl"
            glow
          />
          <span
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-dark-bg ring-1 ring-emerald-400/40"
            title="Available"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="block mb-8"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-1.5 sm:pr-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-glass">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-indigo/20 border border-brand-indigo/30 text-indigo-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>Welcome to My Portfolio</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono px-2 py-0.5">
              <GraduationCap className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-slate-200">{studentData.major}</span>
            </div>
          </div>
        </motion.div>

        {/* Small Intro Greeting */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs sm:text-sm font-mono tracking-widest text-brand-blue uppercase mb-3"
        >
          HELLO, I’M
        </motion.p>

        {/* Main Name Heading */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          <span className="text-gradient hover:text-gradient-accent transition-all duration-300">
            {studentData.name}
          </span>
        </motion.h1>

        {/* Dual Sub-heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-base sm:text-xl font-medium text-slate-300 mb-6"
        >
          <span className="text-slate-200 font-semibold">{studentData.role}</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-brand-indigo font-semibold">Personal Developer Portfolio</span>
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed mb-10"
        >
          {studentData.tagline}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl mx-auto mb-10 p-4 rounded-2xl bg-dark-card/70 border border-white/10 backdrop-blur-lg shadow-glass text-left"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="text-xs font-semibold text-slate-200 font-mono uppercase tracking-wider">
                Academic profile
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Student</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">Name</span>
              <span className="font-semibold text-slate-200 text-sm">{studentData.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">NOBP</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-xs font-medium">
                  {studentData.nobp}
                </span>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-500 block text-[10px] uppercase font-mono">University</span>
              <span className="font-medium text-slate-200">{studentData.university}</span>
            </div>
          </div>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            icon={<FolderGit2 className="w-4 h-4" />}
          >
            Explore Projects
          </Button>

          <Button
            href={`${import.meta.env.BASE_URL}cv-jonnyficky.pdf`}
            download="CV-JonnyFicky.pdf"
            variant="secondary"
            size="lg"
            icon={<Download className="w-4 h-4" />}
          >
            Download CV
          </Button>

          <Button
            href="#contact"
            variant="outline"
            size="lg"
            icon={<Mail className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Subtle Scroll Down Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-col items-center justify-center gap-2 text-xs text-slate-500"
        >
          <span className="font-mono text-[11px]">Scroll to discover</span>
          <a
            href="#about"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
