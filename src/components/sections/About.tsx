import React from 'react';
import { GraduationCap } from 'lucide-react';
import { studentData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { FadeIn } from '../ui/Motion';

export const About: React.FC = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <SectionHeading
          badge="About"
          title="A little about me"
          subtitle="Academic background and a snapshot of the person behind this portfolio."
        />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <FadeIn delay={0.1} className="lg:col-span-7 flex flex-col">
          <Card glow className="h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <Avatar
                src={studentData.avatarUrl}
                alt={studentData.name}
                size="lg"
                glow
              />
              <div>
                <h3 className="text-xl font-bold text-white">{studentData.name}</h3>
                <p className="text-xs font-mono text-brand-blue mt-0.5">{studentData.role}</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {studentData.bioIntro}
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-5 flex flex-col">
          <Card className="h-full">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-5">
              <GraduationCap className="w-5 h-5 text-brand-blue" aria-hidden="true" />
              Academic details
            </h3>
            <dl className="space-y-4">
              {studentData.academicDetails.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <dt className="text-[10px] uppercase tracking-wider font-mono text-slate-500">
                    {label}
                  </dt>
                  <dd className={`text-sm ${label === 'NOBP' ? 'font-mono text-amber-300' : 'text-slate-200'}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </FadeIn>
      </div>
    </div>
  </section>
);
