import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal as TerminalIcon } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MobileMenu } from './MobileMenu';
import { TerminalModal } from '../ui/TerminalModal';
import profilePhoto from '../../assets/images/profile-portrait.jpg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeId = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Fixed Reading / Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? 'pt-3 pb-2' : 'pt-5 pb-3 sm:pt-6 sm:pb-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Photo Avatar & Live Status Badge */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-[#12121A]/85 hover:bg-[#181824] border border-white/[0.08] hover:border-[#8B5CF6]/40 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Maaz Pathan Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#8B5CF6]/40 shadow-[0_0_12px_rgba(139,92,246,0.45)] shrink-0 bg-[#1A1A24]">
              <img
                src={profilePhoto}
                alt="Maaz Pathan Portrait"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-[#F5F5F7] group-hover:text-white tracking-tight flex items-center gap-1.5">
                {PROFILE.shortName}
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  title="Available for freelance & engineering roles"
                />
              </span>
              <span className="text-[10px] text-[#71717A] group-hover:text-[#A1A1AA] transition-colors hidden sm:block leading-none">
                Software Dev
              </span>
            </div>
          </a>

          {/* Center Dynamic Floating Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#111116]/85 border border-white/[0.08] backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.06)]">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                    isActive
                      ? 'text-white font-semibold shadow-[0_2px_14px_rgba(139,92,246,0.4)] bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#8B5CF6]'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Interactive Terminal & CTA */}
          <div className="flex items-center gap-2">
            {/* Interactive Terminal Button (maaz.sh) */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              title="Launch Interactive Terminal (maaz.sh)"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono font-medium bg-[#141420]/90 hover:bg-[#1E1E30] text-[#A78BFA] hover:text-white border border-[#8B5CF6]/30 hover:border-[#8B5CF6] shadow-sm hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] transition-all duration-200 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <TerminalIcon size={13} className="text-[#8B5CF6] group-hover:text-emerald-400 transition-colors" />
              <span className="hidden sm:inline">maaz.sh</span>
            </button>

            {/* Desktop Quick Connect CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#17171F]/90 hover:bg-[#8B5CF6] text-[#F5F5F7] hover:text-white border border-white/10 hover:border-[#8B5CF6] shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 active:scale-[0.97] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight
                size={13}
                className="text-[#A78BFA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Mobile Animated Hamburger Button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isDrawerOpen}
              className="flex lg:hidden items-center justify-center w-10 h-10 rounded-2xl bg-[#14141E]/90 border border-white/10 text-[#F5F5F7] hover:bg-[#1C1C2A] hover:border-[#8B5CF6]/50 transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                    isDrawerOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-[#8B5CF6] rounded-full transition-all duration-200 ${
                    isDrawerOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
                    isDrawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Slide-Over Mobile Drawer */}
      <MobileMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenTerminal={() => {
          setIsDrawerOpen(false);
          setIsTerminalOpen(true);
        }}
        activeId={activeId}
      />

      {/* Interactive Developer CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
};
