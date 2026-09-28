import React from 'react';
import { Compass, BookOpen, Code2, Cpu } from 'lucide-react';
import { LEARNING_ITEMS } from '../../data/learning';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LearningSection: React.FC = () => {
  const getLearningIcon = (id: string) => {
    switch (id) {
      case 'mern-stack':
        return <Code2 size={18} className="text-[#8B5CF6]" />;
      case 'java-dsa':
        return <Cpu size={18} className="text-[#A78BFA]" />;
      case 'modern-software-eng':
        return <Compass size={18} className="text-[#8B5CF6]" />;
      default:
        return <BookOpen size={18} className="text-[#8B5CF6]" />;
    }
  };

  return (
    <SectionWrapper id="learning" bgVariant="primary">
      <ScrollReveal delay={0}>
        <SectionHeading
          eyebrow="CONTINUOUS EXPANSION"
          title="Active Learning &amp; Technical Exploration"
          description="Focused areas where I am actively deepening my full-stack engineering knowledge, algorithmic problem solving, and architecture design."
        />
      </ScrollReveal>

      {/* 3 Compact & Sleek Learning Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {LEARNING_ITEMS.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 100} className="flex flex-col">
            <div className="group relative flex flex-col justify-between p-4.5 sm:p-5 rounded-2xl bg-gradient-to-b from-[#13131E] via-[#0F0F16] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_28px_-8px_rgba(139,92,246,0.2)] hover:-translate-y-0.5 h-full">
              {/* Subtle ambient corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B5CF6]/05 rounded-full blur-xl pointer-events-none group-hover:bg-[#8B5CF6]/15 transition-colors" />

              <div className="space-y-2.5">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#1A1A28] border border-white/[0.08] group-hover:border-[#8B5CF6]/40 transition-colors shadow-inner">
                    {getLearningIcon(item.id)}
                  </div>
                  <Badge label="In Progress" variant="violet" size="sm" dot />
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#F5F5F7] tracking-tight group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Topics Pill List */}
              <div className="mt-3.5 pt-3 border-t border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
                  Focus Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[#0E0E16] border border-white/[0.05] text-[#D1D5DB] group-hover:border-[#8B5CF6]/20 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#8B5CF6]" aria-hidden="true" />
                      <span>{topic}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};
