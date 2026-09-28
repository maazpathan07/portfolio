import React from 'react';
import { Globe, Lock, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="group relative flex flex-col rounded-3xl bg-[#13131D]/90 border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_20px_45px_-10px_rgba(139,92,246,0.2)] hover:-translate-y-1">
      
      {/* =========================================================================
          1. Luxury Browser Viewport Window (Mockup Header)
      ========================================================================= */}
      <div className="bg-[#0D0D14] border-b border-white/[0.06] p-3.5 flex items-center justify-between">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Live URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171722] border border-white/[0.06] text-[11px] font-mono text-[#A1A1AA] max-w-[200px] sm:max-w-xs truncate">
          <Globe size={11} className="text-[#8B5CF6] shrink-0" />
          <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Online</span>
        </div>
      </div>

      {/* =========================================================================
          2. Media Viewport / Brand Visual Banner
      ========================================================================= */}
      <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${project.previewGradient} flex flex-col justify-between p-6 overflow-hidden`}>
        {/* Subtle Matrix Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <Badge label={project.category} variant="zinc" size="sm" />
          <span className="font-mono text-xs font-bold text-white/40">
            0{index + 1}
          </span>
        </div>

        {/* Center Brand Identity Display */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center space-y-2.5">
          <div className="w-14 h-14 rounded-2xl bg-[#0B0B0F]/85 border border-white/10 flex items-center justify-center text-[#A78BFA] shadow-2xl group-hover:scale-110 group-hover:border-[#8B5CF6]/60 transition-all duration-300">
            <Globe size={26} aria-hidden="true" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </span>
        </div>

        {/* Bottom Banner Status */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
          <span className="text-[11px] text-[#A78BFA]">Verified Client Platform</span>
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 size={12} /> Deployed on Vercel
          </span>
        </div>
      </div>

      {/* =========================================================================
          3. Project Narrative, Workflow & Action Details
      ========================================================================= */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-5">
        
        {/* Project Description */}
        <p className="text-sm text-[#A1A1AA] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Transparent Workflow Attribution Callout */}
        <div className="p-3.5 rounded-2xl bg-[#0D0D14] border border-white/[0.05] text-xs text-[#A1A1AA] flex items-start gap-2.5">
          <Sparkles size={15} className="text-[#8B5CF6] shrink-0 mt-0.5" aria-hidden="true" />
          <span className="leading-relaxed">{project.workflowNote}</span>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-[#0E0E16] border border-white/[0.06] text-xs font-medium text-[#A1A1AA]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-5 border-t border-white/[0.06] mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_28px_rgba(139,92,246,0.5)] transition-all duration-300 active:scale-[0.98] group/btn"
            aria-label={`Visit live website for ${project.title}`}
          >
            <span>Visit Live Website</span>
            <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {project.isPrivateRepo && (
            <span className="inline-flex items-center gap-1.5 text-xs text-[#71717A] font-mono" title="Client codebase is private">
              <Lock size={13} aria-hidden="true" />
              <span>Private Code</span>
            </span>
          )}
        </div>

      </div>

    </div>
  );
};
