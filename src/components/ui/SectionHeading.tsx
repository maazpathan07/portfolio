import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignmentStyles = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 max-w-3xl ${alignmentStyles} ${className}`}>
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA] font-mono text-xs font-medium uppercase tracking-wider mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
