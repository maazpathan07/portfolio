import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects" bgVariant="secondary">
      <ScrollReveal delay={0}>
        <SectionHeading
          eyebrow="PROVEN CLIENT DELIVERY"
          title="Featured Client Projects &amp; Live Web Deployments"
          description="Production web platforms created for businesses and organizations, demonstrating end-to-end design, implementation, and cloud deployment."
        />
      </ScrollReveal>

      {/* 3 High-Impact Project Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
        {PROJECTS.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 120}>
            <ProjectCard project={project} index={index} />
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Client Reassurance Card */}
      <ScrollReveal delay={150} className="mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14141E] via-[#1A1A28] to-[#14141E] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] shrink-0">
              <Zap size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#F5F5F7]">
                Need a modern, high-performance website for your brand?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                From concept to live Vercel cloud deployment, I deliver responsive digital experiences with clean code.
              </p>
            </div>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0 w-full sm:w-auto"
          >
            Start a Project Discussion
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
