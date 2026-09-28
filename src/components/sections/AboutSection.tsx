import React from 'react';
import { Globe2, GraduationCap, Code2, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" bgVariant="secondary">
      <SectionHeading
        eyebrow="ABOUT MAAZ PATHAN"
        title="Bridging Computer Science Theory & Real Client Delivery."
        description="An ambitious Information Technology student combining formal academic engineering with practical, deployed web solutions for real businesses."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Editorial Bio Card */}
        <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#13131D]/90 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider pb-2 border-b border-white/[0.06]">
              <Sparkles size={13} className="text-[#8B5CF6]" />
              <span>Background &amp; Philosophy</span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Personal Quote / Core Creed */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0B0F]/80 border border-[#8B5CF6]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/05 rounded-full blur-2xl pointer-events-none" />
            <p className="text-xs sm:text-sm font-medium text-[#F5F5F7] italic leading-relaxed">
              "I believe the best way to master software engineering is by solving genuine problems and shipping real code for real businesses."
            </p>
            <span className="block mt-2 text-[11px] font-mono text-[#A78BFA]">
              — Maaz Pathan
            </span>
          </div>

          {/* Quick Identity Meta Strip */}
          <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#8B5CF6] shrink-0" />
              <span>Surat, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={13} className="text-[#8B5CF6] shrink-0" />
              <span>PPSU (2025–2028)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span className="text-emerald-300">Open for Roles</span>
            </div>
          </div>

        </div>

        {/* Right Column: 3 High-Impact Pillar Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Pillar 1: Practical Delivery */}
          <div className="p-6 rounded-3xl bg-[#14141E]/90 border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#A78BFA] group-hover:scale-105 transition-transform">
                <Globe2 size={22} aria-hidden="true" />
              </div>
              <Badge label="Production Proven" variant="violet" size="sm" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
              3+ Live Client Deployments
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-2">
              Designed, built, and deployed websites for businesses and organizations with custom domains and cloud hosting.
            </p>
          </div>

          {/* Pillar 2: Academic Foundation */}
          <div className="p-6 rounded-3xl bg-[#14141E]/90 border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-[#F5F5F7] group-hover:scale-105 transition-transform">
                <GraduationCap size={22} aria-hidden="true" />
              </div>
              <Badge label="Engineering Core" variant="zinc" size="sm" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
              B.Tech IT &amp; Diploma Foundation
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-2">
              Deep curriculum in Data Structures, Database Systems (MySQL), Object-Oriented Java, and Computer Networking.
            </p>
          </div>

          {/* Pillar 3: Full-Stack Trajectory */}
          <div className="p-6 rounded-3xl bg-[#14141E]/90 border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="p-3 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#A78BFA] group-hover:scale-105 transition-transform">
                <Code2 size={22} aria-hidden="true" />
              </div>
              <Badge label="Continuous Growth" variant="violet" size="sm" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
              Modern Full-Stack Focus
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mt-2">
              Actively expanding from Core Java and JDBC into the modern MERN stack (MongoDB, Express, React, Node.js).
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Global Banner */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#14141E] via-[#1A1A28] to-[#14141E] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B5CF6]/20 text-[#A78BFA] shrink-0">
            <Sparkles size={16} />
          </span>
          <p className="text-xs sm:text-sm text-[#F5F5F7] font-medium">
            Open to remote engineering opportunities, full-time roles, and international client projects.
          </p>
        </div>
        <Button href="#contact" variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
          Let's Discuss
        </Button>
      </div>

    </SectionWrapper>
  );
};
