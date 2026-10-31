import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
}) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden ${
        glow ? 'hover:shadow-glass-hover hover:border-brand-indigo/40' : ''
      } ${className}`}
    >
      {glow && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

