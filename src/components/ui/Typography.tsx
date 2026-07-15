import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight text-white ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = '' }: TextProps) => (
  <h3 className={`text-xl md:text-2xl font-medium tracking-tight text-zinc-200 ${className}`}>
    {children}
  </h3>
);

export const Paragraph = ({ children, className = '' }: TextProps) => (
  <p className={`text-base md:text-lg text-zinc-400 leading-relaxed ${className}`}>
    {children}
  </p>
);