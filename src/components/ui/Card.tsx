import React from 'react';

interface CardProps {
  variant?: 'standard' | 'elevated' | 'interactive';
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'standard',
  glow = false,
  className = '',
  children,
  id,
}) => {
  const baseStyles =
    'relative rounded-2xl border transition-all duration-300 overflow-hidden';

  const variantStyles = {
    standard: 'bg-[#191922] border-white/[0.08]',
    elevated: 'bg-[#17171F] border-white/[0.1] shadow-xl',
    interactive:
      'bg-[#191922] border-white/[0.08] hover:border-[#A78BFA]/35 hover:bg-[#1E1E2A] hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6),0_0_20px_-5px_rgba(139,92,246,0.15)]',
  };

  const glowStyles = glow ? 'before:absolute before:inset-0 before:bg-radial-gradient before:pointer-events-none' : '';

  return (
    <div id={id} className={`${baseStyles} ${variantStyles[variant]} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
};
