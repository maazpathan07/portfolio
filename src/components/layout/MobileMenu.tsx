import React, { useEffect, useRef } from 'react';
import {
  X,
  Send,
  ArrowRight,
  Sparkles,
  MapPin,
  Home,
  User,
  Layers,
  FolderGit2,
  Briefcase,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';
import { Button } from '../ui/Button';
import profilePhoto from '../../assets/images/profile-portrait.jpg';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

// Icon mapping for rich navigation items
const NAV_ICONS: Record<string, React.ElementType> = {
  home: Home,
  about: User,
  skills: Layers,
  projects: FolderGit2,
  experience: Briefcase,
  education: GraduationCap,
  learning: BookOpen,
  contact: Send,
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeId }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ease-out ${
        isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none delay-300'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Frosted Dark Glass Backdrop with Smooth Opacity Fade */}
      <div
        className={`fixed inset-0 bg-[#07070B]/85 backdrop-blur-2xl transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Luxury Drawer Container with Smooth Spring-like Slide */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-md bg-gradient-to-b from-[#13131E] via-[#0E0E17] to-[#0A0A0F] border-l border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.18)] z-10 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Header Row with Portrait Avatar */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#8B5CF6]/50 shadow-[0_0_16px_rgba(139,92,246,0.45)] shrink-0 bg-[#1A1A24]">
              <img
                src={profilePhoto}
                alt={PROFILE.shortName}
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#13131E] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#F5F5F7] tracking-tight">
                {PROFILE.shortName}
              </span>
              <span className="text-[11px] font-mono text-[#A78BFA] flex items-center gap-1">
                <MapPin size={10} className="text-[#8B5CF6]" />
                Surat, India
              </span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1A1A28] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/60 transition-all duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <X size={17} aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Items (Staggered List with Micro-Icons & Numbers) */}
        <nav className="flex flex-col py-4 space-y-1.5 overflow-y-auto flex-1 my-auto scrollbar-none">
          <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-[#71717A]">
            Menu
          </div>
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeId === link.id;
            const IconComponent = NAV_ICONS[link.id] || ArrowRight;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={onClose}
                className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8B5CF6]/25 via-[#8B5CF6]/15 to-transparent text-white font-semibold border border-[#8B5CF6]/40 shadow-[0_0_16px_rgba(139,92,246,0.2)]'
                    : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-7 h-7 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#8B5CF6] text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                        : 'bg-white/[0.04] text-[#71717A] group-hover:text-[#A78BFA] group-hover:bg-[#8B5CF6]/10'
                    }`}
                  >
                    <IconComponent size={14} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] text-[#71717A] group-hover:text-[#A1A1AA]">
                    0{idx + 1}
                  </span>
                  <span className="font-medium tracking-tight">{link.label}</span>
                </div>

                {isActive ? (
                  <div className="flex items-center gap-1 text-[#A78BFA]">
                    <Sparkles size={13} className="animate-pulse" aria-hidden="true" />
                  </div>
                ) : (
                  <ArrowRight
                    size={13}
                    className="text-[#52525B] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Footer Area with Action & Socials */}
        <div className="pt-4 border-t border-white/[0.08] space-y-3.5">
          {/* Status Badge */}
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
            <span className="flex items-center gap-2 text-emerald-400 font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for Freelance & Roles
            </span>
            <span className="text-[10px] font-mono text-emerald-500/80">Available</span>
          </div>

          {/* Primary Action Button */}
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={Send}
            className="w-full justify-center shadow-[0_0_20px_rgba(139,92,246,0.35)] text-xs py-2.5"
            onClick={onClose}
          >
            Let's Talk
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center pt-1">
            <SocialLinks iconSize={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
