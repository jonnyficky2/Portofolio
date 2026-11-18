import React, { useState } from 'react';

export interface AvatarProps {
  src?: string;
  alt: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  glow?: boolean;
}

const sizeClasses = {
  sm: 'w-10 h-10 text-xs',
  md: 'w-14 h-14 text-sm',
  lg: 'w-20 h-20 text-base',
  xl: 'w-28 h-28 text-xl',
  '2xl': 'w-36 h-36 text-2xl',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials = 'JF',
  size = 'md',
  className = '',
  glow = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative inline-block rounded-full p-0.5 ${
        glow
          ? 'bg-gradient-to-tr from-brand-blue via-brand-indigo to-brand-violet shadow-subtle-glow'
          : 'bg-white/10'
      } ${className}`}
    >
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center bg-dark-surface`}
      >
        {!hasError && src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
            loading="lazy"
          />
        ) : (
          <span className="font-mono font-bold text-transparent bg-clip-text bg-accent-gradient select-none">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
};
