import React from 'react';
import { Github, ExternalLink, Sparkles, Folder, Layers, Clock, HelpCircle } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const featuredProject = projectsData.find((p) => p.isFeatured);
  const otherProjects = projectsData.filter((p) => !p.isFeatured);

  const getStatusBadge = (status: (typeof projectsData)[number]['status']) => {
    switch (status) {
      case 'Active Development':
        return (
          <Badge variant="primary" size="sm" icon={<Clock className="w-3 h-3 text-brand-blue" />}>
            Active Development
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" size="sm" icon={<HelpCircle className="w-3 h-3 text-slate-400" />}>
            Details unverified
          </Badge>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Projects & repositories"
          subtitle="LifeFlow ditampilkan sebagai proyek unggulan. Detail proyek lain mengikuti informasi publik yang sudah diverifikasi."
        />

        {/* Featured Flagship Project: LifeFlow */}
        {featuredProject && (
          <div className="mb-14">
            <Card glow className="border-brand-indigo/30 bg-gradient-to-br from-dark-card via-dark-card to-brand-indigo/5 p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="accent" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                      Flagship Project
                    </Badge>
                    {getStatusBadge(featuredProject.status)}
                    <span className="text-xs text-slate-400 font-mono">
                      {featuredProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Action Links */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {featuredProject.liveUrl && (
                      <Button
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="md"
                        icon={<ExternalLink className="w-4 h-4" />}
                      >
                        Open live project
                      </Button>
                    )}
                    {featuredProject.githubUrl && (
                      <Button
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="md"
                        icon={<Github className="w-4 h-4" />}
                        iconRight={<ExternalLink className="w-3.5 h-3.5 text-white/70" />}
                      >
                        View LifeFlow repository
                      </Button>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div className="w-full rounded-2xl bg-dark-bg/80 border border-white/10 p-6 text-center space-y-4 shadow-glass">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-indigo/30">
                      <Layers className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">LifeFlow</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Simple Daily Tracker app with PWA features.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Development Underway
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <Folder className="w-4 h-4 text-brand-blue" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Other public repositories
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Names and primary languages are based on verified GitHub repository metadata; other details remain unverified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between h-full group hover:border-white/20 transition-all">
              <div className="space-y-3.5">
                {/* Header info */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-mono text-brand-blue uppercase tracking-wider">
                    {project.category}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

              </div>

              <div className="pt-5 mt-5 border-t border-white/5 space-y-3">
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Lihat Repo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-brand-blue hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                      >
                        <span>Live demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
