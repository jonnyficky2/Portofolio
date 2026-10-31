import React from 'react';
import { GraduationCap, UserRound } from 'lucide-react';
import { studentData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const About: React.FC = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        badge="About"
        title="A little about me"
        subtitle="Academic background and a snapshot of the person behind this portfolio."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <Card glow className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20">
              <UserRound className="w-5 h-5 text-brand-blue" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white">{studentData.name}</h3>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {studentData.bioIntro}
          </p>
        </Card>

        <Card className="lg:col-span-5">
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
      </div>
    </div>
  </section>
);
