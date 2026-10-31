import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { studentData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-bg/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center font-bold text-white text-xs">
                JF
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {studentData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {studentData.tagline}
            </p>
            <p className="text-xs text-slate-400">{studentData.university}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Academic details
            </h2>
            <dl className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 text-xs">
              {studentData.academicDetails.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-slate-500">{label}</dt>
                  <dd className={label === 'NOBP' ? 'text-amber-300 font-mono' : 'text-slate-200 font-medium'}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-3 md:text-right flex flex-col md:items-end justify-between">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                Connect
              </h2>
              <div className="flex items-center md:justify-end gap-3">
                <a
                  href="https://github.com/jonnyficky2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  aria-label="Jonny Ficky on GitHub"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="p-2.5 rounded-xl bg-brand-indigo/20 hover:bg-brand-indigo/30 text-indigo-300 hover:text-white border border-brand-indigo/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  aria-label="Scroll back to top"
                >
                  <ArrowUp className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              React · TypeScript · Vite
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>&copy; {new Date().getFullYear()} {studentData.name}</div>
          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
