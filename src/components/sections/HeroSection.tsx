import React from 'react';
import { ArrowRight, Send, Terminal, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { Button } from '../ui/Button';
import { PortraitFrame } from '../ui/PortraitFrame';
import { SocialLinks } from '../ui/SocialLinks';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#0B0B0F]"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Ambient Glow Cone */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#8B5CF6]/20 via-[#6D28D9]/08 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Identity, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
            {/* Availability Pill */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141E]/90 border border-white/[0.08] backdrop-blur-md shadow-sm hover:border-[#8B5CF6]/40 transition-colors animate-hero-entrance [animation-delay:100ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs font-mono text-[#A1A1AA]">
                {PROFILE.availability}
              </span>
            </div>

            {/* Main Headline & Display Treatment */}
            <div
              className="space-y-3.5 max-w-2xl animate-hero-entrance [animation-delay:200ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Primary High-Impact Greeting with Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-extrabold text-[#F5F5F7] tracking-tight leading-[1.08]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#8B5CF6] bg-clip-text text-transparent underline decoration-[#8B5CF6]/40 decoration-wavy decoration-2 underline-offset-8">
                  Maaz Pathan
                </span>
                <span className="text-[#8B5CF6]">.</span>
              </h1>

              {/* Sub-headline / Mission Tagline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#D4D4D8] tracking-tight leading-snug">
                Building ideas into{' '}
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#A78BFA] bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </p>

              {/* Terminal Role Eyebrow */}
              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm font-mono text-[#A78BFA] font-medium tracking-wide">
                <Terminal size={14} className="text-[#8B5CF6]" />
                <span>{PROFILE.eyebrow}</span>
              </div>
            </div>

            {/* Supporting Bio Paragraph */}
            <p
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl font-normal animate-hero-entrance [animation-delay:300ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              {PROFILE.heroBio}
            </p>

            {/* CTA Action Buttons Group */}
            <div
              className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto animate-hero-entrance [animation-delay:400ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-[0_4px_24px_rgba(139,92,246,0.35)]"
              >
                View Selected Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={Send}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Channels Strip */}
            <div
              className="pt-3 flex flex-wrap items-center gap-5 border-t border-white/[0.08] w-full max-w-xl animate-hero-entrance [animation-delay:500ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="text-xs font-mono text-[#71717A]">CONNECT</span>
              <SocialLinks iconSize={17} />
            </div>

            {/* Micro-Proof Stat Badges */}
            <div
              className="grid grid-cols-3 gap-3 pt-2 w-full max-w-xl animate-hero-entrance [animation-delay:600ms] opacity-0"
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="p-3 rounded-xl bg-[#12121A]/80 border border-white/[0.06] backdrop-blur-sm flex flex-col space-y-1">
                <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#8B5CF6]" /> 3+
                </span>
                <span className="text-[11px] text-[#A1A1AA] font-mono leading-tight">
                  Client Websites
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#12121A]/80 border border-white/[0.06] backdrop-blur-sm flex flex-col space-y-1">
                <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5">
                  <Code2 size={14} className="text-[#8B5CF6]" /> B.Tech
                </span>
                <span className="text-[11px] text-[#A1A1AA] font-mono leading-tight">
                  IT @ PPSU (25–28)
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#12121A]/80 border border-white/[0.06] backdrop-blur-sm flex flex-col space-y-1">
                <span className="text-base sm:text-lg font-bold text-white font-mono flex items-center gap-1.5">
                  <Layers size={14} className="text-[#8B5CF6]" /> Full-Stack
                </span>
                <span className="text-[11px] text-[#A1A1AA] font-mono leading-tight">
                  Java &amp; MERN Stack
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Upgraded Portrait Frame */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 animate-hero-entrance [animation-delay:350ms] opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            <PortraitFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
