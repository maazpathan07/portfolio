import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useAccentTheme } from '../../context/ThemeContext';
import { THEME_OPTIONS } from '../../types/theme';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useAccentTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeOption = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-6 z-40 select-none font-sans"
    >
      {/* Expanded Theme Selection Popup */}
      <div
        className={`absolute bottom-full left-0 mb-3 w-64 p-3 rounded-2xl bg-[#12121A]/95 border border-white/10 backdrop-blur-2xl shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(139,92,246,0.15)] transition-all duration-300 origin-bottom-left ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-3 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
            <Palette size={13} style={{ color: activeOption.color }} />
            <span>Accent Theme</span>
          </div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider flex items-center gap-1">
            <Sparkles size={9} style={{ color: activeOption.color }} />
            4 Colors
          </span>
        </div>

        {/* Theme Options List */}
        <div className="space-y-1.5">
          {THEME_OPTIONS.map((opt) => {
            const isSelected = theme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setTheme(opt.id);
                  // Brief pause then close for smooth feel
                  setTimeout(() => setIsOpen(false), 180);
                }}
                className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all duration-200 group ${
                  isSelected
                    ? 'bg-white/[0.08] border border-white/15 shadow-sm'
                    : 'hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {/* Swatch Dot with Glow */}
                  <div
                    className="relative flex items-center justify-center w-5 h-5 rounded-full transition-transform group-hover:scale-110 shrink-0"
                    style={{
                      backgroundColor: opt.color,
                      boxShadow: isSelected ? `0 0 12px ${opt.color}` : 'none',
                    }}
                  >
                    {isSelected && <Check size={11} className="text-black stroke-[3]" />}
                  </div>

                  {/* Name and subtitle */}
                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-medium transition-colors ${
                        isSelected ? 'text-white font-semibold' : 'text-[#D4D4D8] group-hover:text-white'
                      }`}
                    >
                      {opt.name}
                    </span>
                    <span className="text-[10px] text-[#71717A] leading-tight">
                      {opt.desc}
                    </span>
                  </div>
                </div>

                {/* Active Indicator dot */}
                {isSelected && (
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: opt.color }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trigger Floating Capsule Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Open portfolio accent theme switcher"
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#12121A]/90 hover:bg-[#1A1A26] border border-white/10 hover:border-white/20 backdrop-blur-xl text-[#A1A1AA] hover:text-white shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      >
        {/* Dynamic Color Ring Swatches */}
        <div className="flex items-center -space-x-1.5">
          {THEME_OPTIONS.map((opt) => (
            <span
              key={opt.id}
              className={`w-3.5 h-3.5 rounded-full border border-[#0B0B0F] transition-all duration-300 ${
                theme === opt.id
                  ? 'scale-125 z-10 ring-2 ring-white/40 shadow-sm'
                  : 'opacity-70 group-hover:opacity-100'
              }`}
              style={{ backgroundColor: opt.color }}
            />
          ))}
        </div>

        {/* Text Label & Icon */}
        <span className="text-xs font-semibold text-[#E2E8F0] group-hover:text-white transition-colors flex items-center gap-1.5">
          <Palette size={12} style={{ color: activeOption.color }} className="transition-colors" />
          <span className="hidden sm:inline">{activeOption.name}</span>
        </span>
      </button>
    </div>
  );
};
