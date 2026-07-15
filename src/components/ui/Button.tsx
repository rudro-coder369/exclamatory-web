import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800",
    outline: "bg-transparent text-white hover:bg-white/5 border border-zinc-700 hover:border-zinc-500",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Jodi link hoy tahole <a> ba <Link> hisebe render korbe
  if (href) {
    if (download || href.startsWith('http')) {
      return (
        <a href={href} download={download} className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Normal button
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};