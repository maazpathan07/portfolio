import React from 'react';
import { ArrowUp, MapPin, Code2 } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { NAV_LINKS } from '../../data/navigation';
import { SocialLinks } from '../ui/SocialLinks';
import profilePhoto from '../../assets/images/profile-portrait.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#07070B] border-t border-white/[0.08] pt-14 sm:pt-16 pb-12 overflow-hidden text-[#A1A1AA]">
      {/* Top Edge Ambient Violet Glow Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-[#8B5CF6]/15 rounded-full blur-xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 border-b border-white/[0.06] items-start">
          {/* Column 1: Brand & Status (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#8B5CF6]/50 shadow-[0_0_15px_rgba(139,92,246,0.4)] shrink-0 bg-[#1A1A24]">
                <img
                  src={profilePhoto}
                  alt={PROFILE.shortName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight">
                  {PROFILE.shortName}
                </h3>
                <p className="text-xs text-[#A78BFA] font-medium leading-tight">
                  Aspiring Software Engineer · Freelance Web Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              {PROFILE.tagline}
            </p>

            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Hire
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#A1A1AA]">
                <MapPin size={12} className="text-[#8B5CF6]" />
                Surat, India
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3.5 pt-2 sm:pt-0">
            <span className="text-xs font-semibold text-[#D4D4D8] uppercase tracking-wider block flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              Navigation
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="px-3 py-2 rounded-xl bg-[#0E0E16] hover:bg-[#181826] border border-white/[0.05] hover:border-[#8B5CF6]/40 text-[#A1A1AA] hover:text-white transition-all flex items-center gap-2 text-xs group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#8B5CF6]/60 group-hover:bg-[#8B5CF6] group-hover:scale-125 transition-all" />
                  <span className="truncate font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Connect & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 pt-2 sm:pt-0 flex flex-col justify-between">
            <span className="text-xs font-semibold text-[#D4D4D8] uppercase tracking-wider block flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              Stay Connected
            </span>

            <SocialLinks iconSize={17} />

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#12121A] hover:bg-[#1C1C2A] border border-white/10 hover:border-[#8B5CF6]/50 text-xs font-medium text-[#F5F5F7] shadow-sm transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} className="text-[#8B5CF6]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A] text-center sm:text-left">
          <p>© {currentYear} {PROFILE.shortName}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#A1A1AA]">
            <Code2 size={13} className="text-[#8B5CF6]" />
            <span>React · TypeScript · Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
