import React from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 min-h-[44px]',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary:
      'bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#FFFFFF] shadow-sm hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] active:scale-[0.98]',
    secondary:
      'bg-[#191922] hover:bg-[#22222E] text-[#F5F5F7] border border-white/10 hover:border-[#A78BFA]/40 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-white/[0.04] text-[#F5F5F7] border border-white/15 hover:border-[#8B5CF6] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-white/[0.06] text-[#A1A1AA] hover:text-[#F5F5F7]',
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 20,
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon size={iconSizes[size]} className="shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon size={iconSizes[size]} className="shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {content}
    </button>
  );
};
