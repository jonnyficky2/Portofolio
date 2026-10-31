import React from 'react';
import { Code2, Database, Terminal, Info } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand-blue" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-indigo" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-brand-violet" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Stack & repositories"
          title="Tools and repository languages"
          subtitle="Tools configured in this portfolio and primary languages reported by the linked public repositories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5 flex-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <Badge variant="outline" size="sm">
                          {skill.level}
                        </Badge>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
                      <Info className="w-3 h-3 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{skill.context}</span>
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
