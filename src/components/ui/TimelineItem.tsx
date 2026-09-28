import React from 'react';
import { CheckCircle2, CircleDot, MapPin, Calendar, Building } from 'lucide-react';
import { Badge } from './Badge';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  institution?: string;
  location?: string;
  period: string;
  status: 'ongoing' | 'completed';
  statusLabel: string;
  description?: string;
  highlights?: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  institution,
  location,
  period,
  status,
  statusLabel,
  description,
  highlights = [],
  isLast = false,
}) => {
  const isOngoing = status === 'ongoing';

  return (
    <div className="relative flex gap-5 sm:gap-8 group">
      {/* Timeline Node & Connecting Track */}
      <div className="flex flex-col items-center">
        {/* Glowing Node */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-2xl border transition-all duration-500 group-hover:scale-110 shrink-0 ${
            isOngoing
              ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-[#A78BFA] shadow-[0_0_20px_rgba(139,92,246,0.5)] ring-4 ring-[#8B5CF6]/10'
              : 'bg-[#151520] border-white/15 text-[#A1A1AA]'
          }`}
          aria-hidden="true"
        >
          {isOngoing ? (
            <CircleDot size={20} className="text-[#8B5CF6] animate-pulse" />
          ) : (
            <CheckCircle2 size={18} className="text-emerald-400" />
          )}
        </div>

        {/* Vertical Track Line */}
        {!isLast && (
          <div
            className={`w-[2px] flex-1 my-3 transition-colors ${
              isOngoing ? 'bg-gradient-to-b from-[#8B5CF6]/70 to-white/10' : 'bg-white/10'
            }`}
          />
        )}
      </div>

      {/* High-End Card Content */}
      <div className={`flex-1 pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div
          className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 shadow-xl ${
            isOngoing
              ? 'bg-[#14141F]/95 border-[#8B5CF6]/40 shadow-[0_10px_35px_-10px_rgba(139,92,246,0.2)] hover:border-[#8B5CF6]/60'
              : 'bg-[#12121A]/90 border-white/[0.08] hover:border-white/20'
          }`}
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <Badge
              label={statusLabel}
              variant={isOngoing ? 'violet' : 'zinc'}
              size="md"
              dot={isOngoing}
            />
            <span className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] px-3 py-1 rounded-full bg-[#0D0D14] border border-white/[0.06]">
              <Calendar size={13} className="text-[#8B5CF6]" aria-hidden="true" />
              <span>{period}</span>
            </span>
          </div>

          {/* Title & Field */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
            {title}
          </h3>

          {subtitle && (
            <p className="text-sm font-semibold text-[#A78BFA] mt-1 font-mono">
              {subtitle}
            </p>
          )}

          {/* University & Location Details */}
          {(institution || location) && (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#A1A1AA] mt-3 font-mono">
              {institution && (
                <span className="flex items-center gap-1.5 text-[#F5F5F7]">
                  <Building size={14} className="text-[#8B5CF6]" aria-hidden="true" />
                  <span>{institution}</span>
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#8B5CF6]" aria-hidden="true" />
                  <span>{location}</span>
                </span>
              )}
            </div>
          )}

          {/* Course Overview */}
          {description && (
            <p className="text-sm text-[#A1A1AA] leading-relaxed mt-4">
              {description}
            </p>
          )}

          {/* Coursework Highlight Chips */}
          {highlights.length > 0 && (
            <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-3">
              <span className="text-[11px] font-mono text-[#A78BFA] uppercase tracking-wider block">
                Key Curriculum &amp; Specialization Areas:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="p-2.5 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center gap-2 text-[#E2E8F0]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
