import React from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  containerClassName?: string;
  bgVariant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = '',
  containerClassName = '',
  bgVariant = 'primary',
  children,
}) => {
  const bgStyles = {
    primary: 'bg-[#0B0B0F]',
    secondary: 'bg-[#111116] border-y border-white/[0.04]',
  };

  return (
    <section
      id={id}
      className={`relative w-full py-16 sm:py-24 md:py-28 overflow-hidden ${bgStyles[bgVariant]} ${className}`}
    >
      <div className={`max-w-[1200px] mx-auto px-5 sm:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
