import React from 'react';

export type BadgeVariant = 'violet' | 'zinc' | 'success' | 'outline';
export type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'violet',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded-md tracking-wide';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  const variantStyles = {
    violet: 'bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/25',
    zinc: 'bg-white/[0.04] text-[#A1A1AA] border border-white/10',
    success: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    outline: 'bg-transparent text-[#F5F5F7] border border-white/15',
  };

  const dotColors = {
    violet: 'bg-[#8B5CF6]',
    zinc: 'bg-[#A1A1AA]',
    success: 'bg-emerald-400 animate-pulse',
    outline: 'bg-white',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} aria-hidden="true" />}
      <span>{label}</span>
    </span>
  );
};
