import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  Sparkles,
  Send,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Briefcase,
} from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { SKILL_CATEGORIES } from '../../data/skills';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize welcome banner
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          command: 'init',
          timestamp: new Date().toLocaleTimeString(),
          output: (
            <div className="space-y-2 text-[#DDD6FE]">
              <p className="font-bold text-[#A78BFA]">
                ⚡ Welcome to Maaz Pathan's Interactive Shell (maaz.sh v1.0)
              </p>
              <p className="text-[#A1A1AA] text-xs">
                Type <span className="text-emerald-400 font-bold">'help'</span> to view available system commands, or click the quick command chips below.
              </p>
            </div>
          ),
        },
      ]);
    }
  }, [history.length]);

  // Handle auto-focus and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  // 60FPS High-Tech Canvas Particle Physics System (Fluid celebration burst that disappears cleanly)
  useEffect(() => {
    if (!showConfetti) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#8B5CF6', '#A78BFA', '#10B981', '#34D399', '#F59E0B', '#C084FC', '#38BDF8'];
    const particleCount = 85;

    interface Particle {
      x: number;
      y: number;
      w: number;
      h: number;
      vx: number;
      vy: number;
      tilt: number;
      tiltAngle: number;
      tiltAngleInc: number;
      color: string;
      opacity: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 220,
      y: canvas.height * 0.45,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 12 + 6),
      tilt: Math.random() * 10 - 10,
      tiltAngle: Math.random() * Math.PI,
      tiltAngleInc: Math.random() * 0.08 + 0.03,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
    }));

    let animationId: number;
    const startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = 0;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28; // gravity
        p.vx *= 0.985; // air resistance
        p.tiltAngle += p.tiltAngleInc;
        p.tilt = Math.sin(p.tiltAngle) * 12;

        if (elapsed > 1800) {
          p.opacity = Math.max(0, p.opacity - 0.025);
        }

        if (p.opacity > 0 && p.y < canvas.height + 50) {
          activeParticles++;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.tiltAngle * 0.4);
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }
      });

      if (activeParticles > 0 && elapsed < 3200) {
        animationId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setShowConfetti(false);
      }
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [showConfetti]);

  // Execute terminal command
  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();
    setCommandHistory((prev) => [...prev, cmdText]);
    setHistoryIndex(-1);

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-[#A78BFA] font-bold pb-1 border-b border-white/10">
              AVAILABLE COMMANDS:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono text-[#E2E8F0]">
              <div><span className="text-emerald-400 font-bold">about</span> - Background & engineering summary</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Interactive tech stack matrix</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Deployed client websites & URLs</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Freelance client delivery history</div>
              <div><span className="text-emerald-400 font-bold">education</span> - B.Tech IT & Diploma qualifications</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Direct email & contact info</div>
              <div><span className="text-emerald-400 font-bold">socials</span> - GitHub, LinkedIn, Instagram links</div>
              <div><span className="text-emerald-400 font-bold">sudo hire-maaz</span> - 🏆 Hire command & executive dossier</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal history</div>
              <div><span className="text-emerald-400 font-bold">exit</span> - Close terminal window</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-2 text-xs text-[#D4D4D8]">
            <p className="text-emerald-400 font-bold text-sm">{PROFILE.fullName}</p>
            <p className="text-[#A78BFA] font-mono">{PROFILE.title}</p>
            <p className="leading-relaxed text-[#A1A1AA]">{PROFILE.heroBio}</p>
            <p className="text-[11px] font-mono text-[#71717A]">Location: {PROFILE.location} · Status: {PROFILE.availability}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2.5 text-xs">
            <p className="text-[#A78BFA] font-bold">TECHNICAL SKILLS MATRIX:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2 rounded-lg bg-[#141420] border border-white/10">
                  <span className="text-emerald-400 font-bold text-[11px] block">{cat.title}</span>
                  <span className="text-[#A1A1AA] text-[10px]">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-[#A78BFA] font-bold">FEATURED CLIENT WEBSITES (WITH CUSTOM ADMIN PANELS):</p>
            <div className="space-y-1.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-2 rounded-lg bg-[#141420] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">{proj.title}</span>
                    <span className="text-[10px] text-[#A1A1AA] block">{proj.category}</span>
                  </div>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-[#8B5CF6]/30 text-[#DDD6FE] hover:bg-[#8B5CF6] hover:text-white transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="text-[#A78BFA] font-bold">FREELANCE CLIENT WORKFLOW:</p>
            <p className="text-emerald-400 font-semibold">Freelance Web Developer (2024 — Present)</p>
            <p className="text-[#A1A1AA] text-xs">
              Delivering end-to-end client websites, custom admin panels, responsive UI, and Vercel cloud hosting.
            </p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="text-[#A78BFA] font-bold">EDUCATION TIMELINE:</p>
            <p>🎓 <span className="text-white font-bold">B.Tech in Information Technology</span> @ P P Savani University (2025–2028)</p>
            <p>📜 <span className="text-white font-bold">Diploma in Computer Engineering</span> (2022–2025)</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="text-[#A78BFA] font-bold">DIRECT CONTACT INFO:</p>
            <p>📧 Email: <a href={`mailto:${PROFILE.email}`} className="text-emerald-400 underline">{PROFILE.email}</a></p>
            <p>📍 Location: <span className="text-white">{PROFILE.location}</span></p>
            <p>⚡ Status: <span className="text-emerald-400">{PROFILE.availability}</span></p>
          </div>
        );
        break;

      case 'socials':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#D4D4D8]">
            <p className="text-[#A78BFA] font-bold">SOCIAL & PROFILES:</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {PROFILE.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#161624] border border-white/10 hover:border-[#8B5CF6] text-xs text-white flex items-center gap-1 transition-colors"
                >
                  <span>{soc.name}</span>
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        );
        break;

      case 'sudo hire-maaz':
      case 'hire-maaz':
      case 'hire':
        setShowConfetti(true);
        outputNode = (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#181828] via-[#12121E] to-[#0D0D16] border border-[#8B5CF6]/50 shadow-[0_0_30px_rgba(139,92,246,0.25)] space-y-3">
            {/* System Clearance Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck size={14} className="text-emerald-400 animate-pulse" />
                <span>ROOT CLEARANCE GRANTED</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                AVAILABLE TO HIRE
              </span>
            </div>

            {/* Candidate Executive Summary */}
            <div className="space-y-1 text-xs">
              <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>Maaz Pathan — Software Engineer & Web Developer</span>
                <Sparkles size={13} className="text-[#A78BFA]" />
              </h4>
              <p className="text-[#A1A1AA] leading-relaxed text-[11px]">
                Ready for full-time engineering roles, remote teams, and freelance client website builds with custom admin dashboards.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2 rounded-xl bg-[#09090F] border border-white/5 flex items-center gap-2 text-[#E2E8F0]">
                <Briefcase size={12} className="text-[#8B5CF6]" />
                <span>3+ Live Websites</span>
              </div>
              <div className="p-2 rounded-xl bg-[#09090F] border border-white/5 flex items-center gap-2 text-[#E2E8F0]">
                <Calendar size={12} className="text-[#8B5CF6]" />
                <span>B.Tech IT @ PPSU</span>
              </div>
            </div>

            {/* Direct 1-Click Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href="#contact"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all active:scale-95"
              >
                <Send size={11} />
                <span>Start Project Discussion</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all"
              >
                Direct Email ({PROFILE.email})
              </a>
            </div>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case 'date':
      case 'time':
        outputNode = (
          <p className="text-emerald-400 text-xs font-mono">
            Surat, India: {new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)
          </p>
        );
        break;

      case 'whoami':
        outputNode = (
          <p className="text-[#A1A1AA] text-xs font-mono">
            guest_visitor@portfolio (Session active) · Welcome to Maaz Pathan's Portfolio!
          </p>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: <span className="text-white">{cmdText}</span>. Type <span className="text-emerald-400 font-bold">'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdText,
        output: outputNode,
        timestamp: time,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Developer Terminal"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 60FPS Fluid Physics Canvas Celebration Particle Stream (vanishes smoothly, zero leftover bubbles) */}
      {showConfetti && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-[60] w-full h-full"
        />
      )}

      {/* Terminal Window */}
      <div
        className={`relative z-10 w-full bg-[#0B0B12] border border-white/15 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.25)] flex flex-col transition-all duration-300 overflow-hidden ${
          isMaximized ? 'h-[94vh] max-w-[96vw]' : 'h-[520px] max-w-2xl'
        }`}
      >
        {/* Terminal Titlebar */}
        <div className="bg-[#12121D] px-4 py-2.5 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            {/* macOS Buttons */}
            <button
              onClick={onClose}
              title="Close Terminal"
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
            />
            <button
              onClick={() => setHistory([])}
              title="Clear Terminal"
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              title="Toggle Fullscreen"
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
            <TerminalIcon size={13} className="text-[#8B5CF6]" />
            <span className="font-semibold text-[#F5F5F7]">maaz@portfolio: ~ (maaz.sh)</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded-md text-[#71717A] hover:text-white transition-colors"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#71717A] hover:text-white transition-colors"
              title="Close (Esc)"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Body Screen */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3 font-mono text-xs text-[#E2E8F0] scrollbar-thin scrollbar-thumb-[#1F1F2C]"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command !== 'init' && (
                <div className="flex items-center gap-2 text-[#A78BFA]">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-[#8B5CF6]">maaz@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-[10px] text-[#71717A] ml-auto">{item.timestamp}</span>
                </div>
              )}
              <div className="pl-4 sm:pl-6">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400">➜</span>
            <span className="text-[#8B5CF6] shrink-0">maaz@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects', 'sudo hire-maaz'..."
              className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder-[#52525B]"
              autoComplete="off"
              spellCheck="false"
            />
          </form>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Suggestions Footer Bar */}
        <div className="bg-[#0F0F1A] px-4 py-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            <span className="text-[#71717A] text-[10px]">Quick:</span>
            {['help', 'skills', 'projects', 'sudo hire-maaz', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  executeCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="px-2 py-0.5 rounded-md bg-[#181826] hover:bg-[#8B5CF6]/30 border border-white/10 hover:border-[#8B5CF6]/50 text-[#C4B5FD] transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          <span className="text-[10px] font-mono text-[#71717A] hidden sm:block">
            Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-white">Esc</kbd> to exit
          </span>
        </div>
      </div>
    </div>
  );
};
