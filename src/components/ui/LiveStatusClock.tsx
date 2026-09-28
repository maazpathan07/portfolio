import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Sparkles, Moon, Sun, Coffee, Code2, Laptop } from 'lucide-react';

interface LiveStatusClockProps {
  variant?: 'card' | 'compact';
  className?: string;
}

interface StatusInfo {
  status: string;
  subtext: string;
  icon: React.ElementType;
  color: string;
  beaconColor: string;
}

export const LiveStatusClock: React.FC<LiveStatusClockProps> = ({
  variant = 'card',
  className = '',
}) => {
  const [timeString, setTimeString] = useState<string>('');
  const [statusInfo, setStatusInfo] = useState<StatusInfo>({
    status: 'Online & Available',
    subtext: 'Fast response guaranteed',
    icon: Code2,
    color: 'text-emerald-400',
    beaconColor: 'bg-emerald-400',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format time in Surat / India (Asia/Kolkata timezone)
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setTimeString(formatter.format(now));

      // Calculate IST hours for dynamic activity determination
      const istHourFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false,
      });
      const hour = parseInt(istHourFormatter.format(now), 10);

      // Determine dynamic activity based on real Surat time
      if (hour >= 0 && hour < 8) {
        setStatusInfo({
          status: 'Offline / Rest Mode',
          subtext: 'Replies in < 6-8 hrs upon waking',
          icon: Moon,
          color: 'text-indigo-300',
          beaconColor: 'bg-indigo-400',
        });
      } else if (hour >= 8 && hour < 10) {
        setStatusInfo({
          status: 'Morning Routine & Planning',
          subtext: 'Active soon · Fast reply',
          icon: Coffee,
          color: 'text-amber-300',
          beaconColor: 'bg-amber-400',
        });
      } else if (hour >= 10 && hour < 13) {
        setStatusInfo({
          status: 'Online & Coding',
          subtext: 'Instant or rapid response',
          icon: Code2,
          color: 'text-emerald-400',
          beaconColor: 'bg-emerald-400',
        });
      } else if (hour >= 13 && hour < 14) {
        setStatusInfo({
          status: 'Lunch & Recharge',
          subtext: 'Replies shortly',
          icon: Sun,
          color: 'text-amber-300',
          beaconColor: 'bg-amber-400',
        });
      } else if (hour >= 14 && hour < 19) {
        setStatusInfo({
          status: 'Deep Work & Client Delivery',
          subtext: 'Active & building websites',
          icon: Laptop,
          color: 'text-emerald-400',
          beaconColor: 'bg-emerald-400',
        });
      } else {
        setStatusInfo({
          status: 'Available & Reviewing Inquiries',
          subtext: 'Fast response',
          icon: Sparkles,
          color: 'text-[#C084FC]',
          beaconColor: 'bg-[#A855F7]',
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const IconComponent = statusInfo.icon;

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121A]/90 border border-white/[0.08] backdrop-blur-md shadow-sm text-xs ${className}`}
        title="Live time in Surat, Gujarat, India (IST)"
      >
        <span className={`w-2 h-2 rounded-full ${statusInfo.beaconColor} animate-pulse`} />
        <span className="font-mono text-[#F5F5F7] font-semibold">{timeString || 'IST'}</span>
        <span className="text-[#71717A]">·</span>
        <span className={`font-medium ${statusInfo.color}`}>{statusInfo.status}</span>
      </div>
    );
  }

  return (
    <div
      className={`p-4 sm:p-4.5 rounded-2xl bg-[#0D0D14] border border-white/[0.08] space-y-3 shadow-md relative overflow-hidden group ${className}`}
    >
      {/* Ambient background glow */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8B5CF6]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#8B5CF6]/20 transition-all" />

      {/* Header Row: Location & Live Clock */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
          <MapPin size={13} className="text-[#8B5CF6] shrink-0" />
          <span>Surat, India (IST)</span>
        </div>

        {/* Live Digital Clock Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#161622] border border-white/[0.06] text-xs font-mono font-bold text-[#F5F5F7] shadow-inner">
          <Clock size={11} className="text-[#A78BFA] animate-spin [animation-duration:8s]" />
          <span>{timeString || 'Loading...'}</span>
        </div>
      </div>

      {/* Activity Status with Live Pulsing Beacon */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-[#181826] border border-white/[0.08] shrink-0">
            <IconComponent size={14} className={statusInfo.color} />
            <span
              className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${statusInfo.beaconColor} animate-pulse`}
            />
          </div>
          <div>
            <span className={`text-xs font-bold block ${statusInfo.color} leading-tight`}>
              {statusInfo.status}
            </span>
            <span className="text-[11px] text-[#A1A1AA] block leading-tight">
              {statusInfo.subtext}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-mono text-emerald-400/90 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0">
          Live Status
        </span>
      </div>
    </div>
  );
};
