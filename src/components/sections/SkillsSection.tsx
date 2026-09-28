import React from 'react';
import {
  Terminal,
  Layers,
  Database,
  Wrench,
  Cpu,
  GitBranch,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export const SkillsSection: React.FC = () => {
  return (
    <SectionWrapper id="skills" bgVariant="primary">
      <SectionHeading
        eyebrow="TECHNICAL ARSENAL"
        title="Engineering Capabilities &amp; Tech Stack"
        description="An interconnected ecosystem of programming languages, modern web frameworks, database architectures, and development tools."
      />

      {/* Unique High-Impact Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* =========================================================================
            BENTO CARD 1: Core Programming Engine (Large Hero Box - 7 cols)
        ========================================================================= */}
        <div className="md:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#14141F] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#8B5CF6]/20 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Terminal size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight">
                    Programming Languages
                  </h3>
                  <p className="text-xs font-mono text-[#71717A]">
                    Primary Execution &amp; Core Logic
                  </p>
                </div>
              </div>
              <Badge label="Core Engine" variant="violet" size="sm" dot />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              <div className="p-4 rounded-2xl bg-[#0D0D14]/90 border border-white/[0.06] hover:border-[#8B5CF6]/40 hover:bg-[#161624] transition-all duration-300 flex flex-col justify-between space-y-3 group/tile">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-[#F5F5F7] group-hover/tile:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    Java
                  </span>
                  <span className="text-[10px] font-mono text-[#A78BFA] px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                    OOP Core
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Object-Oriented Design, Collections Framework, and Algorithmic Problem Solving.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D0D14]/90 border border-white/[0.06] hover:border-[#8B5CF6]/40 hover:bg-[#161624] transition-all duration-300 flex flex-col justify-between space-y-3 group/tile">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-[#F5F5F7] group-hover/tile:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                    JavaScript (ES6+)
                  </span>
                  <span className="text-[10px] font-mono text-[#A78BFA] px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                    Modern Web
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Asynchronous Programming, DOM APIs, and Dynamic Client-Side Architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#09090D] border border-white/[0.06] font-mono text-xs text-[#A1A1AA] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-[#8B5CF6]">~</span>
              <span className="text-[#F5F5F7]">mvn clean compile &amp;&amp; node app.js</span>
            </div>
            <span className="text-emerald-400 text-[11px] flex items-center gap-1">
              <CheckCircle2 size={12} /> Ready
            </span>
          </div>
        </div>

        {/* =========================================================================
            BENTO CARD 2: Modern Frontend & Interface Craft (5 cols)
        ========================================================================= */}
        <div className="md:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#14141F] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <Layers size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight">
                    Frontend &amp; UI
                  </h3>
                  <p className="text-xs font-mono text-[#71717A]">
                    Responsive Interfaces
                  </p>
                </div>
              </div>
              <Badge label="Design Systems" variant="zinc" size="sm" />
            </div>

            <div className="flex flex-wrap gap-2 pt-1 mb-6">
              {['HTML5 Semantic Web', 'CSS3 & Modern Layouts', 'Bootstrap Framework', 'Responsive Architecture', 'Mobile-First Design'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 rounded-xl bg-[#0D0D14] hover:bg-[#1A1A28] border border-white/[0.06] hover:border-[#8B5CF6]/40 text-xs font-medium text-[#E2E8F0] transition-all duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#09090D] border border-white/[0.06] flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
            <span className="flex items-center gap-1.5 text-[#F5F5F7]">
              <Globe size={13} className="text-[#8B5CF6]" /> Viewport Fluidity
            </span>
            <span className="text-[#A78BFA]">Mobile ──► 4K Ultra</span>
          </div>
        </div>

        {/* =========================================================================
            BENTO CARD 3: Databases & Backend Storage Layer (4 cols)
        ========================================================================= */}
        <div className="md:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#14141F] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <Database size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                  Databases
                </h3>
              </div>
              <Badge label="Data" variant="zinc" size="sm" />
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">MySQL (Relational)</span>
                <Badge label="Core" variant="violet" size="sm" dot />
              </div>
              <div className="p-3 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">MongoDB (Document)</span>
                <span className="text-[10px] font-mono text-[#A78BFA]">MERN Stack</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">Firebase &amp; Node.js</span>
                <span className="text-[10px] font-mono text-[#71717A]">Cloud &amp; APIs</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-[#71717A] flex items-center justify-between">
            <span>Schema Design &amp; Queries</span>
            <span className="text-[#8B5CF6]">ACID Compliant</span>
          </div>
        </div>

        {/* =========================================================================
            BENTO CARD 4: Tools, IDE & AI-Assisted Workflow (4 cols)
        ========================================================================= */}
        <div className="md:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#14141F] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <Wrench size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                  Developer Tools
                </h3>
              </div>
              <Badge label="Toolchain" variant="zinc" size="sm" />
            </div>

            <div className="flex flex-wrap gap-2">
              {['Git Version Control', 'GitHub Repositories', 'VS Code Editor', 'Antigravity IDE', 'AI-Augmented Dev', 'Vercel Deployment'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1.5 rounded-lg bg-[#0D0D14] border border-white/[0.05] text-xs font-medium text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/40 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-[#71717A] flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[#A78BFA]">
              <GitBranch size={13} /> Continuous CI/CD
            </span>
            <span>Cloud Edge</span>
          </div>
        </div>

        {/* =========================================================================
            BENTO CARD 5: Computer Science Foundations & Algorithms (4 cols)
        ========================================================================= */}
        <div className="md:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#14141F] via-[#101017] to-[#0D0D14] border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <Cpu size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
                  CS Foundations
                </h3>
              </div>
              <Badge label="Theory" variant="zinc" size="sm" />
            </div>

            <div className="space-y-2.5">
              <div className="p-2.5 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">Data Structures &amp; Algorithms</span>
                <span className="text-[10px] font-mono text-[#8B5CF6]">Java</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">Object-Oriented Design (OOP)</span>
                <span className="text-[10px] font-mono text-[#A1A1AA]">Clean Code</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0D0D14] border border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F5F5F7]">Algorithmic Problem Solving</span>
                <span className="text-[10px] font-mono text-emerald-400">Logic</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-[#71717A] flex items-center justify-between">
            <span>Computational Thinking</span>
            <span className="text-[#8B5CF6]">O(log n) Focus</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
