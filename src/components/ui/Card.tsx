import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className = '', hoverEffect = false }: CardProps) => {
  const hoverStyles = hoverEffect 
    ? "hover:border-zinc-600 hover:bg-zinc-900/80 transition-all duration-300" 
    : "";

  return (
    <div className={`bg-zinc-950/50 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};