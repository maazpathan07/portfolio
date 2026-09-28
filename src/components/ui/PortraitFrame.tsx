import React, { useState } from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import defaultProfileImage from '../../assets/images/profile-portrait.jpg';

interface PortraitFrameProps {
  imageSrc?: string;
  altText?: string;
  className?: string;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({
  imageSrc = defaultProfileImage,
  altText = 'Portrait of Maaz Pathan, Aspiring Software Engineer and Freelance Web Developer',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      {/* Dynamic Multi-layered Ambient Violet Backlight */}
      <div
        className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-[#8B5CF6]/25 via-[#6D28D9]/20 to-[#A78BFA]/15 rounded-[40px] blur-3xl pointer-events-none transition-all duration-700 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#8B5CF6]/15 rounded-3xl blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Glassmorphism Frame Container (4:5 Ratio) */}
      <div className="relative w-full max-w-[320px] sm:max-w-[370px] aspect-[4/5] rounded-[24px] bg-[#14141E]/90 border border-white/[0.12] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.2)] overflow-hidden transition-all duration-500 hover:border-[#8B5CF6]/50 group">
        
        {/* Inner Card Frame */}
        <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#0D0D14] flex flex-col items-center justify-center border border-white/[0.08]">
          {!hasError && imageSrc ? (
            <div className="relative w-full h-full">
              <img
                src={imageSrc}
                alt={altText}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="eager"
              />
              
              {/* Subtle gradient vignette at bottom of photo for floating chip readability */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0F]/90 via-[#0B0B0F]/40 to-transparent pointer-events-none" />

              {/* Floating Bottom Status Pill on Portrait */}
              <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-center justify-between p-2.5 rounded-xl bg-[#111116]/85 border border-white/10 backdrop-blur-md shadow-lg">
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
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#8B5CF6]/70 pointer-events-none rounded-tl-sm" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#8B5CF6]/70 pointer-events-none rounded-tr-sm" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#8B5CF6]/70 pointer-events-none rounded-bl-sm" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#8B5CF6]/70 pointer-events-none rounded-br-sm" />
        </div>
      </div>
    </div>
  );
};
