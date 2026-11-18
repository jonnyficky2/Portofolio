import React from 'react';
import { GraduationCap, Layers, Code2, Sparkles } from 'lucide-react';
import { journeyMilestones } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';

export const Journey: React.FC = () => {
  const getIcon = (iconType: 'academic' | 'project' | 'skill') => {
    switch (iconType) {
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-brand-blue" />;
      case 'project':
        return <Layers className="w-5 h-5 text-brand-indigo" />;
      case 'skill':
        return <Sparkles className="w-5 h-5 text-brand-violet" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const getIconBg = (iconType: 'academic' | 'project' | 'skill') => {
    switch (iconType) {
      case 'academic': return 'bg-brand-blue/20 border-brand-blue/40';
      case 'project':  return 'bg-brand-indigo/20 border-brand-indigo/40';
      case 'skill':    return 'bg-brand-violet/20 border-brand-violet/40';
      default:         return 'bg-white/10 border-white/20';
    }
  };

  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="Learning Journey"
            title="Learning Journey & Technology Exploration"
            subtitle="A record of my academic growth and technical exploration as an Information Systems student."
            align="center"
          />
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-indigo/40 to-transparent hidden sm:block" />

          <StaggerContainer className="space-y-10">
            {journeyMilestones.map((milestone, idx) => (
              <StaggerItem key={idx}>
                <div className="relative sm:pl-20 group">
                  {/* Icon Node on the vertical line */}
                  <div
                    className={`absolute left-0 top-0 w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 hidden sm:flex ${getIconBg(milestone.iconType)}`}
                  >
                    {getIcon(milestone.iconType)}
                  </div>

                  {/* Card content */}
                  <div className="glass-card rounded-2xl p-5 sm:p-6 hover:border-brand-indigo/30 transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" size="sm">{milestone.period}</Badge>
                      <span className="text-[11px] text-slate-400 font-mono">{milestone.institutionOrContext}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {milestone.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Footer note */}
        <FadeIn delay={0.2}>
          <p className="text-center text-xs text-slate-500 font-mono mt-12">
            This journey is still ongoing — every project is a new chapter.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

