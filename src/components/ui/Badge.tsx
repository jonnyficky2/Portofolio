import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs font-medium px-3 py-1 gap-1.5',
  };

  const variantClasses = {
    primary: 'bg-brand-indigo/15 text-indigo-300 border border-brand-indigo/30',
    secondary: 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20',
    accent: 'bg-brand-blue/15 text-sky-300 border border-brand-blue/30',
    warning: 'bg-amber-500/10 text-amber-300 border border-amber-500/30',
    success: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
    outline: 'bg-transparent text-slate-400 border border-white/10',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

