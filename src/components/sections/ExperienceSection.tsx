import React from 'react';
import {
  Briefcase,
  Sparkles,
  Layers,
  Zap,
  GitPullRequest
} from 'lucide-react';
import { EXPERIENCES } from '../../data/experience';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCES[0];

  const workflowSteps = [
    {
      step: '01',
      title: 'Requirement Architecture & UI Prototyping',
      desc: 'Collaborating directly with business owners to translate their brand objectives into responsive, accessible website layouts.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'AI-Augmented Accelerated Development',
      desc: 'Utilizing modern AI-assisted engineering tools to accelerate development speed, streamline component iteration, and maintain clean code.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Cloud Deployment & Client Handover',
      desc: 'Deploying production builds to Vercel edge networks, managing custom DNS configurations, and verifying cross-device performance.',
      icon: GitPullRequest,
    },
  ];

  return (
    <SectionWrapper id="experience" bgVariant="primary">
      <ScrollReveal delay={0}>
        <SectionHeading
          eyebrow="PRACTICAL WORK HISTORY"
          title="Freelance Web Development"
          description="Proven track record of turning business requirements into deployed, production-ready web experiences."
        />
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={100}>
          <div className="relative p-7 sm:p-9 rounded-3xl bg-[#13131D]/95 border border-white/[0.08] hover:border-[#8B5CF6]/40 backdrop-blur-xl shadow-2xl transition-all duration-300">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#A78BFA] font-medium">
                    {exp.type}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge label={exp.period} variant="violet" size="md" dot />
              </div>
            </div>

            {/* Overview Statement */}
            <div className="py-6 space-y-2">
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                {exp.description}
              </p>
            </div>

            {/* 3-Step Delivery Workflow Cards */}
            <div className="space-y-3 pb-6">
              <h4 className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-3">
                Delivery Workflow &amp; Engineering Scope:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {workflowSteps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-5 rounded-2xl bg-[#0D0D14] border border-white/[0.04] hover:border-[#8B5CF6]/30 hover:bg-[#151522] transition-all duration-300 flex flex-col justify-between space-y-3 group"
                      style={{ transitionDelay: `${idx * 80}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-[#8B5CF6]/10 text-[#A78BFA] group-hover:scale-110 transition-transform">
                          <Icon size={18} />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#71717A]">
                          {item.step}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h5 className="text-sm font-bold text-[#F5F5F7] leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Deliverables Proof Row */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#71717A] mr-1">Deployed Work:</span>
                <a
                  href="https://alif-perfumes.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#171722] hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-[#F5F5F7] transition-colors"
                >
                  Alif Perfume ↗
                </a>
                <a
                  href="https://wisteriatrust.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#171722] hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-[#F5F5F7] transition-colors"
                >
                  Wisteria Trust ↗
                </a>
                <a
                  href="https://national-auto-garage.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#171722] hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-[#F5F5F7] transition-colors"
                >
                  National Auto Garage ↗
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#71717A] font-mono shrink-0">
                <Sparkles size={13} className="text-[#8B5CF6]" />
                <span>Independent Delivery</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};
