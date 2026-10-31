import React from 'react';
import { Github, Mail, Linkedin, AlertCircle, ExternalLink } from 'lucide-react';
import { socialLinks } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const Contact: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':   return <Github className="w-5 h-5" />;
      case 'Mail':     return <Mail className="w-5 h-5" />;
      case 'Linkedin': return <Linkedin className="w-5 h-5" />;
      default:         return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getIconColors = (iconName: string, isPlaceholder: boolean) => {
    if (isPlaceholder) return 'bg-white/5 border-white/10 text-slate-400';
    switch (iconName) {
      case 'Github':   return 'bg-white/10 border-white/20 text-white hover:bg-white/15';
      case 'Mail':     return 'bg-sky-500/15 border-sky-500/30 text-sky-300 hover:bg-sky-500/20';
      case 'Linkedin': return 'bg-blue-500/15 border-blue-500/30 text-blue-300 hover:bg-blue-500/20';
      default:         return 'bg-white/5 border-white/10 text-slate-300';
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Terbuka untuk diskusi tentang teknologi, proyek kolaborasi, atau sekadar menyapa."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {socialLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.isPlaceholder ? (
                <Card className="flex flex-col items-center text-center gap-3 opacity-60 cursor-not-allowed select-none">
                  <div className={`p-3 rounded-xl border ${getIconColors(link.icon, true)}`}>
                    {getIcon(link.icon)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400">{link.label}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">{link.value}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400/80 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    Belum dikonfirmasi
                  </div>
                </Card>
              ) : (
                <a
                  href={link.url ?? '#'}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                >
                  <Card className={`flex flex-col items-center text-center gap-3 transition-all group`}>
                    <div className={`p-3 rounded-xl border transition-colors ${getIconColors(link.icon, false)}`}>
                      {getIcon(link.icon)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{link.value}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <ExternalLink className="w-3 h-3" />
                      Terverifikasi
                    </div>
                  </Card>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
