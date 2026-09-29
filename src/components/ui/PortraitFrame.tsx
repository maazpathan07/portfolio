import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  X,
  Video,
} from 'lucide-react';
import defaultProfileImage from '../../assets/images/profile-portrait.jpg';
import introVideoSrc from '../../assets/videos/intro-video.mp4';

interface PortraitFrameProps {
  imageSrc?: string;
  videoSrc?: string;
  altText?: string;
  className?: string;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({
  imageSrc = defaultProfileImage,
  videoSrc = introVideoSrc,
  altText = 'Portrait of Maaz Pathan, Aspiring Software Engineer and Freelance Web Developer',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle Play / Pause Toggle
  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay with sound was blocked; playing muted instead:', err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          await videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  // Close Video & Return to Photo
  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
  };

  // Toggle Mute / Unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Restart Video
  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  // Video finished
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Auto-hide controls when playing after 3s of inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Dynamic Multi-layered Ambient Violet/Accent Backlight */}
      <div
        className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-[#8B5CF6]/25 via-[#6D28D9]/20 to-[#A78BFA]/15 rounded-[40px] blur-3xl pointer-events-none transition-all duration-700 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#8B5CF6]/15 rounded-3xl blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Glassmorphism Frame Container (4:5 Ratio) */}
      <div
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-[320px] sm:max-w-[370px] aspect-[4/5] rounded-[24px] bg-[#14141E]/90 border border-white/[0.12] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.2)] overflow-hidden transition-all duration-500 hover:border-[#8B5CF6]/50 group"
      >
        {/* Inner Card Frame */}
        <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#0D0D14] flex flex-col items-center justify-center border border-white/[0.08]">
          {!hasError && imageSrc ? (
            <div className="relative w-full h-full">
              {/* Layer 1: Static High-Res Photo (Always rendered as base & fallback) */}
              <img
                src={imageSrc}
                alt={altText}
                onError={() => setHasError(true)}
                className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                  isPlaying ? 'opacity-0 scale-105' : 'opacity-100 scale-100 group-hover:scale-[1.03]'
                }`}
                loading="eager"
              />

              {/* Layer 2: Seamless Interactive Video Player */}
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
                  isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              />

              {/* Video Progress Bar (Top of frame when playing) */}
              {isPlaying && (
                <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-30">
                  <div
                    className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-white transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/* Subtle gradient vignette at bottom of photo for floating chip readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/40 to-transparent pointer-events-none z-10" />

              {/* -------------------------------------------------------------
                  STATE A: When Photo is Visible (Default Play Trigger Pill)
                 ------------------------------------------------------------- */}
              {!isPlaying && (
                <div className="absolute top-3.5 right-3.5 z-20">
                  <button
                    type="button"
                    onClick={togglePlay}
                    title="Watch 20-second Interactive AI Introduction"
                    aria-label="Play Introduction Video"
                    className="group/btn relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121A]/90 hover:bg-[#8B5CF6] text-white border border-[#8B5CF6]/40 hover:border-white/40 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_15px_rgba(139,92,246,0.35)] transition-all duration-300 active:scale-95"
                  >
                    {/* Glowing pulse ring */}
                    <span className="absolute -inset-0.5 rounded-full bg-[#8B5CF6]/40 blur-xs animate-pulse pointer-events-none" />

                    <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-[#8B5CF6] group-hover/btn:bg-white text-white group-hover/btn:text-[#8B5CF6] transition-colors">
                      <Play size={9} className="ml-0.5 fill-current" />
                    </div>
                    <span className="relative text-[11px] font-semibold tracking-tight text-[#E2E8F0] group-hover/btn:text-white flex items-center gap-1">
                      <span>Intro</span>
                      <span className="text-[10px] font-mono text-[#A78BFA] group-hover/btn:text-white/80">20s</span>
                    </span>
                  </button>
                </div>
              )}

              {/* -------------------------------------------------------------
                  STATE B: When Video is Playing (Interactive Video Controls Overlay)
                 ------------------------------------------------------------- */}
              {isPlaying && (
                <div
                  className={`absolute inset-0 z-20 flex flex-col justify-between p-3.5 transition-opacity duration-300 ${
                    showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Top Bar Controls: Video Badge & Close Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0B0F]/85 border border-white/10 backdrop-blur-md text-[10px] font-mono text-emerald-400 shadow-sm">
                      <Video size={11} className="text-emerald-400 animate-pulse" />
                      <span>LIVE INTRO</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCloseVideo}
                      title="Back to Photo"
                      aria-label="Close Video"
                      className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0B0B0F]/85 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all active:scale-90"
                    >
                      <X size={13} />
                    </button>
                  </div>

                  {/* Middle Center: Click anywhere to Pause/Resume */}
                  <div
                    onClick={togglePlay}
                    className="flex-1 flex items-center justify-center cursor-pointer"
                  >
                    {!isPlaying && (
                      <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/90 flex items-center justify-center text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] animate-in fade-in zoom-in duration-200">
                        <Play size={20} className="ml-1 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Quick Controls Row */}
                  <div className="flex items-center justify-between gap-2 p-1.5 px-2.5 rounded-xl bg-[#0B0B0F]/90 border border-white/10 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-1.5">
                      {/* Play / Pause Toggle */}
                      <button
                        type="button"
                        onClick={togglePlay}
                        title={isPlaying ? 'Pause' : 'Play'}
                        className="p-1 rounded-lg hover:bg-white/10 text-[#E2E8F0] hover:text-white transition-colors"
                      >
                        {isPlaying ? <Pause size={13} /> : <Play size={13} className="fill-current" />}
                      </button>

                      {/* Replay Button */}
                      <button
                        type="button"
                        onClick={handleRestart}
                        title="Replay Video"
                        className="p-1 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-white transition-colors"
                      >
                        <RotateCcw size={12} />
                      </button>
                    </div>

                    {/* Mute / Unmute Button */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono transition-all ${
                        isMuted
                          ? 'bg-rose-500/20 border border-rose-500/30 text-rose-300'
                          : 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                      <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Floating Bottom Status Pill on Portrait (Visible in Photo mode) */}
              {!isPlaying && (
                <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-center justify-between p-2.5 rounded-xl bg-[#111116]/85 border border-white/10 backdrop-blur-md shadow-lg transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F5F7]">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#8B5CF6]/20 text-[#A78BFA]">
                      <CheckCircle2 size={12} />
                    </span>
                    <span>Maaz Pathan</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#A1A1AA]">
                    <MapPin size={11} className="text-[#8B5CF6]" />
                    <span>Surat, India</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Fallback Placeholder */
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 w-full h-full bg-gradient-to-b from-[#191922] via-[#12121A] to-[#0B0B0F]">
              <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-[#1F1F2C] border border-[#8B5CF6]/30 shadow-inner">
                <span className="font-mono text-3xl font-bold tracking-wider text-[#F5F5F7]">
                  M<span className="text-[#8B5CF6]">P</span>
                </span>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#0B0B0F] border border-white/10 text-[#A78BFA]">
                  <Sparkles size={14} aria-hidden="true" />
                </div>
              </div>
            </div>
          )}

          {/* High-Tech Corner Accent Decals */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#8B5CF6]/70 pointer-events-none rounded-tl-sm z-20" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#8B5CF6]/70 pointer-events-none rounded-tr-sm z-20" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#8B5CF6]/70 pointer-events-none rounded-bl-sm z-20" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#8B5CF6]/70 pointer-events-none rounded-br-sm z-20" />
        </div>
      </div>
    </div>
  );
};
