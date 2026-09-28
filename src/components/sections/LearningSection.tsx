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
        return <Code2 size={22} className="text-[#8B5CF6]" />;
      case 'java-dsa':
        return <Cpu size={22} className="text-[#A78BFA]" />;
      case 'modern-software-eng':
        return <Compass size={22} className="text-[#8B5CF6]" />;
      default:
        return <BookOpen size={22} className="text-[#8B5CF6]" />;
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

      {/* 3 Interactive Learning Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {LEARNING_ITEMS.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 120} className="flex flex-col">
            <div className="group relative flex flex-col justify-between p-7 rounded-3xl bg-gradient-to-b from-[#14141E] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)] hover:-translate-y-1 h-full">
              {/* Ambient Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/05 rounded-full blur-2xl pointer-events-none group-hover:bg-[#8B5CF6]/15 transition-colors" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#1A1A28] border border-white/[0.08] group-hover:border-[#8B5CF6]/40 transition-colors shadow-inner">
                    {getLearningIcon(item.id)}
                  </div>
                  <Badge label="In Progress" variant="violet" size="sm" dot />
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Topics Pill List */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
                  Focus Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-xl bg-[#0E0E16] border border-white/[0.05] text-[#D1D5DB] group-hover:border-[#8B5CF6]/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" aria-hidden="true" />
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
