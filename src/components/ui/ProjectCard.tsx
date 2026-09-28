import React from 'react';
import { Globe, Lock, Sparkles, CheckCircle2, ArrowUpRight, LayoutDashboard } from 'lucide-react';
import type { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#12121B]/95 border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-400 overflow-hidden shadow-xl hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.22)] hover:-translate-y-1">
      {/* =========================================================================
          1. Compact Browser Header Bar
      ========================================================================= */}
      <div className="bg-[#0D0D14] border-b border-white/[0.06] px-3.5 py-2 flex items-center justify-between">
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>

        {/* Live URL Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#161622] border border-white/[0.06] text-[10px] font-mono text-[#A1A1AA] max-w-[170px] truncate">
          <Globe size={10} className="text-[#8B5CF6] shrink-0" />
          <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
        </div>

        {/* Online Status */}
        <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Online</span>
        </div>
      </div>

      {/* =========================================================================
          2. Compact Visual Banner with Admin Badge
      ========================================================================= */}
      <div
        className={`relative w-full h-28 sm:h-32 bg-gradient-to-br ${project.previewGradient} flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden`}
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0D0D14]/80 border border-white/10 text-[#A78BFA]">
            {project.category}
          </span>
          <span className="font-mono text-[10px] font-bold text-white/40">
            0{index + 1}
          </span>
        </div>

        {/* Center Brand Name & Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0B0B0F]/85 border border-white/10 flex items-center justify-center text-[#A78BFA] shadow-md group-hover:scale-105 group-hover:border-[#8B5CF6]/60 transition-all shrink-0">
              <Globe size={18} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors leading-tight">
                {project.title}
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 pt-0.5">
                <CheckCircle2 size={10} /> Verified Client Platform
              </span>
            </div>
          </div>

          {/* Admin Panel Feature Indicator Badge */}
          {project.hasAdminPanel && (
            <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#DDD6FE] text-[10px] font-mono shadow-sm">
              <LayoutDashboard size={10} className="text-[#A78BFA]" />
              <span>Admin Panel</span>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          3. Compact Project Details with Admin Highlight
      ========================================================================= */}
      <div className="flex flex-col flex-1 p-4 sm:p-4.5 space-y-3">
        {/* Description */}
        <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Compact Workflow Note */}
        <div className="p-2.5 rounded-xl bg-[#0D0D14] border border-white/[0.04] text-[11px] text-[#94A3B8] flex items-start gap-2">
          <Sparkles size={13} className="text-[#8B5CF6] shrink-0 mt-0.5" aria-hidden="true" />
          <span className="leading-snug line-clamp-2">{project.workflowNote}</span>
        </div>

        {/* Tech Pills with Highlighted Admin Tag */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.technologies.map((tech) => {
            const isAdmin = tech.toLowerCase().includes('admin');
            return (
              <span
                key={tech}
                className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors ${
                  isAdmin
                    ? 'bg-[#8B5CF6]/25 border border-[#8B5CF6]/50 text-[#EDE9FE] font-semibold flex items-center gap-1 shadow-[0_0_10px_rgba(139,92,246,0.25)]'
                    : 'bg-[#0E0E16] border border-white/[0.05] text-[#A1A1AA]'
                }`}
              >
                {isAdmin && <LayoutDashboard size={10} className="text-[#C4B5FD]" />}
                <span>{tech}</span>
              </span>
            );
          })}
        </div>

        {/* Compact Action Row */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-all duration-200 active:scale-95 group/btn"
            aria-label={`Visit live website for ${project.title}`}
          >
            <span>Visit Live Website</span>
            <ArrowUpRight
              size={13}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </a>

          {project.isPrivateRepo && (
            <span
              className="inline-flex items-center gap-1 text-[11px] text-[#71717A] font-mono"
              title="Client codebase is private"
            >
              <Lock size={11} aria-hidden="true" />
              <span>Private Code</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
