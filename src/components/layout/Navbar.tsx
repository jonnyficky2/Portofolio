import React, { useEffect, useState } from 'react';
import { ExternalLink, Menu, Terminal, X } from 'lucide-react';
import { studentData } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;

      for (const { href } of navItems) {
        const section = href.slice(1);
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  const renderNavItems = (mobile = false) =>
    navItems.map((item) => {
      const isActive = activeSection === item.href.slice(1);
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={mobile ? handleNavClick : undefined}
          aria-current={isActive ? 'location' : undefined}
          className={`${mobile
            ? 'block px-4 py-2.5 rounded-xl text-sm'
            : 'text-xs px-3.5 py-1.5 rounded-full'
          } font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
            isActive
              ? 'bg-brand-indigo text-white'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          {item.label}
        </a>
      );
    });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 group rounded-lg p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo via-indigo-500 to-brand-blue flex items-center justify-center font-bold text-white shadow-md shadow-brand-indigo/20 group-hover:scale-105 transition-transform">
              <span className="text-sm font-extrabold tracking-wider">JF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors">
                {studentData.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <Terminal className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                {studentData.major}
              </span>
            </div>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            {renderNavItems()}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-300 font-semibold">
                Personal Portfolio
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {studentData.university}
              </div>
            </div>
            <a
              href="https://github.com/jonnyficky2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden glass-nav border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-2"
        >
          {renderNavItems(true)}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
              <span className="text-white font-semibold block">{studentData.university}</span>
              <span>{studentData.major}</span>
              <span className="mt-1 block font-mono text-[10px] text-amber-300">
                NOBP: {studentData.nobp}
              </span>
            </div>
            <a
              href="https://github.com/jonnyficky2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-medium hover:bg-white/15 border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
